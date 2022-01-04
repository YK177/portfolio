import React from 'react'
import style from './Title.module.scss'

export const Title: React.FC = ({children}) => {
    return (
        <h2 className={style.title}>{children}</h2>
    )
}
