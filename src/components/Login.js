import React from 'react'
import {Link} from 'react-router-dom'
import Icon from './icon'
import { Global, css} from '@emotion/core'
import login5 from '../img/login5.gif'
import LoginButton from './login-button.js'
import SignupButton from './signup-button'


class Login extends React.Component{

    state={
        Username: '',
        password: ''
    }

    handleChange=e=>{
        this.setState({[e.target.className]: e.target.value})
    }

    render(){
        console.log(this.state)
        return(
        
            <div className='container-wraper'>
                <Global styles={GlobalCSS} />
                
                <div className='container'>
                
                <div style={{paddingTop: '100px'}} className='container'>
               
                    <div className="container-row">
                            <form className="col s12">
                            <div className="row">
                            <h4 style={{paddingLeft: '230px'}}> WATCHKNIGHT </h4>

                              <div className='row' style={{paddingLeft: 245, paddingTop: 70}}>
                                <Icon  type='user-plus'/> <SignupButton /> 
                                <Icon type='sign-in'/> <LoginButton />
                                 
                              </div>

                            </div>
                            </form>
                    </div>
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
    background-image: url('${login5}');
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

  .input-field [type=text] [type=password] {
    color: white;
}

.input-field [type=password] {
  color: white;
}
  
  .row .input-field input:focus {
   
    border-bottom: 5px solid red !important;
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

export default Login