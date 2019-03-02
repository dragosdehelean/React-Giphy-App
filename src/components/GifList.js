import React from 'react';
import GifItem from './GifItem';

const GiftList = ({gifs})=>{
  return (
    <div className="row">
    <div className="card-columns">
      {
        gifs.map(gif=>(
          <GifItem key={gif.id} gif={gif}/>
        ))
      }      
    </div>
    </div>
  )
}

export default GiftList;