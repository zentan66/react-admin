import React from 'react'
import type { RouteProps } from 'react-router-dom'
import { LazyLoader } from '@/components/LazyLoader'
import AuthLayout from '@/layouts/AuthLayout'

interface BaseRoute {
  path: string
  component: React.ComponentType
}

export interface CoreRouteProps extends RouteProps {
  component?: React.ComponentType
  redirect?: string
  layout?: any
  routes?: BaseRoute[]
}

const routes: CoreRouteProps[] = [
  {
    path: '/',
    redirect: '/main/introduce',
  },
  {
    path: '/main',
    layout: AuthLayout,
    routes: [
      {
        path: 'introduce',
        component: LazyLoader(() => import('@/views/main/Introduce')),
      },
    ],
  },
  {
    path: '/login',
    component: LazyLoader(() => import('@/views/auth/Login')),
  },
  {
    path: '/404',
    component: LazyLoader(() => import('@/views/auth/404')),
  },
]

export default routes
