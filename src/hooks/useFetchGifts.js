import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifts = ( categoria )=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( ()=>{

        getGifs( categoria ).then( imgs =>{
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                }) 
            },0);
        })

    }, [ categoria ])


    return state
}