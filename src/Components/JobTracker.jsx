import {React, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function JobTracker() {

  useEffect(() => {
    // code to run on component mount
    axios.get('http://localhost:3000/jobs')
      .then(res => {
        this.setState({jobs: res.data})
      })
      .catch(function(error) {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h1 alignSelf='center'>Job Tracker</h1>
      <table>
        <tr>
          <th>Company name</th>
          <th>Job posting</th>
          <th>Role</th>
          <th>Date Submitted</th>
          <th>Application Status</th>
          <th>Notes</th>
        </tr>
      </table>
    </div>
  );
}

export default JobTracker;