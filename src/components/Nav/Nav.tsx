import React from 'react'
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <a href="#" className={`${style.nav__link} ${style.active}`}>Main</a>
                </li>
                <li className={style.nav__item}>
                    <a href="#" className={style.nav__link}>Skills</a>
                </li>
                <li className={style.nav__item}>
                    <a href="#" className={style.nav__link}>Projects</a>
                </li>
                <li className={style.nav__item}>
                    <a href="#" className={style.nav__link}>Contacts</a>
                </li>
            </ul>
        </nav>
    )
}