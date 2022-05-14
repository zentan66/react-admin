import React from 'react'
import { Row, Col } from 'antd'
import ReactIcon from '@/assets/logo.f2cadfd0.svg'
import { Header } from 'antd/lib/layout/layout'
import { Icons } from '@/components/Icons'
import styles from './style.module.less'
import InfoAvatar from './InfoAvatar'

const GrayCircle: React.FC<{ name: string }> = (props) => {
  return (
    <div className={styles.grayCircle}>
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
          <GrayCircle name="quanping" />
          <GrayCircle name="qiehuanyuyan" />
          <GrayCircle name="xiaoxizhongxin" />
          <GrayCircle name="darkmode" />
          <GrayCircle name="shuaxin" />
          <InfoAvatar />
        </Col>
      </Row>
    </Header>
  )
}

export default CoreHeader
