import React from 'react';
import Job from './Job';

function JobList({jobs, addFilterItem}) {
  return (
    <div className='job-list'>
      { jobs.map(job => 
        <Job
          key={job.id}
          company={job.company}
          url={job.logo}
          newJob={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages ? job.languages : []}
          tools={job.tools ? job.tools : []}
          addFilterItem={addFilterItem}
        />
      )}
    </div>
  );
}

export default JobList;