const asyncHandler = require("express-async-handler");
const { Mongoose } = require("mongoose");
const User = require("../Models/UserModel");
const GenerateToken = require("../JwtTokens/GenerateToken");

const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: GenerateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occurred!");
  }
});

const AuthUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: GenerateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

module.exports = { RegisterUser, AuthUser };
