import React from 'react';

const Header = () => {
  return (
    <div className='first-row'>
      <table>
        <thead>
          <tr>
            <th className = 'first-row-boxes'>Company Name</th>
            <th className = 'first-row-boxes'>Job Posting</th>
            <th className = 'first-row-boxes'>Role</th>
            <th className = 'first-row-boxes'>Date Submitted</th>
            <th className = 'first-row-boxes'>Application Status</th>
            <th className = 'first-row-boxes'>Notes</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;