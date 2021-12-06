import React from 'react'
import style from './Header.module.scss'
import commonStyle from '../common/style/commonStyle.module.scss'
import {Nav} from '../Nav/Nav'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.header__content} ${commonStyle.container}`}>
                <Nav/>
            </div>
        </header>
    )
}