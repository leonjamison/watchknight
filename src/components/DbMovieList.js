import React from 'react'
import DbMovieCard from './DbMovieCard'


const DbMovieList = (props) => {
 
    return(
        <div className='container'>
            <div className='row'>
                <div className='col s12'>     
                    {
                    props.movies.map(movie => {
                        return(
                        <DbMovieCard 
                         key={movie.id} {...movie} 
                         image={movie.poster_path}
                         />)
                    })
                     }
                </div>
             </div> 
        </div>
    )
}

export default DbMovieList