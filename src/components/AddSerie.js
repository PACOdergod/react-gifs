import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddSerie = ({ handleAdd }) => {
    const [inputValue, setinputValue] = useState('')

    const handlerInputChange = (e)=>{
        setinputValue(e.target.value)
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()

        if(inputValue.trim().length > 2){
            handleAdd(inputValue)
            setinputValue('')
        }

    }

    return (
        <form onSubmit={ handlerSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handlerInputChange }
            />
        </form>
    )
}

AddSerie.propTypes = {
    handleAdd: PropTypes.func.isRequired
}