import React from 'react';
import SearchInputs from './components/SearchInputs';
import RepResults from './components/RepResults';
import RepDetail from './components/RepDetail';

import './App.css';

function App() {
  return (
    <div className="App">
      <SearchInputs />
      <RepResults />
      <RepDetail />
    </div>
  );
}

export default App;
