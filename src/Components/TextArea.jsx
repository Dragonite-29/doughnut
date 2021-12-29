import React, { useState } from 'react';

function TextArea(props) {

  const [ currValue, setCurrValue ] = useState(props.value);
  return (
    <textarea
      onChange={(event) => {
        console.log('currValue', event.target.value);
        return setCurrValue(event.target.value);
      }}
      value={currValue}
    />
  );
}

export default TextArea;