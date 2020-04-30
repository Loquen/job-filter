import React from 'react';
import NavBar from './NavBar';
import JobList from './JobList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <JobList />
    </div>
  );
}

export default App;
