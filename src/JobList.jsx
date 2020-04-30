import React from 'react';
import Job from './Job';

let jobs = require('./data.json');

function JobList(props) {
  return (
    <>
      {
        jobs.map(job => 
          <Job/>
        )
      }
    </>
  );
}

export default JobList;