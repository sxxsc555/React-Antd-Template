import React, { lazy, Suspense } from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import store from '@/store'
import Layout from '@/layout/index'

// import One1 from '@/views/one1/index'

const One1 = lazy(() => import('@/views/one1/index'))
const One2 = lazy(() => import('@/views/one2/index'))
const One3 = lazy(() => import('@/views/one3/index'))

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'one1',
        component: lazy(() => import('@/views/one1/index'))
      }
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('@/views/login/index'))
  }
]

function router() {
  const { token } = store.getState().user

  return (
    <Router>
      <Suspense fallback={<div>ladding...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='one1' element={<One1 />} />
            <Route path='one2' element={<One2 />} />
            <Route path='one3' element={<One3 />} />
          </Route>
          {/* {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<div>ladding...</div>}>
                  <route.component />
                </Suspense>
              }
            >
              { route.children !== 0 && router() }
            </Route>
          ))
        } */}
        </Routes>
      </Suspense>
    </Router >
  )
}

export default router