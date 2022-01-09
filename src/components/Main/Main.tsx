import React from 'react'
import style from './Main.module.scss'
import avatar from '../../assets/images/avatar.png'
import {Title} from '../common/Title/Title'

export const Main = () => {
    return (
        <section className={style.main}>
            <div className={`container ${style.main__content}`}>
                <div className={style.main__body}>
                    <Title>Introduction</Title>
                    <h1 className={style.main__mainTitle}>
                        Hi there! <br/>
                        I'm Yuri Kotenev <br/>
                        <span>Frontend Developer</span>
                    </h1>
                    <div className={style.main__box}>
                        <div className={style.main__links}>
                            <a href="#" target="_blank" className="icon-telegram"/>
                            <a href="#" target="_blank" className="icon-github"/>
                            <a href="#" target="_blank" className="icon-linkedin"/>
                            <a href="#" target="_blank" className="icon-codewars"/>
                        </div>
                        <div className={style.main__resume}>
                            <a href="#" className="btn">
                                Browse resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.main__image}>
                    <img
                        src={avatar}
                        alt="main"/>
                </div>
            </div>
        </section>
    )
}