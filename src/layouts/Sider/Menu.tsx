import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu as AntdMenu } from 'antd'
import { menuConfig } from '@/config/menu'
import { Icons } from '@/components/Icons'

const Menu = () => {
  const [current, setCurrent] = useState('introduce')
  const items: MenuProps['items'] = menuConfig.map((topMenu) => {
    return {
      label: topMenu.title,
      key: topMenu.key,
      icon: <Icons name={topMenu.icon} />,
      children: topMenu.subMenu.map((subItem) => {
        return {
          key: subItem.path,
          label: subItem.title,
          icon: <Icons name={subItem.icon} />,
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
      className="main-bg-color"
      onClick={onMenuChange}
      defaultOpenKeys={['home']}
      selectedKeys={[current]}
      items={items}
    ></AntdMenu>
  )
}

export default Menu
