import React, { useState, Fragment } from "react";
// import { nanoid } from 'nanoid';
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
const LoginForm = () => {
  const [jobs, setJobs] = useState(data);
  const [addFormData, setAddFormData] = useState({
    companyName: '',
    jobPosting: '',
    role: '',
    dateSubmitted: '',
    appStatus: '',
    notes: ''
  });

  // const [editFormData, setEditFormData] = useState({
  //   fullName: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  // });

  // const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    console.log('does this happen change');
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    console.log('does this happen');
    event.preventDefault();

    const newJob = {
      id: 5,
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

  console.log('changed');
  return (
    <div className="container">
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
              <td key={`${index}-${job.companyName}`}>{job.companyName}</td>
              <td key={`${index}-${job.jobPosting}`}>{job.jobPosting}</td>
              <td key={`${index}-${job.role}`}>{job.role}</td>
              <td key={`${index}-${job.dateSubmitted}`}>{job.dateSubmitted}</td>
              <td key={`${index}-${job.appStatus}`}>{job.appStatus}</td>
              <td key={`${index}-${job.notes}`}>{job.notes}</td>
            </tr>
          ))}
          </tbody>
        </table>

      <h2>Add a Contact</h2>
      {/* <form onSubmit={() => { event.preventDefault(); console.log('submitted')}}> */}
        <label>
        <input 
          type='text'
          name='companyName'
          required='required'
          placeholder='Company name'
          onChange={() => console.log('hello')}

        />
        </label>
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
        <button onClick={() => {console.log('clicked')}}>Add</button>
      {/* </form> */}
    </div>
  );
};

export default LoginForm;