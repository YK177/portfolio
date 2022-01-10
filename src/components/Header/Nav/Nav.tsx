import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import style from './Nav.module.scss'

type PropsType = {
    isCollapsed: boolean
    collapseMenu: () => void
}

export const Nav: React.FC<PropsType> = ({isCollapsed, collapseMenu}) => {

    const menuClass = isCollapsed ? 'active' : ''

    const handleTouch = () => collapseMenu()

    return (
        <nav className={`${style.nav} ${style[menuClass]}`}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <Link className={style.nav__link}
                          activeClass={style.active}
                          to="main"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-80}
                          duration={800}
                          delay={500}
                          isDynamic={true}
                          onTouchEnd={handleTouch}
                    >
                        Main
                    </Link>
                </li>
                <li className={style.nav__item}>
                    <Link className={style.nav__link}
                          activeClass={style.active}
                          to="skills"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-80}
                          duration={800}
                          delay={500}
                          isDynamic={true}
                          onTouchEnd={handleTouch}
                    >
                        Skills
                    </Link>
                </li>
                <li className={style.nav__item}>
                    <Link className={style.nav__link}
                          activeClass={style.active}
                          to="projects"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-80}
                          duration={800}
                          delay={500}
                          isDynamic={true}
                          onTouchEnd={handleTouch}
                    >
                        Projects
                    </Link>
                </li>
                <li className={style.nav__item}>
                    <Link className={style.nav__link}
                          activeClass={style.active}
                          to="contacts"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-80}
                          duration={500}
                          delay={500}
                          isDynamic={true}
                          onTouchEnd={handleTouch}
                    >
                        Contacts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}