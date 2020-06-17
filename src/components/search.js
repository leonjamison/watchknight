import React from 'react'

import Navigationbar from './navigationbar'
import { Global, css} from '@emotion/core'
import searchbackground from '../img/searchbackground.jpg'
import DbMovieDetails from './DbMovieDetails'
import DbMovieList from './DbMovieList'
import SearchForm from './searchform'
import User from './user'





const backend_api = `http://localhost:3001/movies`
// const movie_db = `https://api.themoviedb.org/3/movie/popular?api_key=e3c60fe73b55ea565cfda63e0c2faca6&language=en-US&page=1`
// const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=`


class Searchresults extends React.Component {

    state={
        movies: [],
        searchTerm: '',
        movieDetails: [],
        currentMovie: null,
        favorite: [],
        video: []
        
        
    }

    api_Key = process.env.REACT_APP_API



    //Functions to fetch data
    getMovies=()=>{
        // fetch(`${backend_api}/movies`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(movies =>  {
            console.log(movies)
        this.setState({movies: [...movies.results]})})
    }

    getVideo=(movieId)=>{
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.api_Key}&language=en-US`)
      .then(r=>r.json())
      .then(video => {this.setState({video: [video.results[0]] })})
    }

    addFavorite=()=>{
    
    alert('Movie Added To Favorites!')

    let newMovie = this.state.currentMovie
    //  console.log('Movie added to Fav:',newMovie)
    let newFavMovie = {title: newMovie.title, poster_path: newMovie.poster_path, api_movie_key: newMovie.id, IMDB_rating: newMovie.vote_average, pop_rating: newMovie.popularity}
      // console.log('favorite props:', newFavMovie)
      fetch(backend_api, {
          method: 'POST',
          headers: 
          {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(
            newFavMovie
           
          )
      })
      .then(r => r.json())
      .then(resObj => console.log(resObj))
    
  }





    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(movies =>  {
            console.log(movies)
        this.setState({movies: [...movies.results]})})
      
    }

    viewMovieDetails=(movieId)=>{
    const details_api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api_Key}&language=en-US`
    fetch(details_api)
    .then(r=>r.json())
    .then(details => this.setState({ movieDetails: details}))
     const filteredMovie = this.state.movies.filter(movie => movie.id === movieId)
     const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
     this.setState({currentMovie: newCurrentMovie }) 
     
        
    }

  


    closeMovieInfo = () =>{
      this.setState({currentMovie: null})
    }

    clearComment=()=>{
      this.setState({comments: ''})
    }

  

    render(){
      // console.log('fav state:', this.props.favorite)
        return(

            
            <div>
                <Global styles={GlobalCSS} />
                <Navigationbar/>
                {this.state.currentMovie === null ?  <div><SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> 
                 <DbMovieList viewMovieDetails={this.viewMovieDetails} movies={this.state.movies} viewVideo={this.getVideo} /> </div> : <DbMovieDetails video={this.state.video} addFav={this.addFavorite} details={this.state.movieDetails} currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/> }  
              
               
            </div>
            
        )

    }


}

const GlobalCSS = css`


  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
  body {
    background-image: url('${searchbackground}');
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  p,h1 {
    font-size: 20px;
    color: white;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }

  .input-field [type=text] {
    color: white;
}
  
  .row .input-field input:focus {
   
    border-bottom: 3px solid red !important;
    box-shadow: 0 1px 0 0 #b71c1c !important
  }

  // body {
  //   background-color: black;
  //   color: white;
  // }
  @media screen and (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: white;
    }
    img {
      opacity: 120;
      transition: opacity .5s ease-in-out;
    }
    img:hover {
      opacity: .75;
      // transition: opacity .5s ease-in-out;
    }
    
    html[data-theme='dark'] {
      --text-color-normal: hsl(210, 10%, 62%);
      --text-color-light: hsl(210, 15%, 35%);
      --text-color-richer: hsl(210, 50%, 72%);
      --text-color-highlight: hsl(25, 70%, 45%);
    }
  }
  }

   h5 {
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: 1;

  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%; 
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
}

.player-wrapper {
  position: relative;
  padding-top: 56.6% /* Player ratio: 100 / (1280 / 720) */

  
}
 
.react-player {
  position: absolute;
  top: 5%;
  left: 0%;
}






`



export default Searchresults