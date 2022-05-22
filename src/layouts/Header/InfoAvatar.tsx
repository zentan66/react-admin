import React from 'react'
import { Menu, Dropdown } from 'antd'
import styles from './style.module.less'
import { Icons } from '@/components/Icons'

const InfoAvatar = () => {
  const onMenuChange = () => {
    document.requestFullScreen()
  }
  const menu = <Menu onClick={onMenuChange} items={[{ label: '个人信息', icon: <Icons name="yonghu" /> },{ label: '退出登录', icon: <Icons name="guanji" /> }]} />
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <span className={styles.infoAvatar}>H</span>
      </a>
    </Dropdown>
  )
}

export default InfoAvatar
