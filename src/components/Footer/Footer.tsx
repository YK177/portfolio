import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`container ${style.footer__content}`}>
                &copy;2021 All rights reserved
            </div>
        </footer>
    )
}