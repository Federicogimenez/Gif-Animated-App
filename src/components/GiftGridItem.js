import React from 'react';
import { handleShareGif } from '../helpers/handleShare';

export const GiftGridItem = ({img}) => {
    const {title, url}= img;
    console.log(title, url);

  return (
      <>
        <div className='gift-item animate__animated animate__backInDown'>
            <button onClick={handleShareGif}>{title}</button>
            <div className='gift-img'>
                <img src={url} alt={title}></img>
            </div>
        </div>
      </>
    );
};
