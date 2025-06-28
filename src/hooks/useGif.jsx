import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';



    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
   // const tagmemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`; ya to in dono ko niche usegif ke ander likhdo ya phir common url lo aur usme addition kr dena jesa is file me kiya hai 
    

const useGif = (tag) => { // tag as a string pass ho rhi naki object islye tag likha insted of {tag}

  //      const [tag,settag]=useState('car');  is component me koi tag se related work hai hi nhi isliye isko bhi hta diya
  const [gif,setgif] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchdata(tag){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
   // const output = await axios.get(url);// isko aise likhe se accha destructure kr liya {data } se becz object ke ander data tha phir uske ander data aur phir normal files but niche wale case me direct object se {data} liya i.e pehele wala data aa gya naki pura object
    
   setloading(true);  // api call krne se pehle spinner dikha diya

    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);  // ab tag ke hisab se decide krenege ki random wala api use krna hai ya tag wala isliye tag ko as a prop le lenge agr tag ki value true aayi to tagwala meme otherwise random wala meme
    const imgsource = data.data.images.downsized_medium.url;
    setgif(imgsource)

    setloading(false);
  }

  useEffect(()=>{  // pehle render ke bad fetchdata() call kr dena 
    fetchdata('car')
  },[]) 

  return {gif,fetchdata,loading}; // ab randoma ut tag components me ye teen chize use ho rhi hai isliye unko return krwaya hook ke ander se 

  
  {/* kisi bhi trh ke handler ki jarurat nhi hai isliye hta diya  */}
//   function clickHandler(){
//     fetchdata();
//   }

//   function changeHandler(event){
//     settag(event.target.value);
//   }

  // jsx code i.e return ke ander wala code ki jarurat nhi hai usko hta diya 
}

export default useGif