import React from 'react'
import { useJsonFetch } from '../../hooks'

const FetchUser = ({ url }) => {
  const [{data, error, loading}] = useJsonFetch(url)

  return !loading?(
    <div className='list'>
      <h1>{url}</h1>
      <ul>
        <li>{`Data: ${data}`}</li>
        <li>{`Loading: ${loading}`}</li>
        <li>{`Error: ${error}`}</li>
      </ul>
    </div>
  ) : <div className='list'>{'loading...'}</div>
}

export default FetchUser