import React from 'react';

const Header = () => {
  return (
    <div className='first-row'>
      <table>
        <thead>
          <tr>
            <th className = 'first-row-boxes'>COMPANY NAME</th>
            <th className = 'first-row-boxes'>JOB POSTING</th>
            <th className = 'first-row-boxes'>ROLE</th>
            <th className = 'first-row-boxes'>DATE SUBMITTED</th>
            <th className = 'first-row-boxes'>APPLICATION STATUS</th>
            <th className = 'first-row-boxes'>NOTES</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Header;