import React, { useState } from 'react';
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleValue = (e)=>{
        setInputValue(e.target.value)
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategories((category)=>[inputValue, ...category,]);
            setInputValue('')
        }
    };
  return (
      <form onSubmit={handleSubmit}>
          <input 
            placeholder='Busque aqui sus gifs'
            type="text"
            value={inputValue}
            onChange={handleValue}
            className='animate__animated animate__flipInY'
        />
      </form>
    );
};


AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
};