import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`container ${style.footer__content}`}>
                <div className={style.footer__links}>
                    <a href="#" target="_blank" className="icon-telegram"/>
                    <a href="#" target="_blank" className="icon-github"/>
                    <a href="#" target="_blank" className="icon-linkedin"/>
                    <a href="#" target="_blank" className="icon-codewars"/>
                </div>
                &copy;2021 All rights reserved
            </div>
        </footer>
    )
}