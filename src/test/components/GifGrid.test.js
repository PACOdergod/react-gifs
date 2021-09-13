import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

import GifGrid from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts')


describe('Pruebas de <GifGrid />', () => {
    
    
    test('debe dibujarse correctamente', () => {

        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid categoria="perros"/>)
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifts', () => {

        const gifs = [{
            id: 'qwesda',
            url: 'https://google.com',
            title: 'titulo'
        }]

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        
        const wrapper = shallow( <GifGrid categoria="perros"/>)

        expect( wrapper.find('p').exists() ).toBe( false )
        expect( wrapper.find('GifItem').length ).toBe( gifs.length )

    })
    
    
})
