import React from 'react'
// import DbMovieCard from './DbMovieCard'
// import Navigationbar from './navigationbar'
// import { Global, css} from '@emotion/core'
// import searchbackground from '../img/searchbackground.jpg'
import Icon from './icon'
import ReactPlayer from 'react-player'
// import { Redirect } from 'react-router'
const backend_api=`http://localhost:3001/movies`




const DbMovieDetails = (props) => {
    console.log('dbmoviedetails props:', props.currentMovie)

  // const Cast = props.credits.slice(0,6)
  // console.log(Cast)






    return(

        <div className='container' style={{paddingTop: '70px'}}>
          <div className='row' onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 80}}>
            <Icon type='arrow-left'/>
            <span style={{marginLeft: 10}}>Go Back</span>
          </div>
          <div className='row'>
            <div className='col s12 m4'>
              {
                props.currentMovie.poster_path == null? <img className="circle responsive-img" src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt='' style={{width: '100%', height: 360}}/> :
                <img   src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt=''style={{width: '100%', height: 360}} />
              }
              {/* <button onClick={()=>favorite(props.currentMovie.poster_path, props.currentMovie.title, props.currentMovie.id)}>Add To Favorites <Icon type='heart' /></button> */}
              
              <button onClick={()=>props.addFav()}>Add To Favorites <Icon type='heart' /></button>
              {/* <p> Comments <Icon type='comments'/> </p>
                    <form style={{paddingRight: '70px'}}className='comment-form'>
                      <input style={{backgroundColor: 'white', paddingLeft: '10px'}} type='text' placeholder='Leave a comment' name='comment'/>
                      <button onClick={()=>clickAlert()} >Submit</button>
                    </form> */}
   
            </div> 
              <div className='col s12 m8'>
                  <div className='info-container'>
                    <h5 style={{fontWeight: "bolder"}}> <Icon type='film'/>  {props.currentMovie.title}</h5>
                    
                    <span>{props.details.tagline}</span>
                    <br/>

                    <hr/>

                    <span>Release Date: {props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</span>
                    <br/>
                    <span> RunTime: {props.details.runtime} Minutes</span>
                    <br/>
                    <br/>
                    <span> <Icon type='money'/> Film Budget: $ {props.details.budget}</span>
                    <br/>
                    <span> <Icon type='ticket'/> Film Revenue: $ {props.details.revenue}</span>
                    <br/>
                  
                   
                    
                    <p>Plot</p>
                    <p>{props.currentMovie.overview}</p>
                    <span style={{paddingLeft: '0px'}}> <Icon type='thumbs-up'/> Likes: {props.currentMovie.vote_count}  </span>
        
                  </div>
                    <div className='row'>
                      <div className='col s12 m4'>
                        <p> <Icon type='youtube'/> Film Preview </p>
                        {
                          props.video.map( (video,i) => 
                            <div key={i} className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url={`https://www.youtube.com/watch?v=${video.key}`}
                            volume={1}
                            muted={false}
                            playing= {true}
                            controls={true}
                            width='375%'
                            height='375%'
                            loop={true}
                          />
                        </div>)
                        }

                      </div>

                    </div>
                   
                </div>
              
          </div>
              
        </div>
    
    
    )

}



// const GlobalCSS = css`


//   * {
//     box-sizing: border-box;
//     font-family: 'Roboto', sans-serif;
//   }
//   html,
//   body,
//   .app {
//     margin: 0;
//     min-height: 100%;
//     width: 100%;
//   }
//   body {
//     background-image: url('${searchbackground}');
//     color: white;
//   }
//   a {
//     text-decoration: none;
//     color: white;
//   }
//   p,h1 {
//     font-size: 20px;
//     color: white;
//   }
//   ul {
//     margin: 0;
//     list-style: none;
//     padding: 0;
//   }
//   button {
//     background-color: rgba(51, 51, 51, 0.8);
//     border: 1px solid white;
//     padding: 0.75em 2.3em;
//     border-radius: 0.2vw;
//     box-shadow: none;
//     font-size: 1.1vw;
//     color: white;
//     margin-right: 15px;
//     cursor: pointer;
//     font-weight: 600;
//     letter-spacing: 0.4px;
//   }
//   .Icon {
//     font-size: 18.5px;
//     cursor: pointer;
//     color: white;
//   }

//   .input-field [type=text] {
//     color: white;
// }
  
//   .row .input-field input:focus {
   
//     border-bottom: 3px solid red !important;
//     box-shadow: 0 1px 0 0 #b71c1c !important
//   }

//   // body {
//   //   background-color: black;
//   //   color: white;
//   // }
//   @media screen and (prefers-color-scheme: dark) {
//     body {
//       background-color: black;
//       color: white;
//     }
//     img {
//       opacity: 120;
//       transition: opacity .5s ease-in-out;
//     }
//     img:hover {
//       opacity: .75;
//       // transition: opacity .5s ease-in-out;
//     }
    
//     html[data-theme='dark'] {
//       --text-color-normal: hsl(210, 10%, 62%);
//       --text-color-light: hsl(210, 15%, 35%);
//       --text-color-richer: hsl(210, 50%, 72%);
//       --text-color-highlight: hsl(25, 70%, 45%);
//     }
//   }
//   }







// `



export default DbMovieDetails