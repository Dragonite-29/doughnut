import React, { useState } from 'react';

function TextArea(props) {
  const [ currValue, setCurrValue ] = useState(props.value);

  // make update post request to database
  const updateValue = async (event, api, entryId, name) => {
    setCurrValue(event.target.value);
    console.log('currValue', event.target.value, api, entryId, currValue);

    await fetch(`/job/${api}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'dragonite', entryId, [name]: currValue })
    })
      .then(() => {
        console.log('updated database', api);
      });
  };

  return (
    <textarea
      onChange={(event) => updateValue(event, props.api, props.entryId, props.name)}
      value={currValue}
    />
  );
}

export default TextArea;