export const menuConfig = [
  {
    title: 'Dashboard',
    key: 'home',
    icon: 'panel',
    subMenu: [
      { title: '系统介绍', path: 'introduce', icon: 'yewujieshao' },
      { title: 'Dashboard', path: 'dashboard', icon: 'panel' },
      { title: '添加商品', path: 'add', icon: 'jiahao1' },
    ],
  },
  {
    title: '首页配置',
    key: 'setting',
    icon: 'shouye2',
    subMenu: [
      { title: '轮播图配置', path: 'swiper', icon: 'tupian' },
      { title: '热销商品配置', path: 'hot', icon: 'shoucang' },
      { title: '新品上线配置', path: 'new', icon: 'xinpintuijian' },
      { title: '为你推荐配置', path: 'recommend', icon: 'tuijian' },
    ],
  },
  {
    title: '模块管理',
    key: 'module',
    icon: 'yingyongzhongxin',
    subMenu: [
      { title: '分类管理', path: 'category', icon: '' },
      { title: '商品管理', path: 'good', icon: 'shangpin' },
      { title: '会员管理', path: 'guest', icon: 'yonghu1' },
      { title: '订单管理', path: 'order', icon: 'shouye' },
    ],
  },
  {
    title: '系统管理',
    icon: 'setting',
    key: 'systemManage',
    subMenu: [{ title: '修改密码', path: 'account', icon: 'jiesuo' }],
  },
]
