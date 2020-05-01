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

  const createJobOptions = () => {
    let updatedJobs = jobs;
    updatedJobs.forEach(job => {
      job.tools = job.tools ? job.tools : [];
      job.languages = job.languages ? job.languages : [];
      let optionsList = [
        job.role, 
        job.level, 
        ...job.languages, 
        ...job.tools
      ];

      updatedJobs.optionsList = optionsList;
    });

    setJobs(updatedJobs);
  }

  useEffect(() => {
    if(filterList.size > 0) {
      const filteredJobs = [];  
      jobs.forEach(job => {
        job.tools = job.tools ? job.tools : [];
        job.languages = job.languages ? job.languages : [];
        let optionsList = [
          job.role, 
          job.level, 
          ...job.languages, 
          ...job.tools
        ];

        filterList.forEach(option => {
          if(optionsList.includes(option) && !filteredJobs.includes(job)){
            filteredJobs.push(job);
          } else {
            console.log(option, optionsList);
            const index = filteredJobs.indexOf(option);
            if (index > -1) {
              filteredJobs.splice(index, 1);
            }
          }
        });
      });

    // https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array

    //   var arr = [1,2,3,4],
    // brr = [2,4],
    // res = arr.filter(f => !brr.includes(f));

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
