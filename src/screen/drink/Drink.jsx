import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/detail/Detail';


function Drink() {
    const params = useParams();
  return (
    <div>Drink  {params.id}</div>
  )
}

export default Drink