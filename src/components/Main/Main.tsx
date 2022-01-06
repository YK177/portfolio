import React from 'react'
import style from './Main.module.scss'
import avatar from '../../assets/images/avatar.png'

export const Main = () => {
    return (
        <section className={style.main}>
            <div className={`container ${style.main__content}`}>
                <div className={style.main__body}>
                    <h1 className={style.main__mainTitle}>
                        Hi there! <br/>
                        I'm Yuri Kotenev <br/>
                        <span>Frontend Developer</span>
                    </h1>
                    <div className={style.main__resume}>
                        <a href="#" className="btn">Browse resume </a>
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