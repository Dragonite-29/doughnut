const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import routers here
const userRouter = require('./routers/userRouter.js');
const jobRouter = require('./routers/jobRouter.js');

// Statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));


// Serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// endpoints here
// app.use('/user', userRouter);

app.use('/job', jobRouter);

/*
app.use('/user', userRouter);

// catch-all Error 404
app.use((req, res) => res.status(404).send("<h1> 404 Route Not Found </h1>"));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
*/

//spin up server
app.listen(PORT, () => {
  console.log(`Server listening to: ${PORT}... at ${new Date}`);
});


module.exports = app;