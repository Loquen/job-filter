import React from 'react';

function Job({
  company, url, newJob, featured, position,
  role, level, postedAt, contract, location,
  languages, tools, handleFilter
}) {
  let filters = [role, level, ...languages, ...tools];
  return (
    <div className={`job ${featured ? 'feat' : ''}`}>
      <div className='logo'>
        <img src={url} alt={`${company} logo`}/>
      </div>
      <div className='company'>
        <div className='title'>{company}</div>
        <div className={newJob ? 'new' : 'hide'}>New!</div>
        <div className={featured ? 'feature' : 'hide'}>Featured</div>
      </div>
      <div className='position'>
        {position}
      </div>
      <div className='about'>
        <div className='element'>{postedAt}</div>
        <div className='dot'></div>
        <div className='element'>{contract}</div>
        <div className='dot'></div>
        <div className='element'>{location}</div>
      </div>
      <hr/>
      <div className='filter'>
        {filters.map((item, key) => 
          <div 
            key={key} 
            className='filter-option'
            onClick={(e) => handleFilter(e, item, 'add')}
          >
            {item}
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;