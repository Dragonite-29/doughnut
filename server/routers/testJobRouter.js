const express = require('express');
const router = express.Router();
const jobQueries = require('../databaseFunctions/jobQueries.js')

// this is expecting a get request to be sent to localhost:3000/testjob/addNew
// expecting a body: {username: 'dragonite'}

addJobController = async (req, res, next) => {
  const username = req.body.username;
  const entryId = await jobQueries.addJobEntry(username);
  res.locals.entryId = entryId;
  return next();
};

router.post('/addnew', addJobController, (req, res) => res.status(200).json(res.locals.entryId));

module.exports = router;