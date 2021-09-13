import { useFetchGifts } from "../../hooks/useFetchGifts"
import { renderHook } from '@testing-library/react-hooks'

describe('Puebas en el hook useFetchGifts', () => {
    
    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( ()=>useFetchGifts('perros') )
        const { data, loading } = result.current
        await waitForNextUpdate()

        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })

    test('debe retornar un arreglo de img y false',async () => {

        const { result, waitForNextUpdate } = renderHook( ()=>useFetchGifts('perros') )
        await waitForNextUpdate()
        const { data, loading } = result.current
        
        expect( data.length ).toEqual( 10 )
        expect( loading ).toBe( false )
    })
        
})
