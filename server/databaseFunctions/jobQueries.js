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

jobQueries.addJobEntry = async (username) => {
  try {
    const userId = await getUserID(username);
    const userIdArr = [userId];
    const qString = 'INSERT INTO JOB_TRACKER (user_id) VALUES ($1)'
    // const entryIdResult = await db.query(qString, userIdArr);
    // const entryId = entryIdResult.oid;
    const entryIdResult = await db.query(qString, userIdArr);
    const entryId = entryIdResult.insertId;
    console.log("entryId is", entryId)
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