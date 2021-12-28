const express = require('express');
const jobQueries = require('../databaseFunctions/jobQueries.js')
const jobController = {};


/* Given a username, save the table _id to res.locals.userId */
jobController.getUserId = async (req, res, next) => {
  try {
    const username = req.body.username;
    const userId = await jobQueries.getUserId(username);
    res.locals.userId = userId;
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, returns all job entries as an array of objects */
jobController.getAllJobs = async (req, res, next) => {
  try {
    const jobEntries = await jobQueries.getAllJobs(res.locals.userId);
    res.locals.jobEntries = jobEntries;
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, add an empty entry for a new job. Returns the _id of the new entry */
jobController.addJob = async (req, res, next) => {
  try {
    const entryId = await jobQueries.addJob(res.locals.userId);
    res.locals.entryId = entryId;
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job company, updates the company field for the given entry. Returns nothing */
jobController.updateJobCompany = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const company = req.body.company;
    await jobQueries.updateField(res.locals.userId, entryId, "company_name", company);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job posting URL, updates the job_posting field for the given entry. Returns nothing */
jobController.updateJobPosting = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const posting = req.body.posting;
    await jobQueries.updateField(res.locals.userId, entryId, "job_posting", posting);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job role, updates the role field for the given entry. Returns nothing */
jobController.updateJobRole = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const role = req.body.role;
    await jobQueries.updateField(res.locals.userId, entryId, "role", role);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job date (as string), updates the date_submitted field for the given entry. Returns nothing */
jobController.updateJobDate = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const date = req.body.date;
    await jobQueries.updateField(res.locals.userId, entryId, "date_submitted", date);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job status, updates the app_status field for the given entry. Returns nothing */
jobController.updateJobStatus = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const status = req.body.status;
    await jobQueries.updateField(res.locals.userId, entryId, "app_status", status);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, and job notes, updates the notes field for the given entry. Returns nothing */
jobController.updateJobNotes = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    const notes = req.body.notes;
    await jobQueries.updateField(res.locals.userId, entryId, "notes", notes);
    return next();
  } catch (err) {
    return next(err);
  }
};

/* Given a username, job entry id, deletes the given entry. Returns nothing */
jobController.deleteJob = async (req, res, next) => {
  try {
    const entryId = req.body.entryId;
    await jobQueries.deleteJob(res.locals.userId, entryId);
    return next();
  } catch (err) {
    return next(err);
  }
};


module.exports = jobController;