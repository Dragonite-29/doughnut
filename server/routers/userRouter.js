const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.use(userController.getUserId);

// handle login requests
router.post('/verify', 
  userController.verifyUser, 
  (req, res) => res.status(200).json(res.locals.isVerified)
);

// // handle signup requests
// router.route('/signup').post(userController.createUser, (req, res) => {
//     res.status(200).json(res.locals.confirmation);
//   });

/*
// handle signup requests
router.route('/signup').post(userController.createUser, (req, res) => {
    res.status(200).json(res.locals.confirmation);
  });
// //handle requests to post new information to job spreadsheet
// router.route('/addjob').post(userController.addJob, (req, res) => {
//   res.status(200).json(res.locals.confirmation);
// })
// //hande requests to delete 
// router.route('/deletejob').delete(userController.deleteJob, (req, res) => {
//   res.status(200).json(res.locals.confirmation);
// })

// //handle requests to post new information to algo spreadsheet
// router.route('/addalgo').post(userController.addAlgo, (req, res) => {
//   res.status(200).json(res.locals.confirmation);
// })

// //handle request to delete
// router.route('/deletealgo').delete(userController.deleteAlgo, (req, res) => {
//   res.status(200).json(res.locals.confirmation);
// })
// module.exports = router;

//handle request to delete
router.route('/deletealgo').delete(userController.deleteAlgo, (req, res) => {
  res.status(200).json(res.locals.confirmation);
})
*/

module.exports = router;

