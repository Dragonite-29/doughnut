import React from 'react';
import TextArea from './TextArea';

function JobRow(props) {
  return (
    <div className='row'>
      <TextArea id='companyName' value={props.company}/>
      <TextArea id='jobPosting' value={props.posting} />
      <TextArea id='role' value={props.role}/>
      <TextArea id='date' value={props.date}/>
      <TextArea id='status' value={props.status}/>
      <TextArea id='notes' value={props.notes}/>
    </div>
  );
}

export default JobRow;