import React, {useEffect, useState} from 'react';
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

    <div className="app-container">

      <table>
        <thead>
          <tr>
            <th>Company name</th>
            <th>Job posting</th>
            <th>Role</th>
            <th>Date Submitted</th>
            <th>Application Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        {/* <tbody>
          {jobs.map((job) => (
            <tr>
              <td>{job.companyName}</td>
              <td>{job.jobPosting}</td>
              <td>{job.role}</td>
              <td>{job.dateSubmitted}</td>
              <td>{job.applicationStatus}</td>
              <td>{job.notes}</td>
            </tr>
          ))}
        </tbody> */}
      </table>

      <h3>Add a job</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type="text"
          name="companyName"
          required="required"
          placeholder=" Enter company name..."
          onChange={handleAddFormChange}
        />
        <input 
          type="text"
          name="jobPosting"
          required="required"
          placeholder="Job posting..."
          onChange={handleAddFormChange}
        />
        <input 
          type="text"
          name="role"
          required="required"
          placeholder="Enter role..."
          onChange={handleAddFormChange}
        />
        <input 
          type="date"
          name="dateSubmitted"
          required="required"
          placeholder="Input date..."
          onChange={handleAddFormChange}
        />

        <select name="appStatus" onChange={handleAddFormChange}>
          <option value="Application sent">Application sent</option>
          <option value="Phone screen">Phone screen</option>
          <option value="Technical interview">Technical interview</option>
          <option value="Offered">Offered</option>
          <option value="Signed">Signed</option>
          <option value="Rejected">Rejected</option>
          <option value="Declined">Declined</option>
          <option value="Ghosted">Ghosted</option>
        </select>

        <input 
          type="text"
          name="notes"
          placeholder="Enter notes..."
          onChange={handleAddFormChange}
        />

        <button type="submit" onClick={() => console.log('BOOOOOOOOOOO')}>Add</button>
      </form>
    </div>
  );
}

export default JobTracker;