/** @jsx jsx */
 // eslint-disable-next-line 
import React from 'react'
import { jsx } from '@emotion/core'

const Button = ({ children, type, icon, onClick }) => (
  <button type={type} onClick={onclick}>
    {icon && <i className={`fa fa-${icon}`}></i>}
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button',
  icon: null,
  onClick: null
}

export default Button