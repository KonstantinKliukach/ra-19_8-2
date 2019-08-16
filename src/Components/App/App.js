import React from 'react';
import './App.css';

import FetchUser from '../FetchUser'

const urls =[
  `http://localhost:7070/data`,
  `http://localhost:7070/error`,
  `http://localhost:7070/loading`
]

function App() {
  return (
    <div className="app">
      {urls.map( url => {
        return <FetchUser url={url} />
      })}
    </div>
  )
}

export default App;
