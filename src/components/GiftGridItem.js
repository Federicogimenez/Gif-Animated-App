import React from 'react';

export const GiftGridItem = ({img}) => {
    const {title, url}= img;
    console.log(title, url);
  return (
      <>
        <div className='gift-item animate__animated animate__backInDown'>
            <p>{title}</p>
            <div className='gift-img'>
                <img src={url} alt={title}></img>
            </div>
        </div>
      </>
    );
};
