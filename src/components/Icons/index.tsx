import React from 'react'
import cls from 'classnames'
import * as CSS from 'csstype'
import styles from './style.module.less'

interface IconProps {
  name: string
  className?: string
  style?: CSS.Properties<string | number>
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Icons: React.FC<IconProps> = (props) => {
  return (
    <div
      className={cls('anticon', styles.icon, props.className)}
      style={props.style}
      onClick={props.onClick}
    >
      <svg className="svg-icon" aria-hidden="true">
        <use xlinkHref={`#icon-${props?.name}`}></use>
      </svg>
    </div>
  )
}
export const iconRegister = (id: string) => {
  let el = document.getElementById(id) as HTMLScriptElement

  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.src = `//at.alicdn.com/t/${id}.js`

    document.body.appendChild(el)
  }
}