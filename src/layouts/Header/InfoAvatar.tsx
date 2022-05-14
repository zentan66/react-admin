import React from 'react'
import { Menu, Dropdown } from 'antd'
import styles from './style.module.less'
import { Icons } from '@/components/Icons'

const InfoAvatar = () => {
  const menu = <Menu items={[{ label: 'xxx', icon: <Icons name="yonghu" /> }, { label: 'yyy' }]} />
  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <span className={styles.infoAvatar}>H</span>
      </a>
    </Dropdown>
  )
}

export default InfoAvatar
