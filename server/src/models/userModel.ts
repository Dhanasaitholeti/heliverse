import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
