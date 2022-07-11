import express from 'express';
import auth from '../../server/middlewarer/auth';

// Model
import Post from '../../server/models/post';

const router = express.Router();

// get은 데이터를 가져오는 것.
// post는 데이터를 보내는 것.
router.get('/', async(req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
})

router.post('/', auth, async(req, res, next) => {
  try {
    console.log(req, "글 작성 req");
    const {title, contents, fileUrl, creator} = req.body;
    const newPost = await Post.create({
      title, contents, fileUrl, creator
    });
    res.json(newPost);
  } catch(e) {
    console.log(e);
  }
})

export default router;