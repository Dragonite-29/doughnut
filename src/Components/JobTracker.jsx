import React, {useEffect, useState} from 'react';
import JobRow from './JobRow';
import Header from './Header';
import '../styles/styles.scss';
import Button from '@mui/material/Button';

const JobTracker = () => {
  const [data, setData] = useState([]);
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

  const handleAddRow = async () => {
    let Id;
    console.log('add');
    // create new entry in the database
    await fetch('/job/addjob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'dragonite'})
    })
      .then((data) => data.json())
      .then((response) => {
        console.log('entryId', response);
        Id = response;
      });
    rows.push(<JobRow key={Id}/>);
    setRows([...rows]);
  };

  const handleDelete = async (entryId) => {
    let Id;
    console.log('delete');
    // create new entry in the database
    await fetch('/job/deletejob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'dragonite', entryId })
    })
      .then((data) => data.json())
      .then((response) => {
        console.log('response after delete', response);
        setData(response);
      });
  };


  return (
    <div>
      <div className='job-tracker'>
        <Header />
        {data.map(job => (
          <JobRow 
            key={job._id} 
            entryId={job._id} 
            company={job.company_name} 
            role={job.role} 
            date={job.date_submitted} 
            posting={job.job_posting} 
            notes={job.notes}
            status={job.app_status}
            handleDelete={handleDelete}
          />
        ))}
        {rows}
        <Button variant="contained" onClick={() => {
          return handleAddRow();
        }}> Add </Button>
      </div>
    </div>

  );
};

export default JobTracker;