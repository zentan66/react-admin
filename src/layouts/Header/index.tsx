import React from 'react'
import { Row, Col, Button } from 'antd'
import ReactIcon from '@/assets/logo.f2cadfd0.svg'
import { Header } from 'antd/lib/layout/layout'
import { Icons } from '@/components/Icons'
import styles from './style.module.less'
import InfoAvatar from './InfoAvatar'
import { toggleFullScreen } from '@/utils'

const GrayCircle: React.FC<{ name: string; onClick?: () => void }> = (
  props,
) => {
  return (
    <div className={styles.grayCircle} onClick={props.onClick}>
      <Icons name={props.name} />
    </div>
  )
}

const CoreHeader = () => {
  return (
    <Header>
      <Row>
        <Col span={12}>
          <img
            src={ReactIcon}
            width={28}
            height={28}
            style={{ marginRight: 15 }}
          />
          React Admin
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <GrayCircle
            name="quanping"
            onClick={() => {
              toggleFullScreen()
            }}
          />
          <GrayCircle name="qiehuanyuyan" />
          <GrayCircle name="xiaoxizhongxin" />
          <GrayCircle
            name="darkmode"
            onClick={() => {
              if (document.body.getAttribute('yo-theme')) {
                document.body.removeAttribute('yo-theme')
              } else {
                document.body.setAttribute('yo-theme', 'dark')
              }
            }}
          />
          <GrayCircle name="shuaxin" />
          <InfoAvatar />
        </Col>
      </Row>
    </Header>
  )
}

export default CoreHeader
