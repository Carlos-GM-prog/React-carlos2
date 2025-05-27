import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <h1>404</h1>
      <button><Link to="/">Volver al inicio</Link></button>
    </div>
  )
}

export default Notfound
