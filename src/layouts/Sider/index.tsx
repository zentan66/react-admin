import React from 'react'
import Menu from './Menu'
import { Layout } from 'antd'
import styles from './style.module.less'

const Sider = () => {
  return (
    <Layout.Sider>
      <Menu />
    </Layout.Sider>
  )
}

export default Sider