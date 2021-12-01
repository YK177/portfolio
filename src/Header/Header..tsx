import React from 'react'
import style from './Header.module.css'
import commonStyle from './../common/style/commonStyle.module.css'
import {Nav} from '../Nav/Nav'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.content} ${commonStyle.container}`}>
                <Nav/>
            </div>
        </header>
    )
}