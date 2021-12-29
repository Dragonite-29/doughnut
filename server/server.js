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

// endpoints here
app.use('/user', userRouter);

//spin up server
app.listen(PORT, () => {
  console.log(`Server listening to: ${PORT}... at ${new Date}`);
});


module.exports = app;