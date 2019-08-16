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
    urls.map( url => {
      return <FetchUser url={url} />
    })
  );
}

export default App;
