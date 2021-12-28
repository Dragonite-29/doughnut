const express = require('express');
const jobQueries = require('../databaseFunctions/jobQueries.js')
const jobController = {};

/* Given a username, returns all job entries as an array of objects */
jobController.getAllJobs = async (req, res, next) => {
  try {
    const username = req.body.username;
    const jobEntries = await jobQueries.getAllJobs(username);
    res.locals.jobEntries = jobEntries;
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, add an empty entry for a new job. Returns the _id of the new entry */
jobController.addJob = async (req, res, next) => {
  try {
    const username = req.body.username;
    const entryId = await jobQueries.addJobEntry(username);
    res.locals.entryId = entryId;
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job entry company, updates the company field for the given entry. Returns nothing */
jobController.updateJobCompany = async (req, res, next) => {
  try {
    const username = req.body.username;
    const entryId = req.body.entryId;
    const company = req.body.company;
    await jobQueries.updateJobCompany(username, entryId, company);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = jobController;