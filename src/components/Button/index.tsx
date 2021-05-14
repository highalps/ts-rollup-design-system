/* */
import React from 'react'
import cx from 'classnames'

/* */
import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler
  className?: string
}

const Button = (props: Props) => {
  const { children, disabled, onClick = () => {}, className } = props

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cx(styles.button, className)}
    >
      {children}
    </button>
  )
}

export default Button
