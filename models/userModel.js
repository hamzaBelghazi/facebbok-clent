const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "You muste enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "You muste enter your last name"],
    },
    email: {
      type: String,
      required: [true, "You muste enter your email"],
      unique: [true, "This email Already taken!"],
      validate: [validator.isEmail, "Please provide a valid email"],
      lowercase: true,
    },
    password: {
      type: String,
      validate: {
        validator: function (val) {
          return val.length >= 8;
        },
        message: "password must be 8 chars",
      },
      required: [true, "You muste enter a pasword"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "You muste enter password confirmation"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "passwords not the same!",
      },
    },
    avatar: {
      type: String,
      default: "avatar-default.png",
    },
    createAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

UserSchema.methods.correctPass = async function (condPass, realPass) {
  return await bcrypt.compare(condPass, realPass);
};

module.exports = mongoose.model("User", UserSchema);
