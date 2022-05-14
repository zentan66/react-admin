export const menuConfig = [
  {
    title: 'Dashboard',
    key: 'home',
    subMenu: [
      { title: '系统介绍', path: 'introduce', icon: '' },
      { title: 'Dashboard', path: 'dashboard', icon: '' },
      { title: '添加商品', path: 'add', icon: '' },
    ]
  },
  {
    title: '首页配置',
    key: 'setting',
    subMenu: [
      { title: '轮播图配置', path: 'swiper', icon: '' },
      { title: '热销商品配置', path: 'hot', icon: '' },
      { title: '新品上线配置', path: 'new', icon: '' },
      { title: '为你推荐配置', path: 'recommend', icon: '' },
    ]
  },
  {
    title: '模块管理',
    key: 'module',
    subMenu: [
      { title: '分类管理', path: 'category', icon: '' },
      { title: '商品管理', path: 'good', icon: '' },
      { title: '会员管理', path: 'guest', icon: '' },
      { title: '订单管理', path: 'order', icon: '' },
    ]
  },
  {
    title: '系统管理',
    key: 'system',
    subMenu: [
      { title: '修改密码', path: 'account', icon: '' },
    ]
  }
]