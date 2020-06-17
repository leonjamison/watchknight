/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../button'
import image2 from '../../img/image2.jpg'


/**
 * @function Overview
 */
const Overview = () => (
  <div css={OverviewCSS}>
    <h5>HUSTLERS</h5>
    <hr/>
    <p>
    Working as a stripper to make ends meet, Destiny's life changes forever when she becomes friends with Ramona -- the club's top money earner.
    Ramona soon shows Destiny how to finagle her way around the wealthy Wall Street clientele who frequent the club. 
    But when the 2008 economic collapse cuts into their profits, the gals and two other dancers devise a daring scheme to take their lives back.
    </p>

    <Button icon="play">Play</Button>
  </div>
)

const OverviewCSS = css`
  max-width: 500px;
  color: white;
  padding-top: 0.5vw;
  .Icon {
    margin-right: 10.5px;
  }
  p {
    font-size: 15px;
  }
  button {
    padding: 0.5em 2em;
    font-size: 15px;
  }
  button:first-of-type {
    background: #ff0a16;
  }
  img{
    position: relative;
    max-width: 200px
    
    
  }
`

export default Overview