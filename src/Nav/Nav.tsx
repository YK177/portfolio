import React from 'react'
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.item}>
                    <a href="#" className={style.link}>Main</a>
                </li>
                <li className={style.item}>
                    <a href="#" className={style.link}>Skills</a>
                </li>
                <li className={style.item}>
                    <a href="#" className={style.link}>Projects</a>
                </li>
                <li className={style.item}>
                    <a href="#" className={style.link}>Contacts</a>
                </li>
            </ul>
        </nav>
    )
}