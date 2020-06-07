import React from 'react'

import Navigationbar from './navigationbar'
import { Global, css} from '@emotion/core'
import searchbackground from '../img/searchbackground.jpg'
import { Link } from 'react-router-dom'
import Dbmovielist from './DbMovieList'
import SearchForm from './searchform'


const backend_api = `http://localhost:3001`
// const movie_db = `https://api.themoviedb.org/3/movie/popular?api_key=e3c60fe73b55ea565cfda63e0c2faca6&language=en-US&page=1`
// const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=`


class Searchresults extends React.Component {

    state={
        movies: [],
        reviews: [],
        searchTerm: '',
        
    }

    api_Key = process.env.REACT_APP_API

    // componentDidMount(){
    //     // this.getMovies()
    //     this.getReviews()
    // }

    //Functions to fetch data
    getMovies=()=>{
        // fetch(`${backend_api}/movies`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(movies =>  {
            console.log(movies)
        this.setState({movies: [...movies.results]})})
    }

    getReviews=()=>{
        fetch(`${backend_api}/reviews`)
        .then(r => r.json())
        .then(reviews => this.setState({reviews: reviews}))
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
        // this.setState({
        //     searchTerm: ''
        // })
    }


    render(){
        // console.log('search state:', this.state)
        return(

            
            <div>
                <Global styles={GlobalCSS} />
                <Navigationbar/>
                   
                 <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                {/* <h1 style={{position: "relative", fontSyle: 'bold',}}>Search Movie Here</h1> */}
                
                {/* <form style={{paddingTop: '150px', paddingLeft: '400px'}}>
                    <input style={{fontSize: 'large', paddingRight: '90px', paddingLeft: '90px'}}
                    name='searchTerms' 
                    placeholder='Search For Movie' 
                    onChange={this.handleChange} />
                    <button style={{position: 'float'}} onClick={this.handleSubmit} type='submit'>Search</button>
                </form> */}
    
                {/* <button style={{position: 'absolute'}}><Link to='/'>Go Home</Link></button> */}

                <Dbmovielist movies={this.state.movies} reviews={this.state.reviews}/>
                
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







`



export default Searchresults