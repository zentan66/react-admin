import React, { useEffect } from 'react'
import bgSvg from '@/assets/bg.svg'
import styles from './style.module.less'
import { Button, Form, Input } from 'antd'
import { observer, useLocalObservable } from 'mobx-react'
import { useNavigate, useRoutes } from 'react-router-dom'
import localStore from './localStore'

const Login: React.FC<any> = () => {
  const [loginForm] = Form.useForm()
  const state = useLocalObservable(localStore)
  const navigate = useNavigate()
  const submit = () => {
    loginForm.validateFields().then((values) => {
      navigate('/', { replace: true })
    })
  }
  useEffect(() => {
    // console.log('ffdf')
  }, [])
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <div className={styles.innerCard}>
          <img src={bgSvg} className={styles.leftImg} />
          <div className={styles.rightCard}>
            <h3>欢迎登录</h3>
            <p className={styles.loginTips}>请使用您本人的账号密码登录</p>
            <Form form={loginForm}>
              <Form.Item
                name="account"
                rules={[
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                style={{ marginBottom: 10 }}
                rules={[
                  {
                    required: true,
                    message: '请填写密码',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <a className={styles.forgetPwd}>忘记密码？</a>
              <Form.Item style={{ marginTop: 15 }}>
                <Button block type="primary" shape="round" onClick={submit}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Login)
