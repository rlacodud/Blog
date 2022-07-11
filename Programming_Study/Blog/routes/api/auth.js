import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import auth from '../../server/middlewarer/auth';
import config from '../../server/config/index';

const { JWT_SECRET } = config;

import User from '../../server/models/user';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: '모든 필드를 채워주세요' })
  }

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: '존재하지 않는 유저입니다.' });

    bcrypt.compare(password, user.password).then(isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: '비밀번호가 일치하지 않습니다.' })

      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: '2 days' },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role
            }
          })
        }
      )
    }
  })
})

router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) throw Error('유저가 존재하지 않습니다.');
    res.json(user);
  } catch(e) {
    console.log(e);
    res.status(400).json({msg: e.message});
  }
})

export default router;