import { ReactElement } from 'react'
import { Routes as Router, Route, BrowserRouter } from 'react-router-dom'

import Layout from '@/components/Layout'
import About from '@/pages/About'
import Home from '@/pages/Home'

function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Router>
    </BrowserRouter>
  )
}

export default Routes
