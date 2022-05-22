import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd'
import Sider from './Sider'
import CoreHeader from './Header'
import styles from './style.module.less'

const { Content, Footer } = Layout

const AuthLayout: React.FC<any> = (props) => {
  const { children } = props
  const canRender = true
  return canRender ? (
    <Layout>
      <CoreHeader />
      <Layout>
        <Sider />
        <Layout style={{ padding: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>系统介绍</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  ) : null
}

export default AuthLayout
