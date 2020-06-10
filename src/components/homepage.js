 // eslint-disable-next-line 
import React from 'react';
/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from './button'
import image6 from '../img/image6.png'
import ReactPlayer from 'react-player'


const url = `https://www.youtube.com/watch?v=SJpgohJLMGg`





    const homepage = ({children}) => (
        <div css={homepageCSS}>
          
          <div className="synopsis">
          
          <div className='player-wrapper'>
          <ReactPlayer
          className='react-player'
          url={url}
          volume={1}
          muted={true}
          playing= {true}
          controls={true}
          width='100%'
          height='350%'
          loop={true}
          
        />
      </div>
          
            <p>
            With the world now aware of his identity as Iron Man, 
            Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.
            </p>

            <Button icon="pause"> Pause</Button>
            <Button icon="info-circle"> More Info</Button>
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
  top: 0;

  .synopsis {
    padding-top: 115px;
    padding-left: 60px;
    max-width: 600px;
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
      bottom: 5px;
    }
    .player-wrapper {
      position: relative;
      padding-top: 15% /* Player ratio: 100 / (1280 / 720) */
  
    }
     
    .react-player {
      position: absolute;
      top: 0;
      left: 115%;
    }

`
       
    
// }

export default homepage