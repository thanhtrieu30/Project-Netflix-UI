import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests';

const Main = () => {
    const [movies,setMovies] = useState([]);
    
    // chỉ lấy 1 movie trang home
     const movie = movies[Math.floor(Math.random() * movies.length)]


    // goi api movies
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])

    // tom tac van ban home
    const truncateString = (str, num) => {
        if (str?.length > num ) {
            return str.slice(0,num) + '...';
        }else {
            return str;
        }

    }


  return (
    <div className='w-full h-[650px] text-white'>
        <div className='w-full h-full' >
            <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>


        <div className='absolute top-[40%]  p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold w-2/3' >{movie?.title}</h1>
            <div className='my-7'>
               <button className='border bg-red-600 text-white border-gray-300 py-2 px-5'>Play</button>
               <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released : {movie?.release_date}</p>
            <p className='w-2/3 text-gray-200'>{truncateString(movie?.overview,250)}</p>
        </div>
    </div>
  )
}

export default Main