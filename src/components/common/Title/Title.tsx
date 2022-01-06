import React from 'react'
import style from './Title.module.scss'

export const Title: React.FC = ({children}) => {
    return (
        <div className={style.body}><h2 className={style.title}>{children}</h2></div>
    )
}
