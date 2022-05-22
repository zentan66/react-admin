import * as api from '@/api'
import { message } from 'antd'

export default () => ({
  login(_payload: any) {
    // api.userLogin(payload)
    return Promise.resolve().then(() => {
      // 设置token
      message.success('登录成功')
    })
  },
})
