// Import pool query function from db.js
const db = require('../db.js');


// Declare jobQueries object to store all functions related to JOB_TRACKER table
const userQueries = {};

userQueries.getUserId = async(username) => {
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

userQueries.verifyUser = async(userId, password) => {
  try {
    const loginArr = [userId, password];
    const qString = 'SELECT _id FROM USERS where _id = $1 AND password = $2';
    const findUserResult = await db.query(qString, loginArr);
    return (findUserResult.rows.length == 1);
  } catch (err) {
    console.log(err);
  }
};

module.exports = userQueries;