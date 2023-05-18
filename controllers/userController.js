// Register User
// Route Post /api/user/register
// Access Public
const errorHandler = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const registerUser = asyncHandler(async (req, res) => {
  //  try{
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All Fields Are Mandetory");
  }
  const userExsist = await userModel.findOne({ email });
  if (userExsist) {
    res.status(400);
    throw new Error("Email Already Exist");
  }

  // Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await userModel.create({
    userName,
    email,
    password: hashedPassword,
  });
  console.log(user, "User Created");
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User Data Not Valid");
  }

  res.json({ message: "Register the User" });

  //   }
  //   catch(e){
  //     console.log(e+" "+ "Fill all The Fields")
  //   }
});

// Login User
// Route Post /api/user/login
// Access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are Mandetory");
  }
  const user = await userModel.findOne({ email });
  // comparison Saved password with hashedPasseord
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.userName,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is not Valid");
  }
  //   res.json({ message: "Login the User" });
});

// Current User -- Can See
// Route Get /api/user/current
// Access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
