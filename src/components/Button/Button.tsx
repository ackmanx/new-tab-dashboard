import { MouseEvent, ReactNode } from "react";
import { button } from './Button.css.ts'
interface Props {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'default'
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, className, variant = 'default', handleClick }: Props) => {
  return (
    <button className={`${button[variant]} ${className}`} onClick={handleClick}>
      {children}
    </button>
  )
}
