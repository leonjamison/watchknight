/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'
import Movie from '../movie'
import Icon from '../icon'

import episodeone from '../../img/episodeone.jpg'
import episodetwo from '../../img/episodetwo.jpg'
import episodethree from '../../img/episodethree.jpg'
import episodefour from '../../img/episodefour.jpg'

const EPISODES = [episodeone, episodetwo, episodethree, episodefour]

/**
 * @function Episodes
 */
const Episodes = () => (
  <div css={EpisodesCSS}>
    {EPISODES.map((episode, i) => (
      <div className="block-wrapper" key={episode}>
        <Movie img={episode}>
          <Icon type="play" />
        </Movie>

        <p>Scene {++i} </p>
        <p>
        Ramona teaches Destiny to start men off with a single, then a double, then a triple and then back to a double and back to a single. 
        Ramona and Destiny hit the floor, they are in control.
        </p>

      </div>
    ))}
  </div>
)

const EpisodesCSS = css`
  display: flex;
  width: 100%;
  .block-wrapper {
    width: calc(25% - 60px);
    margin-right: 60px;
    .ContentBlock {
      height: 10vw;
    }
    p:first-of-type {
      color: white;
      font-weight: bold;
    }
    p {
      color: #999;
    }
  }
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
  }
  .Icon.play {
    border: 2px solid white;
    padding: 10px 14px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    transition: all ease 0.15s;
    font-size: 18px;
    &:hover {
      transform: scale(1.15);
      background: rgba(0, 0, 0, 0.4);
    }
  }
`

export default Episodes