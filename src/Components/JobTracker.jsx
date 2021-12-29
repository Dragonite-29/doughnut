import React, { useEffect, useState } from 'react';
import '../styles/styles.scss';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import LoginForm from './LoginForm';

// import data from '../mock-data-js';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { loadJobs, deleteJob } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const data = [
  {
    id: 1,
    companyName: 'Apple',
    jobPosting: 'www.apple.com',
    role: 'SWE',
    dateSubmitted: '12/02/2021',
    appStatus: 'Applied',
    notes: 'dream job'
  },
  {
    id: 2,
    companyName: 'Banana',
    jobPosting: 'www.ban.com',
    role: 'Frontend Engineer',
    dateSubmitted: '12/10/2021',
    appStatus: 'Applied',
    notes: 'mock interview'
  },
];
function JobTracker() {
  const dispatch = useDispatch();
  // const { jobs } = useSelector(state => state.jobs);

  // useEffect(() => {
  //   dispatch(loadJobs());
  // }, []);

  const handleDelete = (id) => {
    console.log('deleted');
    // if (window.confirm('Are you sure you want to delete this job application?')) {
    //   dispatch(deleteJob(id));
    // }
  };

  const myFunction = () => {
    console.log('clicked');
  };


  // useEffect(() => {
  //   // code to run on component mount
  //   axios.get('http://localhost:3000/jobs')
  //     .then(res => {
  //       this.setState({jobs: res.data})
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  // }, []);

  const [ jobs, setJobs ] = useState(data);
  const [ addFormData, setAddFormData ] = useState({
    companyName: '',
    jobPosting: '',
    role: '',
    dateSubmitted: '',
    appStatus: '',
    notes: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    console.log('he', newFormData);
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    console.log('does this happen');
    const newJob = {
      id: nanoid(),
      companyName: addFormData.companyName,
      jobPosting: addFormData.jobPosting,
      role: addFormData.role,
      dateSubmitted: addFormData.dateSubmitted,
      appStatus: addFormData.appStatus,
      notes: addFormData.notes
    };

    const newJobs = [...jobs, newJob];
    setJobs(newJobs);
  };

  return (
    <div className='container'>
      {/* <h1 alignSelf='center'>Job Tracker</h1>
      <table>
        <tr>
          <th>Company name</th>
          <th>Job posting</th>
          <th>Role</th>
          <th>Date Submitted</th>
          <th>Application Status</th>
          <th>Notes</th>
        </tr>
      </table> */}
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Posting</th>
            <th>Role</th>
            <th>Date Submitted</th>
            <th>Application Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.companyName}</td>
              <td>{job.jobPosting}</td>
              <td>{job.role}</td>
              <td>{job.dateSubmitted}</td>
              <td>{job.appStatus}</td>
              <td>{job.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        Add a job application
      </h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type='text'
          name='companyName'
          // required='required'
          placeholder='Company name'
          onChange={handleAddFormChange}
        />
        <input 
          type='text'
          name='jobPosting'
          placeholder='Link to job opening'
          onChange={handleAddFormChange}
        />
        <input 
          type='text'
          name='role'
          placeholder='Role'
          onChange={handleAddFormChange}
        />
        <input 
          type='text'
          name='dateSubmitted'
          placeholder='Date submitted'
          onChange={handleAddFormChange}
        />
        <input 
          type='text'
          name='appStatus'
          placeholder='Status'
          onChange={handleAddFormChange}
        />
        <input 
          type='text'
          name='notes'
          placeholder='Notes'
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
      <button onClick={myFunction}>Click me</button>


      <div>
      <Button variant='contained' color='primary' onClick={() => console.log('hello') }>Add</Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company Name</StyledTableCell>
              <StyledTableCell align="center">Job Posting</StyledTableCell>
              <StyledTableCell align="center">Role</StyledTableCell>
              <StyledTableCell align="center">Date Submitted</StyledTableCell>
              <StyledTableCell align="center">App Status</StyledTableCell>
              <StyledTableCell align="center">Notes</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {jobs && jobs.map((job) => (
              <StyledTableRow key={job.id}>
                <StyledTableCell component="th" scope="row">
                  {job.companyName}
                </StyledTableCell>
                <StyledTableCell align="center">{job.jobPosting}</StyledTableCell>
                <StyledTableCell align="center">{job.role}</StyledTableCell>
                <StyledTableCell align="center">{job.dateSubmitted}</StyledTableCell>
                <StyledTableCell align="center">{job.appStatus}</StyledTableCell>
                <StyledTableCell align="center">{job.notes}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> */}
          <TableBody>
            {data && data.map((job) => (
              <StyledTableRow key={job.id}>
                <StyledTableCell component="th" scope="row">
                  {job.companyName}
                </StyledTableCell>
                <StyledTableCell align="center">{job.jobPosting}</StyledTableCell>
                <StyledTableCell align="center">{job.role}</StyledTableCell>
                <StyledTableCell align="center">{job.dateSubmitted}</StyledTableCell>
                <StyledTableCell align="center">{job.appStatus}</StyledTableCell>
                <StyledTableCell align="center">{job.notes}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup variant="contained" aria-label="contained button group">
                    <Button color='primary'>Edit</Button>
                    <Button color='secondary' onClick={handleDelete}>Delete</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <LoginForm />
    </div>
  );
}

export default JobTracker;