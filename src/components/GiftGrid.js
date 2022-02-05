import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ( {category} ) => {

    const {data, loading} = useFetchGifts(category);

  return (
      <>
        <div className='gift-container animate__animated animate__jello'>
            <h3>{category}</h3>
            <p className='animate__animated animate__pulse animate__infinite'>{loading && 'Loading...'}</p>
            <div className='gift-list animate__animated '>
                {
                    data.map(gif=>
                        <GiftGridItem key={gif.id} img={gif}/>)
                }
            </div>
        </div>
       
      </>
  )
};
