import { useState, useEffect } from 'react'

const useJsonFetch = (url, opt) => {
  
  const [data, setData] = useState()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function fetchUrl(url) {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        setError(response.statusText);
        setLoading(false)
      }
      try {
        const newData = await response.json()
        setData(newData)
        setLoading(false)
      }
      catch(e) {
        setError(e)
        setLoading(false)
      }
    })(url)
  }, [])
  return [{data, error, loading}]
}

export default useJsonFetch