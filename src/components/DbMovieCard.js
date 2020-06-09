import React from 'react'
import Icon from './icon'
// import { css } from '@emotion/core'



const DbMovieCard = (props) => {
    // let {image, viewMovieDetails, vote_average, popularity, vote_count, movieID} = props
    console.log('dbmoviecard props:', props)
    return(
            <div className='col s12 m6 l3' style={{paddingBottom: '20px'}}>
                <div className='card'>
                    <div className='card-image' onClick={() => props.viewMovieDetails(props.movieId)} >
                    {
                        props.image == null? <img className="circle responsive-img" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt='' 
                        style={{width: '100%', height: 360}}/> :
                        <img className="circle responsive-img"  src={`http://image.tmdb.org/t/p/w185${props.image}`} alt=''
                        style={{width: '100%', height: 360}} />
                    }
                    
                    </div>
                </div>
                    <div className='card-content'>
                    
                        <span><Icon type='star'/> IMDB Rating: {props.rating} </span>
                        <br/>
                        <span> <Icon type='star'/>  Popularity Rating: {props.pop_rating}  </span>
                        {/* <span> <Icon type='star'/> Popularity Rating: {popularity}</span> */}
                        {/* <span> <Icon type='thumbs-up'/>  Likes: {vote_count}</span> */}
                        <br/>
                        <hr/>
                        {/* <p> <a href='#' onClick={() => props.viewMovieDetails(props.movieId)} >View Details</a> </p> */}
                    </div>
            </div>
            
    
    )
}




export default DbMovieCard