import React from 'react'
// import DbMovieCard from './DbMovieCard'
// import Navigationbar from './navigationbar'
// import { Global, css} from '@emotion/core'
// import searchbackground from '../img/searchbackground.jpg'
import Icon from './icon'
// import { Redirect } from 'react-router'




const DbMovieDetails = (props) => {
    console.log('dbmoviedetails props:', props)
//  const {title, closeMovieInfo, currentMovie, release_date, overview} = props
 function clickAlert(){
 
  alert('Comment Has Been Submitted For Approval!')
  
}


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
            </div> 
              <div className='col s12 m8'>
                  <div className='info-container'>
                    <p style={{fontWeight: "bolder"}}> {props.currentMovie.title}</p>
                    <hr/>
                    <span>Release Date: {props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</span>
                    <br/>
                    <span>Runtime: {props.details.runtime} Minutes</span>
                    <br/>
                    <br/>
                    <span> <Icon type='money'/> Film Budget: $ {props.details.budget}</span>
                    <br/>
                    <span> <Icon type='ticket'/> Film Revenue: $ {props.details.revenue}</span>
                   
                    
                    <p>Film Plot</p>
                    <p>{props.currentMovie.overview}</p>
                    <span style={{paddingLeft: '475px'}}> {props.currentMovie.vote_count} Likes <Icon type='thumbs-up'/> </span>
                  </div>
                    <div>
                    <p> Comments <Icon type='comments'/> </p>
                    <form className='comment-form'>
                      <input style={{backgroundColor: 'white', paddingLeft: '10px'}} type='text' placeholder='Leave a comment' name='comment'/>
                      <button onClick={()=>clickAlert()} >Submit</button>
                    </form>
                    
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