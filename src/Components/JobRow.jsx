import React from 'react';
import TextArea from './TextArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function JobRow(props) {
  return (
    <div className='row'>
      <TextArea id='companyName' value={props.company}/>
      <TextArea id='jobPosting'/>
      <TextArea id='role' value={props.role}/>
      <TextArea id='date'/>
      <TextArea id='status'/>
      <TextArea id='notes'/>
      {/* <Grid container direction="row">
        <TextArea />
        <TextArea />
        <TextArea />
        <TextArea />
        <TextArea />
        <TextArea />
      </Grid> */}
      {/* <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
          <Grid item xs={2}>
            <TextArea />
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
}

export default JobRow;