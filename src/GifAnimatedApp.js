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
