import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
    // option... when creating a  document created-at & updated-at will be in collection
  }
);
const User = mongoose.model("User", userSchema);
export default User;
