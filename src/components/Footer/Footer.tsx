import React from 'react'
import style from './Footer.module.scss'
import commonStyle from '../../common/style/commonStyle.module.scss'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${style.footer__content} ${commonStyle.container}`}>
                &copy;2021 All rights reserved
            </div>
        </footer>
    )
}