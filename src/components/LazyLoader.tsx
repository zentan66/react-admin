import React, { ComponentType, createElement, Suspense, lazy } from 'react'

export const LazyLoader =
  (asyncComponent: () => Promise<{ default: ComponentType<any> }>) =>
  (props: any) => {
    return (
      <Suspense fallback={<span>loding</span>}>
        {createElement(lazy(asyncComponent), props)}
      </Suspense>
    )
  }
