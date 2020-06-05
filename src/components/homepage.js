 // eslint-disable-next-line 
import React from 'react';
/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './button'
import image6 from '../img/image6.png'
// import logo from '../img/logo.png'


// import Movielist from './movielist'

// const movie_db = `https://api.themoviedb.org/3/movie/popular?api_key=e3c60fe73b55ea565cfda63e0c2faca6&language=en-US&page=1`

// const backend_api = `http://localhost:3001`

// class Homepage extends Component{

//     state={
//         movies: [],
//         reviews:[]
//     }


//     componentDidMount(){
//         this.getMovies()
//         this.getReviews()
//     }

//     //Functions to fetch data
//     getMovies=()=>{
//         fetch(`${backend_api}/movies`)
//         .then(r => r.json())
//         .then(movies => this.setState({movies: movies}))
//     }

//     getReviews=()=>{
//         fetch(`${backend_api}/reviews`)
//         .then(r => r.json())
//         .then(reviews => this.setState({reviews: reviews}))
//     }


//     render(){
//         // console.log('homepage state:', this.state)
//         return(
//             // <>
                
//             //     <Movielist movies={this.state.movies}/>

                
//             // </>
          
//         )

//     }


    const homepage = ({children}) => (
        <div css={homepageCSS}>
          <div className="synopsis">
            {/* <img alt='' src={logo} /> */}
      
            <p>
            With the world now aware of his identity as Iron Man, 
            Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.
            </p>
      
            <Button Icon="play"> Play</Button>
            <Button Icon="info-circle"> More Info</Button>
          </div>

            {children}
        </div>
      )

  const homepageCSS = css`
  position: relative;
  background-image: url('${image6}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  padding-left: 40px;
  top: 0;

  .synopsis {
    padding-top: 200px;
    padding-left: 60px;
    max-width: 500px;
    color: white;

    img {
      width: 40%;
    }
    .Icon {
        margin-right: 10.5px;
        font-size: 18px;
      }
    }
    .ContentRow {
      position: absolute;
      bottom: 20px;
    }
`
       
    
// }

export default homepage