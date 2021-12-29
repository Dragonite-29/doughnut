import React, { useState } from 'react';

function TextArea(props) {
  const [ currValue, setCurrValue ] = useState(props.value);

  // make update post request to database
  const updateValue = async (event, api, entryId, name) => {
    setCurrValue(event.target.value);

    await fetch(`/job/${api}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'dragonite', entryId, [name]: event.target.value })
    })
      .then(() => {
        console.log('updated database', api);
      });
  };

  return (
    <textarea className ='text-area'
      onChange={(e) => updateValue(e, props.api, props.entryId, props.name)}
      value={currValue}
    />
  );
}

export default TextArea;