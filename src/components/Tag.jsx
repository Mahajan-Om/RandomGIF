import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY; // process.env is a way to access evniormental variables in cra but in vite it is import.meta.env.



const Tag = () => {

    const [tag,settag]=useState('car');

    const {gif, loading , fetchdata} = useGif(tag);

  function clickHandler(){
    fetchdata(tag);
  }

  function changeHandler(event){
    settag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-300 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="mt-[15px] text-3xl uppercase underline font-bold" >Random {tag} GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width='450' alt='randomgif'/>)
        }
        
        <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[3x] text-center bg-amber-50'
            onChange={changeHandler}
            value={tag}
        />

        <button onClick={clickHandler} className=" cursor-pointer w-10/12 bg-yellow-300 text-xl py-2 rounded-lg font-bold mb-[20px]">Generate</button>
    </div>
  )
}

export default Tag