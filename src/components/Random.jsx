import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// agr output do aaye to <strictmode></strictmode> hata do to ek hi baar aayega
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY; // process.env is a way to access evniormental variables in cra but in vite it is import.meta.env.



const Random = () => {

    // niche wale comments ki jarurat nhi hai becz hai code ab humne hook me dal diya hai ab usko import kraenge usinh useGif() wali call;

//   const [gif,setgif] = useState(null);
//   const [loading, setloading] = useState(false);

//   async function fetchdata(){
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

//    // const output = await axios.get(url);// isko aise likhe se accha destructure kr liya {data } se becz object ke ander data tha phir uske ander data aur phir normal files but niche wale case me direct object se {data} liya i.e pehele wala data aa gya naki pura object
    
//    setloading(true);  // api call krne se pehle spinner dikha diya

//     const {data} = await axios.get(url);
//     const imgsource = data.data.images.downsized_medium.url;
//     setgif(imgsource)

//     setloading(false);
//   }

//   useEffect(()=>{  // pehle render ke bad fetchdata() call kr dena 
//     fetchdata()
//   },[])

    const {gif , loading , fetchdata} =useGif();

  function clickHandler(){
    fetchdata();
  }

  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="mt-[15px] text-3xl uppercase underline font-bold" >A Random GIF</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} width='450' alt='randomgif'/>)
        }
        
        <button onClick={clickHandler} className=" cursor-pointer w-10/12 bg-yellow-300 text-xl py-2 rounded-lg font-bold mb-[20px]">Generate</button>
    </div>
  )
}

export default Random