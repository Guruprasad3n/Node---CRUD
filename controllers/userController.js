// Register User
// Route Post /api/user/register
// Access Public
const errorHandler = require("../middlewares/errorHandler");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the User" });
});


// Login User
// Route Post /api/user/login
// Access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the User" });
});



// Current User -- Can See 
// Route Get /api/user/current
// Access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Information" });
});

module.exports = { registerUser, loginUser, currentUser };
