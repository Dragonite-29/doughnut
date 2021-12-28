import React from 'react';
import ReactDOM from 'react-dom';

function JobTracker() {
  return (
    <div>
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