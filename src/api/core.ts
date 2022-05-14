import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

type HttpMethod = 'get' | 'post' | 'delete'

interface HttpOptions {
  formatter: () => void
}

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 3000,
  withCredentials: true,
  headers: {},
})

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(response => {
  const { code, data, message } = response.data
  if (code === 200) {
    return data
  } else if (code === 401) {
    //
  } else {
    //
  }
})

const http = (
  method: HttpMethod,
  url: string,
  payload?: Record<string, any> | null,
): Promise<any> => {
  const requstBody: AxiosRequestConfig = {}
  if (method === 'get') {
    requstBody.params = payload || {}
  }
  if (method === 'post') {
    requstBody.data = payload || {}
  }
  return axiosInstance({
    method,
    url,
    transformResponse: data => data,
    ...requstBody
  }).then((res: AxiosResponse) => {
    return res.data
  })
}

export default http