import React from 'react'
import style from './Footer.module.css'
import commonStyle from './../common/style/commonStyle.module.css'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.content} ${commonStyle.container}`}>
                &copy;2021 All right reserved
            </div>
        </footer>
    )
}