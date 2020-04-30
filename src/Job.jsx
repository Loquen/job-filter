import React from 'react';

function Job({
  company, url, newJob, featured, position,
  role, level, postedAt, contract, location,
  languages, tools
}) {
  let filters = [role, level, ...languages, ...tools];
  return (
    <div className='job'>
      <div className='logo'>
        <img src={url} alt={`${company} logo`}/>
      </div>
      <div className='company'>
        <div className='title'>{company}</div>
        <div className='new'>New!</div>
        <div className='feature'>Featured</div>
      </div>
      <div className='position'>
        {position}
      </div>
      <div className='about'>
        <div className='time'>{postedAt}</div>
        <div className='type'>{contract}</div>
        <div className='location'>{location}</div>
      </div>
      {filters.map((item, key) => 
        <div key={key} className='filter-option'>
          {item}
        </div>
        )}
    </div>
  );
}

export default Job;