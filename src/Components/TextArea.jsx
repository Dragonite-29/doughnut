import React, { useState } from 'react';

function TextArea(props) {

  const [ currValue, setCurrValue ] = useState(props.value);
  return (
    <textarea
      onChange={(e) => {
        setCurrValue(e.target.value);
        console.log('currValue', e.target.value, currValue);
      }}
      value={currValue}
    />
  );
}

export default TextArea;