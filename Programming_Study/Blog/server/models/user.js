import moment from "moment";
import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["MainJuin", "Subjuin", "User"],
    default: "User"
  },
  register_data: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss")
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
      comments_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
      }
    }
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

export default User;