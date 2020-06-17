/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/core'
import Detailpanenav from './detailpanenav'
import Overview from './overview'
import Episodes from './episodes'
import Details from './details'
import Icon from '../icon'
import logo from '../../img/logo.png'

const TABS = ['Overview', 'Scenes', 'Details']

/**
 * @function DetailPane
 */
const DetailPane = ({ category, top, setActive }) => {
  const [tab, setTab] = useState()

  useEffect(() => {
    setTab(TABS[0])
  }, [!category])

  return (
    category && (
      <div
        css={[
          DetailpaneCSS,
          css`
            top: ${top}px;
          `
        ]}
      >
        <div className="pane-wrapper">
          <img alt=''
            css={css`
              max-width: ${tab === 'Overview' ? 88 : 115}px;
            `}
            src={logo}
          />

          {(() => {
            switch (tab) {
              case 'Details':
                return <Details />
              case 'Scenes':
                return <Episodes />
              default:
                return <Overview />
            }
          })()}
        </div>

        <Icon type="times" onClick={setActive} />
        <Detailpanenav tab={tab} tabs={TABS} setTab={setTab} />
      </div>
    )
  )
}

const DetailpaneCSS = css`
  height: 475px;
  background: black;
  width: 100%;
  position: absolute;
  border: 2px solid white;
  z-index: 99;
  color: white;
  .Icon.times {
    font-size: 32px;
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  h1 {
    margin-top: 0;
  }
  .pane-wrapper {
    padding: 2vw 4vw 0;
    img {
      margin-bottom: 20px;
    }
  }
`

export default DetailPane