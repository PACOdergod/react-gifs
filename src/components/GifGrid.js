
import React from 'react'
import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifts } from '../hooks/useFetchGifts'

const GifGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifts( categoria )
    

    return (
        <>
            <h3>{ categoria }</h3>
            { loading && <p className="animate__animated animate__flash" >Loading</p> }
            <div className="card-grid">
                {
                    images.map( img => {
                        return <GifItem { ...img } key={img.id}/>
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria : PropTypes.string.isRequired
}

export default GifGrid
