/** @jsx jsx */
 // eslint-disable-next-line 
import React, { useState, useCallback } from 'react'
import { css, jsx } from '@emotion/core'


const Movie = ({ children, img }) => {
    const [hovered, setHovered] = useState(false)
  
    const handleHover = useCallback(e => {
      e.type === 'mouseenter'
        ? setHovered(e.target.getAttribute('data-img'))
        : setHovered(false)
    }, [])
  
    return (
      <div
        className="ContentBlock"
        data-img={img}
        css={MovieBlockCSS}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {img === hovered && <div className="content">{children}</div>}
        <img alt='' src={img} />
      </div>
    )
  }
  
  const MovieBlockCSS = css`
    position: relative;
    .content {
      position: absolute;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      justify-content: center;
      transition: background-color ease 0.2s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
      }
      .Icon {
        font-size: 32px;
      }
      .Icon:first-of-type {
        color: red;
        margin-right: 25px;
      }
      .Icon:last-of-type {
        color: white;
      }
    }
    img {
      height: 100%;
      width: 100%;
      pointer-events: none;
    }
  `
  



  export default Movie