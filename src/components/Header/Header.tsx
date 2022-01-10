import React, {useState} from 'react'
import style from './Header.module.scss'
import {Nav} from './Nav/Nav'

export const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }

    const iconClass = isCollapsed ? 'active' : ''

    const isCollapsedTogglerCallback = () => {
        setIsCollapsed(false)
    }

    return (
        <header className={style.header}>
            <div className={`container ${style.header__content}`}>
                <div className={style.header__menu}>
                    <button onClick={handleClick} type="button"
                            className={`${style.header__icon} ${style[iconClass]}`}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <Nav isCollapsed={isCollapsed} collapseMenu={isCollapsedTogglerCallback}/>
                </div>
            </div>
        </header>
    )
}