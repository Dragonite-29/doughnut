import React, {useEffect, useState} from 'react';
import JobRow from './JobRow';
import Header from './Header';
import '../styles/styles.scss';
import Button from '@mui/material/Button';


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
    // console.log('rows', rows);
    setRows(rows);
  };

  return (
    <div className='job-tracker'>
      <Header />
      {data.map(job => (
        <JobRow 
          key={job._id} 
          company={job.company_name} 
          role={job.role} 
          date={job.date_submitted} 
          posting={job.job_posting} 
          notes={job.notes}
          status={job.app_status}
        />
      ))}
      {rows}
      <Button variant="contained" onClick={() => {
        return handleAddRow();
      }}> Add </Button>
    </div>
  );
};

export default JobTracker;