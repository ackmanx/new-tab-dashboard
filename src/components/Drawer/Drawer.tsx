import { styles } from './Drawer.css.ts'
import { ReactNode } from 'react'
interface Props {
  children: ReactNode
  variant: 'open' | 'default'
}

export const Drawer = ({ children, variant }: Props) => {
  return (
    <>
      <div className={styles.drawer[variant]}>{children}</div>
      {variant === 'open' && <div className={styles.overlay}></div>}
    </>
  )
}
