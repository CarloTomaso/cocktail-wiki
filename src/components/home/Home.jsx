import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Home() {

    const [ listadrink, setlistadrink ] = useState ([])

    const fetchDrink =() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                setlistadrink([...listadrink, data])})

};

useEffect(() => {
    fetchDrink();
},[])
  return (
    <>
    
        {
            listadrink.map((item) => (
                <Card
                    key= {item.drinks.strDrink}
                />
            ))
        }
    </>
  )
}

export default Home