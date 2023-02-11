import cn from 'classnames'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

function Header(): ReactElement {
  function getLinkClassName({ isActive }: { isActive: boolean }): string {
    return cn(styles.link, { [styles.activeLink]: isActive })
  }

  return (
    <header className={styles.header}>
      <NavLink className={getLinkClassName} to='/'>
        Home
      </NavLink>
      <NavLink className={getLinkClassName} to='/about'>
        About
      </NavLink>
      <NavLink className={getLinkClassName} to='/counter'>
        Counter
      </NavLink>
    </header>
  )
}

export default Header
