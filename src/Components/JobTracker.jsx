import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import JobRow from './JobRow';
import '../styles/styles.scss';

const JobTracker = () => {
  const [data, setData] = useState([]);
  let onLoad;
  const [rows, setRows] = useState([]);
  useEffect( async () => {
    // code to run on component mount
    await fetch('/job/getalljobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'dragonite'})
    })
      .then((data) => data.json())
      .then((response) => {
        console.log('response', response);
        setData(response);
      });
  }, []);

  const handleAddRow = () => {
    console.log('add');
    rows.push(<JobRow />);
    setRows(rows);
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
      </table>
      {/* <JobRow /> */}
      {data.map(job => (
        <JobRow key={job._id} company={job.company_name} role={job.role}/>
      ))}
      {rows}
      {/* <button onClick={() => handleAddRow()}>Add</button> */}
      {/* <button onClick={() => console.log('hi')}>Add</button> */}
      <button onClick={handleAddRow}>Add</button>
    </div>
  );
}

export default JobTracker;