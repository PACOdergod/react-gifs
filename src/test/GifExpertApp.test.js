import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import GifExpertApp from '../GifExpertApp';

describe('Probando <GifExpertApp />', () => {
    
    test('debe dibujarse bien', () => {
        
        const wrapper = shallow( <GifExpertApp/>)

        expect( wrapper ).toMatchSnapshot()
    })

    test('debe mostrar una lista de categoria', () => {
        
        const categories = ['memes', 'perros']
        const wrapper = shallow( <GifExpertApp categoria={ categories }/>)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )

    })
    
    
})
