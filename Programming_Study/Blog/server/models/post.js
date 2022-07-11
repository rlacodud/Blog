import mongoose from "mongoose";
import moment from "moment";

// mongoose.set("useCreateIndex", true) 

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  contents: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: -2
  },
  fileUrl: {
    type: String,
    default: "https://picsum.photos/200/300"
  },
  date: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss")
  },
  category: {
    type: String,
    ref: "category"
  },
  comments: [{
    type: String,
    ref: "comment"
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("post", PostSchema);
export default Post;