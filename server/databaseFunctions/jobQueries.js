// Import pool query function from db.js
const db = require('../db.js');

// Declare helper function to find USER _id given a username value
const getUserID = async(username) => {
  try {
    const usernameArr = [username];
    const qString = 'SELECT _id FROM USERS where username = $1';
    const userIdResult = await db.query(qString, usernameArr);
    const userId = userIdResult.rows[0]._id;
    return userId;

  } catch (err) {
    console.log(err);
  }
}

// Declare jobQueries object to store all functions related to JOB_TRACKER table
const jobQueries = {};

jobQueries.getAllJobs = async (username) => {
  try {
    const qString = 'SELECT * FROM JOB_TRACKER';
    const results = await db.query(qString);
    return results.rows;

  } catch (err) {
    console.log(err);
  }
}

jobQueries.addJobEntry = async (username) => {
  try {
    // Get USERS _id value for requested username
    const userId = await getUserID(username);

    // Create new empty entry in JOB_TRACKER
    const userIdArr = [userId];
    const qString = 'INSERT INTO JOB_TRACKER (user_id) VALUES ($1)';
    await db.query(qString, userIdArr);

    // Get JOB_TRACKER _id of new entry
    const qStringId = 'SELECT * FROM JOB_TRACKER ORDER BY _id DESC LIMIT 1';
    const entryIdResult = await db.query(qStringId);
    const entryId = entryIdResult.rows[0]._id;
    return entryId;

  } catch (err) {
    console.log(err);
  }
}

jobQueries.updateJobCompany = async (username, entryID, companyName) => {
  
}

jobQueries.updateJobPosting = async (username, entryID, jobPosting) => {
  
}

jobQueries.updateJobRole = async (username, entryID, jobRole) => {
  
}

jobQueries.updateJobDate = async (username, entryID, jobDate) => {
  
}

jobQueries.updateJobStatus = async (username, entryID, jobStatus) => {
  
}

jobQueries.updateJobNotes = async (username, entryID, jobNotes) => {
  
}

jobQueries.deleteJobEntry = async (username, entryID) => {
  
}

module.exports = jobQueries;