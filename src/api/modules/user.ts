import http from '@/api/core'

interface UserLoginBody {
  account: string
  password: string
}

export const userLogin = (body: UserLoginBody) =>
  http('post', '/wsService/login', body)
