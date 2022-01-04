import React from 'react'
import style from './Main.module.scss'
import commonStyle from '../../common/style/commonStyle.module.scss'

export const Main = () => {
    return (
        <section className={style.main}>
            <div className={`${style.main__content} ${commonStyle.container}`}>
                <div className={style.main__body}>
                    <h1 className={style.main__mainTitle}>
                        Hi there! <br/>
                        I'm Yuri Kotenev <br/>
                        <span>Frontend</span> Developer
                    </h1>
                </div>
                <div className={style.main__image}>
                    <img
                        src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="main"/>
                </div>

            </div>
        </section>
    )
}