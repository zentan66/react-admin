import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu as AntdMenu } from 'antd'
import { menuConfig } from '@/config/menu'

const Menu = () => {
  const [current, setCurrent] = useState('introduce')
  const items: MenuProps['items'] = menuConfig.map((topMenu) => {
    return {
      label: topMenu.title,
      key: topMenu.key,
      children: topMenu.subMenu.map((subItem) => {
        return {
          key: subItem.path,
          label: subItem.title,
        }
      }),
    }
  })
  const onMenuChange: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }
  return (
    <AntdMenu
      mode="inline"
      onClick={onMenuChange}
      defaultOpenKeys={['home']}
      selectedKeys={[current]}
      items={items}
    ></AntdMenu>
  )
}

export default Menu
