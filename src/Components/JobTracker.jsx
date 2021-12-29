import React, {useEffect, useState} from 'react';
import JobRow from './JobRow';
import '../styles/styles.scss';

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

  return (
    <div className='container'>
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
        />
      ))}
      {rows}
      <button onClick={() => {
        return handleAddRow();
      }}> Add </button>
    </div>
  );
};

export default JobTracker;