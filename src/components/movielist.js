/** @jsx jsx */
 // eslint-disable-next-line 
import React, { useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import Icon from './icon'
import Movie from './movie'

import image1 from '../img/image1.jpeg'
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.jpg'
import image4 from '../img/image4.jpeg'
import image5 from '../img/image5.jpg'
import image6 from '../img/image6.png'

const content = [image1, image2, image3, image4, image5, image6]





const Movielist = ({ category, setActive }) => {

    const getPosition = useCallback(e => {
        const position = e.target.parentElement.getBoundingClientRect()
        setActive({ category, position })
         // eslint-disable-next-line 
      }, [])

    return (
        <div
          className="ContentRow"
          css={css`
            padding-left: 60px;
            overflow-x: hidden;
            .ContentBlock {
              flex: 18vw;
              flex-shrink: 0;
              height: 9.5vw;
              margin-right: 4px;
            }
          `}
        >
          <div
            css={css`
              h2 {
                font-size: 24px;
                margin: 20px 0 10px;
                color: white;
              }
              .block-wrapper {
                display: flex;
                width: 100%;
                position: relative;
              }
            `}
          >
            <h2>{category}</h2>
    
            <div className="block-wrapper">
              {content.map(img => (
                <Movie key={img} img={img}>
                  <Icon type="play" />
                  <Icon type="info-circle" onClick={getPosition} />
                </Movie>
              ))}
            </div>
          </div>
        </div>
      )
    }
  



export default Movielist