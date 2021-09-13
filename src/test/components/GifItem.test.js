import { shallow } from 'enzyme'
import React from 'react';

import { GifItem } from '../../components/GifItem'


describe('Pruebas del <GifItem />', () => {
    
    const title = 'Soy un titulo'
    const url = 'Soy una url'
    const wrapper = shallow( <GifItem title={title} url={url}/> )

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe tener el titulo', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title )
    })

    test('debe tener la misma url y alt', () => {
        const img = wrapper.find('img')

        expect( img.props().src ).toBe( url )
        expect( img.props().alt ).toBe( title )
    })

    test('debe tener en className animate__fadeIn', () => {

        const div = wrapper.find('div')
        expect(div.hasClass('animate__fadeIn')).toBe( true )        
    })
    
    
})
