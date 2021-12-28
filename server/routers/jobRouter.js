const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController.js');


// Router handles requests sent to localhost:3000/job/*
// Expecting a body with appropriate keys. For example: {username: 'dragonite'}

router.post('/getalljobs', jobController.getAllJobs, (req, res) => res.status(200).json(res.locals.jobEntries));
router.post('/addjob', jobController.addJob, (req, res) => res.status(200).json(res.locals.entryId));


module.exports = router;