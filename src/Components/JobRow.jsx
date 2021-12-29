import React from 'react';
import TextArea from './TextArea';
import DeleteRowButton from './DeleteRow.Button';

function JobRow(props) {
  const { handleDelete, entryId, company, posting, role, date, status, notes } = props;

  return (
    <div className='row'>
      <TextArea api='updatecompany' name='company' entryId={entryId} value={company}/>
      <TextArea api='updateposting' name='posting' entryId={entryId} value={posting} />
      <TextArea api='updaterole' name='role' entryId={entryId} value={role}/>
      <TextArea api='updatedate' name='date' entryId={entryId} value={date}/>
      <TextArea api='updatestatus' name='status' entryId={entryId} value={status}/>
      <TextArea api='updatenotes' name='notes' entryId={entryId} value={notes}/>
      <DeleteRowButton handleDelete={handleDelete} entryId={entryId}/>
    </div>
  );
}

export default JobRow;