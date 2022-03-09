import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import './Home.scss'
import {TextField} from '@mui/material'

function Home() {
    const [filtro, setFiltro] = useState("");
    const [ listadrink, setlistadrink ] = useState ([]);

    const fetchDrink =() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ filtro)
            .then(response => {
                return response.json();
            }).then(data => {
                
                setlistadrink(data.drinks)})

        };

useEffect(() => {
    fetchDrink();
},[filtro])

console.log(listadrink);

  return (
    
    <div className="container">
          <TextField
          label="Cerca"
          variant="standard"
          fullWidth={true}
          value={filtro}
          margin="normal"
          onChange={(ev) => {
              setFiltro(ev.target.value);
          }} />
        {
            listadrink.map((item) => (
                <Card 
                    key= {item.idDrink}
                    img={item.strDrinkThumb}
                    name={item.strDrink}
                    id={item.idDrink}
                    
                />
            ))
        }
   </div>
  )
}

export default Home