import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Lionel Messi", "Michael Jordan"]);
  
    // const handleAdd = ()=>{
    //     setCategories([...categories, "Los Simpsons"])
    //     setCategories((cat)=>[...categories, 'Los Simpsons']);
    // };
  
    return(
      <>
        <h2>Gif Expert App</h2>
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
