import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { AddSerie } from '../../components/AddSerie'

describe('Pruebas en <AddSerie />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow( <AddSerie handleAdd={setCategories} />)

    beforeEach( ()=>{
        jest.clearAllMocks()
        wrapper = shallow( <AddSerie handleAdd={setCategories} />)
    })
    
    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('no debe postaer la informacion en onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input')
        input.simulate('change', { target: { value:'hola mundo' } })

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledWith( expect.any(String) )

        expect( input.props().value ).toBe( '' )
    })
    
    
})
