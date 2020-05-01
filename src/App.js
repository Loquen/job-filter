import React, { useState } from 'react';
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
