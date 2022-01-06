import React from 'react'
import style from './Header.module.scss'
import {Nav} from '../Nav/Nav'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`container ${style.header__content}`}>
                <Nav/>
            </div>
        </header>
    )
}