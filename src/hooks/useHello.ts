import { useState, useEffect } from 'react'

export default () => {
  const [msg, setMsg] = useState('hello')

  useEffect(() => {
    setTimeout(() => {
      setMsg((msg) => `${msg} app`)
    }, 2000)
  }, [setMsg])

  return msg
}
