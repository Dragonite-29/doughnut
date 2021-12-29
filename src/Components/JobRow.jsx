import React from 'react';
import TextArea from './TextArea';

function JobRow(props) {
  return (
    <div className='row'>
      <TextArea api='updatecompany' name='company' entryId={props.entryId} value={props.company}/>
      <TextArea api='updateposting' name='posting' entryId={props.entryId} value={props.posting} />
      <TextArea api='updaterole' name='role' entryId={props.entryId} value={props.role}/>
      <TextArea api='updatedate' name='date' entryId={props.entryId} value={props.date}/>
      <TextArea api='updatestatus' name='status' entryId={props.entryId} value={props.status}/>
      <TextArea api='updatenotes' name='notes' entryId={props.entryId} value={props.notes}/>
    </div>
  );
}

export default JobRow;