import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment/moment'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function MoivesList() {


    let dummydata = [{ "id": "mov1", "movieName": "Kick", "rating": "3", "release_date": "2000-01-10T18:30:00.000Z" }, 
    
    { "id": "mov2", "movieName": "Sholay", "rating": "3", "release_date": "2000-01-10T18:30:00.000Z" }, 
    { "id": "mov3", "movieName": "ABCD", "rating": "5", "release_date": "2000-01-10T18:30:00.000Z" }, 
    { "id": "mov4", "movieName": "ABCD2", "rating": "4.5", "release_date": "2000-01-10T18:30:00.000Z" }, 
    { "id": "mov5", "movieName": "Gadar", "rating": "3", "release_date": "2000-01-10T18:30:00.000Z" }, 
    { "id": "mov6", "movieName": "Hum apke hai kaun", "rating": "3.5", "release_date": "2002-01-10T18:30:00.000Z" },
     { "id": "mov7", "movieName": "Hero", "rating": "3", "release_date": "2001-01-10T18:30:00.000Z" }, 
     { "id": "mov8", "movieName": "Harry Potter", "rating": "5", "release_date": "2001-01-10T18:30:00.000Z" }, 
     { "id": "mov9", "movieName": "Iron Man", "rating": "5", "release_date": "2003-01-20T18:30:00.000Z" }, 
     { "id": "mov10", "movieName": "Iron Man 2", "rating": "5", "release_date": "2004-01-20T18:30:00.000Z" }, 
     { "id": "mov11", "movieName": "Infinity War", "rating": "5", "release_date": "2020-01-20T18:30:00.000Z" },
      { "id": "mov12", "movieName": "Avengers", "rating": "3", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov13", "movieName": "Inception", "rating": "5", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov14", "movieName": "Shutter Island", "rating": "3", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov15", "movieName": "Krrish", "rating": "5", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov16", "movieName": "Krrish 2", "rating": "5", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov17", "movieName": "Krrish 3", "rating": "5", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov18", "movieName": "QSQT", "rating": "1", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov19", "movieName": "Pathaan", "rating": "2", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov20", "movieName": "Stranger Things", "rating": "3", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov21", "movieName": "Stranger Things", "rating": "4", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov22", "movieName": "PK", "rating": "4", "release_date": "2020-01-20T18:30:00.000Z" }, 
      { "id": "mov23", "movieName": "Sultan", "rating": "4", "release_date": "2020-01-20T18:30:00.000Z" }]


    const [movielist, setMovieList] = useState([])

    const getMovies = async () => {
        try {
            let response = await axios.get('http://localhost:5500/api/getMovies')
            console.log(response.data)
            setMovieList(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (

        <>
            {
                dummydata.map((item, index) => {
                    return (

                        <div class="card">
                            <div class="card-content">
                                <p class="card-title">{item.movieName}</p>
                                <Stack spacing={1}>

                                    <Rating name="half-rating" defaultValue={item.rating}  precision={0.5}/>

                                </Stack>
                                <p class="card-para">{moment(item.release_date).format('Do MMMM YYYY')}</p>
                            </div>
                        </div>

                    );
                })
            }
        </>
    )
}

export default MoivesList