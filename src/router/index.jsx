import React, { lazy, Suspense } from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Spin } from 'antd'
import store from '@/store'
import Layout from '@/layout/index'

const routes = [
  {
    path: '/login',
    component: lazy(() => import('@/views/login/index'))
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: lazy(() => import('@/views/home/index'))
      }
    ]
  },
  {
    path: '/one',
    component: Layout,
    children: [
      {
        path: 'index',
        component: lazy(() => import('@/views/one/index'))
      }
    ]
  },
  {
    path: '/two',
    component: Layout,
    children: [
      {
        path: 'index',
        component: lazy(() => import('@/views/two/index'))
      }
    ]
  },
]

function getRoutes(routes) {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.component />} >
          {getRoutes(route.children)}
        </Route>
      )
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.component />} />
      )
    }
  })
}

function router() {
  const { token } = store.getState().user

  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Routes>
          { getRoutes(routes) }
        </Routes>
      </Suspense>
    </Router >
  )
}

export default router