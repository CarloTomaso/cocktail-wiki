import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import './Home.scss'
import {TextField} from '@mui/material'

import { useNavigate } from "react-router-dom";

function Home() {
    const [filtro, setFiltro] = useState("");
    const [ listadrink, setlistadrink ] = useState ([]);

    const fetchDrink =() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ filtro)
            .then(response => {
                return response.json();
            }).then(data => {
                // if (!data.drinks || data.drinks.length === 0) {
                //     navigate('*')
                //     return
                // }
                setlistadrink(data.drinks)})

        };


useEffect(() => {
    fetchDrink();
},[filtro])

console.log(listadrink);
const navigate = useNavigate();
const notFound = <h1>not found</h1>
  return (
    
    <div className="container">
          <TextField
          color='success'
          label="Cerca"
          variant="standard"
          fullWidth={true}
          value={filtro}
          margin="normal"
          onChange={(ev) => {
              setFiltro(ev.target.value);
          }} />
        {
         listadrink?   listadrink.map((item) => (
                <Card 
                    key= {item.idDrink}
                    img={item.strDrinkThumb}
                    name={item.strDrink}
                    id={item.idDrink}
                    description={item.strAlcoholic}
                    
                />
            )):  notFound
        }
   </div>
  )
}

export default Home