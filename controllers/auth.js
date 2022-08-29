const Owner = require("../models/Owner");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

exports.register = async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;
  // TODO receive firstName here
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  bcrypt.hash(password, 10).then(async (hash) => {
    await Owner.create({
      username,
      password: hash,
      firstName,
      lastName,
      // TODO add firstName and lastName here
    })
      .then((user) => {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          {
            id: user._id,
            username: username,
            firstName: firstName,
            lastName: lastName,
          },
          jwtSecret,
          {
            expiresIn: maxAge, // 3hrs
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
        res.status(201).json({
          message: "User successfully created",
          owner: user._id,
        });
      })
      .catch((error) =>
        res.status(400).json({
          message: "User not successfully created",
          error: error.message,
        })
      );
  });
};
// Validate existing credentials

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if username and password is provided
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or password is not present",
    });
  }

  try {
    const user = await Owner.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "Login unsuccessful",
        error: "user not found",
      });
    } else {
      // comparing given password with hashed password
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            {
              id: user._id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
            },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          });
          res.status(201).json({
            message: "User successfully logged in",
          });
        } else {
          res.status(400).json({ message: "login not successful" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
