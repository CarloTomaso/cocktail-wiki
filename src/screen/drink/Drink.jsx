import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/detail/Detail';



function Drink() {
    const params = useParams();
    const [drinkid, setdrinkid] = useState([]);
    
    const fetchId =() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + params.id)
          .then(response => {
              return response.json();
          }).then(data => {
              
              setdrinkid(data.drinks[0])})

      };


      useEffect(() => {
        fetchId();
    },[params.id])

console.log(drinkid)
      

  return (
    <>
  
                <Detail
                    key= {drinkid.idDrink}
                    {...drinkid}
                />
         
        
    </>
   
  )
}

export default Drink