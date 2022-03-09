const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ROUNDS = 13;

exports.serverPage = (req, res) => {
  res.send("server listen at 8000");
};

exports.RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    res.status(400);
    throw new Error("User already exists! check your email");
  }

  try {
    bcrypt.hash(password, ROUNDS, (err, hash) => {
      const user = new User({ name, email, passwordHash: hash });
      user.save().then(() => {
        res.status(201).json({ message: "Registration Successful !" });
      });
    });
  } catch {
    res.status(400);
    throw new Error("Error Occurred!");
  }
});

exports.Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const recPassword = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (recPassword) {
      const tokenData = { id: existingUser._id };
      console.log(tokenData);
      res.json({
        token: `${jwt.sign(tokenData, process.env.JWT_SECRET, {
          expiresIn: "1d",
        })}`,
      });
    } else {
      res.status(400).json({ message: "Email or Password invalid !" });
    }
  } else {
    await bcrypt.compare(
      "dasdas",
      "$2b$10$//DXiVVE59p7G5k/4Klx/ezF7BI42QZKmoOD0NDvUuqxRE5bFFBLy"
    );
    res.status(400).json({ message: "Email or Password invalid !" });
  }
});
