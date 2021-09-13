
import React from 'react'
import { useState } from 'react'
import { AddSerie } from './components/AddSerie'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ categoria=['perros'] }) => {

    const [series, setSeries] = useState( categoria )

    const handleAdd = ( serie )=>setSeries( state => [serie, ...state] )

    return (
        <>
            <h2> Gifs App </h2>
            <p>Cual tema te gusta?</p>
            <AddSerie handleAdd={ handleAdd }/>
            <hr></hr>


            <ol>
                {
                    series.map( serie => {
                        return <GifGrid categoria={ serie } key={serie}/>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
