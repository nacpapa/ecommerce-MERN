const mongooose = require("mongoose");

const UserSchema = new mongooose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dzqnxqgqw/image/upload/v1589788981/default_user_avatar_qxqjqz.png",
    },
  },
  { timestamps: true }
);

module.exports = mongooose.model("User", UserSchema);
