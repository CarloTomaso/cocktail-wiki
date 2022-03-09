import React from 'react'
import { useParams } from 'react-router-dom'
function Drink() {
    const params = useParams();
  return (
    <div>Drink{params.id}</div>
  )
}

export default Drink