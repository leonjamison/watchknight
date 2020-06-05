/** @jsx jsx */
 // eslint-disable-next-line 
import React from 'react'
import { jsx } from '@emotion/core'

const Button = ({ children, type, icon }) => (
  <button type={type}>
    {icon && <i className={`fa fa-${icon}`}></i>}
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button',
  icon: null
}

export default Button