import express from 'express';
import bcrypt, { hash } from 'bcryptjs';

import jwt from 'jsonwebtoken';

// Model
import User from '../../server/models/user';

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req);
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    // 400 에러를 반환한다는 의미.
    return res.status(400).json({ msg: "모든 필드를 채워주세요." })
  }
  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다" });
    // else
    // 중복회원이 존재하지 않는다는 의미.
    const newUser = new User({
      name,
      email,
      password,
    });
  })
})


bcrypt.getSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
    // 에러가 있으면 에러를 전달함.
    if (err) throw err;
    newUser.password = hash;
    newUser.save().then((user) => {
      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          })
        }
      )
    })
  })
});

// 회원 검색
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users")
    res.status(200).json(users)
  } catch (e) {
    console.log(e);
    res.status(400).json({
      msg: e.message
    })
  }
})