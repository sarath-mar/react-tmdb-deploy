import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import "./filmlist.css"
import Youtube from "react-youtube"


function Filmlist(props) {
 const id=props.url
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    
    const [film, setFilm] = useState([])
    const [click,setClick] = useState("")
    useEffect(() => {
       axios.get(id).then((res)=>{
           console.log(res.data.results[0]);
           setFilm(res.data.results)
       })
        
    }, [])

    const video=(id)=>{
     console.log(id);
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
         console.log(res.data.results);
         if(res.data.results.length!==0){
             setClick(res.data.results[0])
         }else{
             console.log("array is zero");
         }
     })
    }
    return (
        <div className="filmlistPoster">

            <h3>{props.title} (watch trailers by clicking on it)</h3>
            <div className="poster">
                <ul>
                {film.map((data,index)=>{
                    return(
                       <li>
                        <img  onClick={()=>video(data.id) } className={props.small?"smallPoster":"largePoster"} src={film ? imageUrl+data.backdrop_path : ""} alt="poster" />
                        </li> 
                    )
                   
                }
               
                 
                    
                )} </ul>
          
        </div>
    {click &&   < Youtube videoId={click.key} opts={opts}  />} 
        </div>
    )
}

export default Filmlist
