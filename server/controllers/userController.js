const express = require('express');
const jwt = require('jsonwebtoken');
const { User, PasswordReset } = require('../models/userModel.js');
// UserController class
const userController = {};

// create a new user in database
userController.createUser = (req, res, next) => {
    User.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
      },
      (err, result) => {
        if (err) {
          // if error code is 11000 it means an account already exists, so we notify user
          if (err.code === 11000) {
            res.locals.confirmation = { confirmation: false, email: false };
            return next();
          }
          return next(err);
        }
        // otherwise, if it works we send them a confirmation
        res.locals.confirmation = {
          confirmation: true,
          userInfo: {
            firstName: result.firstName,
            lastName: result.lastName,
            
          },
        };
        return next();
      }
    );
  };
  
  // verifies user exists and password matches in database during login
  userController.verifyUser = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      // compare provided password with the hashed one
      if (await user.comparePassword(req.body.password)) {
        res.locals.confirmation = {
          confirmed: true,
          userInfo: {
            firstName: user.firstName,
            lastName: user.lastName,
          },
        };
        return next();
      } else {
        res.locals.confirmation = {
          confirmed: false,
        };
        return next();
      }
    } catch (err) {
      if (err) {
        console.error(err);
        return next(err);
      }
    }
  };