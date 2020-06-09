/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'

/**
 * @function Details
 */
const Details = () => (
  <div css={DetailsCSS}>
    {DETAILS_COLUMNS.map(column => (
      <ul key={column.title}>
        <li>{column.title}</li>
        {column.content.map(content => (
          <li key={content}>{content}</li>
        ))}
      </ul>
    ))}
  </div>
)

const DetailsCSS = css`
  display: flex;
  ul {
    margin-right: 6%;
  }
  li:first-of-type {
    color: #999;
    margin-bottom: 5px;
  }
  li {
    color: white;
  }
`

const DETAILS_COLUMNS = [
  { title: 'Creator', content: ['Lorene Scafaria'] },
  {
    title: 'Cast',
    content: [
      'Constance Wu',
      'Jennifer Lopez',
      'Keke Palmer',
      'Mette Towley',
      'Cardi B',
      'Lizzo',
      'Frank Whaley',
      'G-Eazy'
    ]
  },
  {
    title: 'Additional Cast',
    content: [
      'Julia Stiles',
      'Wai Ching Ho',
      'Jay Oakerson',
      'Lili Reinhart',
      'Brandon Keener',
      'Dov Davidoff',
      'Paul A Nielsen',
      'Scarlett Sher'
    ]
  },
  {
    title: 'Genres',
    content: [
      'Comedy',
      'Crime',
      'Drama'
    
    ]
  }
]

export default Details