import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/Header'

function Layout(): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
