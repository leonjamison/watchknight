import React from 'react'
import { Link } from 'react-router-dom'
import DbMovieCard from './DbMovieCard'
import DbMovieList from './DbMovieList'
import { Global, css} from '@emotion/core'
import searchbackground from '../img/searchbackground.jpg'
import Navigationbar from './navigationbar'
import Icon from './icon'

const backend_api = `http://localhost:3001/movies`
const note_api = `http://localhost:3001/users`




class User extends React.Component{

    state={
        favorite: [],
        notes: '',
        savedNotes: []
    }

    componentDidMount(){
        this.getFavorites()
        this.getNotes()
    }



    getFavorites=()=>{
        fetch(backend_api)
        .then(r => r.json())
        .then(favorites => this.setState({favorite: favorites}))
    }

    getNotes = () =>{
      fetch(note_api)
      .then(r => r.json())
      .then(users => { 
        this.setState({savedNotes: users})})
    }

    handlePost=()=>{
     
        let post = {username: 'Julius', year_of_birth: 1991, note: this.state.notes}
        fetch(note_api , {
          method: 'POST',
          headers: 
          {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(
            post
           
          )
      })
      .then(r => r.json())
      .then(resObj => console.log(resObj))
    } 

    handleDelete=(id)=>{
      fetch(note_api + `/${id}`, {
        method: 'DELETE'
     
      })
      this.componentDidMount()
    }
        

    handleChange=(e)=>{
      this.setState({[e.target.name]: e.target.value})
    }


    render(){
        console.log('saved to favorites:', this.state)
        let userNotes= this.state.savedNotes
        return(
            <div>
                <Navigationbar/>
                <Global styles={GlobalCSS} />
                <div style={{paddingTop: '100px'}} className='container-wrapper'>
                    <h5 style={{paddingLeft: '600px', paddingBottom: '30px'}}> <Icon type='film' /> Favorite Films</h5>
                    <div className='row'>
                        <div className='col s12 '>
                            <div className='card-image' onClick={()=> this.handleClick()}>
                            
                                <DbMovieList movies={this.state.favorite}/>
                            </div>

                            <p style={{paddingLeft: '200px', paddingTop:'50px'}}> <Icon type='sticky-note'/>  Notes </p>
                              {
                              userNotes.map( user => 
                              <li style={{paddingLeft: '200px', paddingBottom: '10px'}} key={user.id}>
                                {user.note}
                                <br/>
                                <span style={{paddingLeft: '15px'}} onClick={()=>this.handleDelete(user.id)} >Delete <Icon type='trash'/></span>  
                                </li> )
                              }

                        </div>
                        {/* <p style={{paddingLeft: '200px'}}> Notes <Icon type='comments'/> </p> */}
                       <form style={{paddingRight: '300px', paddingLeft: '200px', paddingTop: '20px', paddingBottom: '50px'}}className='comment-form'>
                      <input value={this.state.notes}onChange={this.handleChange}style={{backgroundColor: 'white', paddingLeft: '10px'}} type='text' placeholder='Add personal note here...' name='notes'/>
                      <button onClick={this.handlePost} >Post</button>
                    </form>
                    </div>
                    
                </div>
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



export default User