// Import pool query function from db.js
const db = require('../db.js');


// Declare jobQueries object to store all functions related to JOB_TRACKER table
const jobQueries = {};

jobQueries.getUserId = async(username) => {
  try {
    const usernameArr = [username];
    const qString = `SELECT _id FROM USERS where username = $1`;
    const userIdResult = await db.query(qString, usernameArr);
    const userId = userIdResult.rows[0]._id;
    return userId;

  } catch (err) {
    console.log(err);
  }
};

jobQueries.getAllJobs = async (userId) => {
  try {
    const userIdArr = [userId];
    const qString = `SELECT * FROM JOB_TRACKER WHERE user_id = $1 ORDER BY _id ASC`;
    const results = await db.query(qString, userIdArr);
    return results.rows;

  } catch (err) {
    console.log(err);
  }
};

jobQueries.addJob = async (userId) => {
  try {
    // Create new empty entry in JOB_TRACKER
    const userIdArr = [userId];
    const qString = `INSERT INTO JOB_TRACKER (user_id) VALUES ($1)`;
    await db.query(qString, userIdArr);

    // Get JOB_TRACKER _id of new entry
    const qStringId = `SELECT * FROM JOB_TRACKER ORDER BY _id DESC LIMIT 1`;
    const entryIdResult = await db.query(qStringId);
    const entryId = entryIdResult.rows[0]._id;
    return entryId;

  } catch (err) {
    console.log(err);
  }
};

jobQueries.updateField = async (userId, entryId, fieldName, companyName) => {
  try {
    // Fill company field where userId and entryId are a match in JOB_TRACKER
    const variablesArr = [userId, entryId, companyName];
    const qString = 
    `UPDATE JOB_TRACKER 
    SET ${fieldName} = $3
    WHERE _id = $2 AND user_id = $1
    `;
    await db.query(qString, variablesArr);
    return;
  } catch (err) {
    console.log(err);
  }
};


jobQueries.deleteJob = async (userId, entryId) => {
  try {
    const variablesArr = [userId, entryId];
    const qString = `
    DELETE FROM JOB_TRACKER
    WHERE _id = $2 AND user_id = $1
    `;
    await db.query(qString, variablesArr);
  return;
  } catch (err) {
    console.log(err);
  }
};

module.exports = jobQueries;