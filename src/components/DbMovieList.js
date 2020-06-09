import React from 'react'
import DbMovieCard from './DbMovieCard'


const DbMovieList = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col s12'>     
                    {
                    props.movies.map((movie) => {
                        return(
                        <DbMovieCard 
                         key={movie.id} 
                         image={movie.poster_path}
                         viewMovieDetails={props.viewMovieDetails}
                         movieId={movie.id}
                         title={movie.title}
                         overview={movie.overview}
                         date={movie.release_date}
                         rating={movie.vote_average}
                         pop_rating={movie.popularity}
                         />)
                    })
                     }
                </div>
             </div> 
        </div>
    )
}

export default DbMovieList