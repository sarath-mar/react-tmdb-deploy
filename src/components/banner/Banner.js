import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import "./banner.css"
import {API_KEY,imageUrl} from "../../constants/constants"


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
     axios.get(`/trending/all/week?api_key=${API_KEY}`).then((res)=>{
         console.log(res.data.results[0]);
         setMovie(res.data.results[4])
     })
    },[])
    return (
        <div className="row">
        <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`
        }} className="banner">
        
            <div className="content">
            <p className="type">SERIES</p>
            <h1 className="title">{movie ? movie.title: ""}</h1>
            <div className="button">
                
                <button className="play">Play</button>
                <button className="myList">My List</button>
            </div >
            <div className="des">
            <h3>Watch Part 3 Now </h3>
            <p className="description">{movie ? movie.overview : ""}</p>
            </div>
           
        </div>
        <div className="gradient"></div>
        </div>
        </div>
    )
}

export default Banner
