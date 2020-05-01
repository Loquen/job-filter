import React, { useState } from 'react';
import Filter from './Filter';
import JobList from './JobList';
import './App.scss';

let jobs = require('./data.json');

function App() {
  const [filterList, setFilterList] = useState(new Set());

  const addFilterItem = (e, item) => {
    let currentFilter = new Set(filterList);
    currentFilter.add(item);
    setFilterList(currentFilter);
  }

  return (
    <div className="App">
      <Filter/>
      <JobList 
        jobs={jobs}
        addFilterItem={addFilterItem}
      />
    </div>
  );
}

export default App;
