import React from 'react'
import useStore from '@/store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@/styles'
import routes from '@/routers'

function App() {
  const store = useStore()
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={String(route.path)}
            element={
              route.component ? (
                <route.component />
              ) : route.redirect ? (
                <Navigate to={String(route.redirect)} />
              ) : route.layout ? (
                <route.layout />
              ) : null
            }
          >
            {/* {route.component ? <route.component /> : null} */}
            {Array.isArray(route.routes)
              ? route.routes.map((subRoute) => (
                  <Route
                    key={`${route.path}_${subRoute.path}`}
                    path={subRoute.path}
                    element={<subRoute.component />}
                  />
                ))
              : null}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
