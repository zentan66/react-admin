import React, { useMemo } from 'react'
import { Navigate, Route } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'

export interface CoreRouteProps extends RouteProps {
  component?: React.ComponentType
  redirect?: string
}

export const Routes = (routes: CoreRouteProps[]) => {
  const cacheRoute = useMemo(
    () =>
      routes.map((route) => (
        <Route
          key={route.path}
          path={String(route.path)}
          element={
            route.component ? (
              <route.component />
            ) : route.redirect ? (
              <Navigate to={String(route.redirect)} />
            ) : null
          }
        >
          {/* {route.component ? <route.component /> : null} */}
        </Route>
      )),
    [routes],
  )
  return <>{cacheRoute}</>
}
