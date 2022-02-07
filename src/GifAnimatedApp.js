import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifAnimatedApp = () => {

    const [categories, setCategories] = useState(["Lionel Messi", "Michael Jordan"]);
  
    // const handleAdd = ()=>{
    //     setCategories([...categories, "Los Simpsons"])
    //     setCategories((cat)=>[...categories, 'Los Simpsons']);
    // };
  
    return(
      <>
        <h1>Gif Animated App</h1>
        <label htmlFor='info' className='btn-info'>COMPARTIR</label>
        <input type="checkbox" id='info' className='check-info'></input>
        <div className='info-data' id='info-share'>
            <div><label htmlFor='info' className='btn-info-close'>&#x26CC;</label></div>
            Presiona en el titulo del GIF para guardar la direccion de enlace
        </div>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
            {            
                categories.map( category => (
                    <GiftGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
      </>
  )
};
