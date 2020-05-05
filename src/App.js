import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import JobList from './JobList';
import './App.scss';

let data = require('./data.json');

function App() {
  const [jobs, setJobs] = useState(data);
  const [filterList, setFilterList] = useState(new Set());

  const handleFilter = (e, item, action) => {
    let currentFilter = new Set(filterList);

    if(action === 'remove'){
      currentFilter.delete(item);
    } else if(action === 'add'){
      currentFilter.add(item);
    } else {
      currentFilter.clear();
    }

    setFilterList(currentFilter);
  }

  function arrayContainsArray (superset, subset) {
    if (subset.size === 0) return false;

    return subset.every((value) => (superset.indexOf(value) >= 0));
  }

  useEffect(() => {
    if(filterList.size > 0) {
      const filteredJobs = [];  
      data.forEach(job => {
        job.tools = job.tools ? job.tools : [];
        job.languages = job.languages ? job.languages : [];
        let optionsList = [
          job.role, 
          job.level, 
          ...job.languages, 
          ...job.tools
        ];

        let subset = [...filterList];
        if(arrayContainsArray(optionsList, subset)) {
          filteredJobs.push(job);
        } else {
          const index = filteredJobs.indexOf(job);
    
          if (index > -1) {
            filteredJobs.splice(index, 1);
          }
        }
      });

      setJobs(filteredJobs);
    } else {
      setJobs(data);
    }
  }, [filterList]);

  return (
    <div className="App">
      <Filter
        filterList={filterList}
        handleFilter={handleFilter}
      />
      <JobList 
        jobs={jobs}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
