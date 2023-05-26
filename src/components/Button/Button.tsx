import { ReactNode } from 'react'
import { button } from './Button.css.ts'
interface Props {
  children: ReactNode
  variant?: 'primary' | 'default'
  handleClick: () => void
}

export const Button = ({ children, variant = 'default', handleClick }: Props) => {
  return (
    <button className={button[variant]} onClick={handleClick}>
      {children}
    </button>
  )
}
