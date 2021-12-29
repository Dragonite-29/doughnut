import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import '../App.css';

function JobTracker(data) {

  // const [jobs, setJobs] = useState(data);
  const [addFormData, setAddFormData] = useState({
    companyName: '',
    jobPosting: '',
    role: '',
    dateSubmitted: '',
    appStatus: '',
    notes: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDeafault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDeafault();
    const newJob = {
      // id: nanoid()
      companyName: addFormData.companyName,
      jobPosting: addFormData.jobPosting,
      role: addFormData.role,
      dateSubmitted: addFormData.dateSubmitted,
      appStatus: addFormData.appStatus,
      notes: addFormData.notes
    };

    const newJobs = [...jobs, newJob];
    setJobs(newJobs);
  }

  // const addJob = () => {

  //   fetch(`/our database/add`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/JSON'
  //     },
  //     body: JSON.stringify(body)
  //   })
  //     .then(() => {

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // const newJob = {
  //   exercise_description: this.state.exercise_description,
  //   time_per_exercise: this.state.time_per_exercise,
  //   difficulty: this.state.difficulty,
  //   exercise_completed: this.state.exercise_completed
  // }

  // axios.post('http://localhost:whatever/jobs/add', newJob)
  //   .then(data => console.log(res.data));

  // this.setState({
  //   exercise_description: '',
  //   time_per_exercise: 0,
  //   difficulty: '',
  //   exercise_completed: false,
  // })


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