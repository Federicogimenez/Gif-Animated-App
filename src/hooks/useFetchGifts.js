import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifts';


export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category).then((gifs)=>
            setTimeout(() => {
                setState({
                    data: gifs,
                    loading: false
                })
            }, 1950))
    }, [ category ])

    return state;

};
