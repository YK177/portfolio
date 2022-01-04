import React from 'react'
import style from './Subtitle.module.scss'

export const Subtitle: React.FC = ({children}) => {
    return (
        <h3 className={style.subtitle}>{children}</h3>
    )
}
