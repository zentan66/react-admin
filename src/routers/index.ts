import main from './modules/main'
import Login from '@/views/auth/Login'

export default [
  {
    path: '/',
    redirect: '/introduce'
  },
  {
    path: '/login',
    component: Login
  }
]