const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController.js');


// Router handles requests sent to localhost:3000/job/*
// Expecting a body with different keys according to controller. For example: {username: 'dragonite'}

router.use(jobController.getUserId)

router.post('/getalljobs', 
  jobController.getAllJobs, 
  (req, res) => res.status(200).json(res.locals.jobEntries)
);

router.post('/addjob',
  jobController.addJob, 
  (req, res) => res.status(200).json(res.locals.entryId)
);

router.post('/updatecompany',
  jobController.updateJobCompany,
  (req, res) => res.sendStatus(200)
);

router.post('/updateposting',
  jobController.updateJobPosting,
  (req, res) => res.sendStatus(200)
);

router.post('/updaterole',
  jobController.updateJobRole,
  (req, res) => res.sendStatus(200)
);

router.post('/updatedate',
  jobController.updateJobDate,
  (req, res) => res.sendStatus(200)
);

router.post('/updatestatus',
  jobController.updateJobStatus,
  (req, res) => res.sendStatus(200)
);

router.post('/updatenotes',
  jobController.updateJobNotes,
  (req, res) => res.sendStatus(200)
);

router.post('/deletejob',
  jobController.deleteJob,
  (req, res) => res.sendStatus(200)
);

module.exports = router;