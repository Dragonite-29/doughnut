import React from 'react';
import TextArea from './TextArea';

function DeleteRowButton(props) {
  const { handleDelete, entryId } = props;
  // console.log('delete button entry id', entryId);

  return (
    <button className="deleteRowButton"
      type="button"
      onClick={() => handleDelete(entryId)}
    >X</button>
  );
}

export default DeleteRowButton;