import React from 'react'
import {Title} from '../common/Title/Title'
import style from './Main.module.scss'
import avatar from '../../assets/images/avatar.png'
import Typewriter from 'typewriter-effect'
// @ts-ignore
import resume from '../../assets/documents/resume.pdf'

export const Main = () => {
    return (
        <section id="main" className={style.main}>
            <div className={`container ${style.main__content}`}>
                <div className={style.main__body}>
                    <Title>Introduction</Title>
                    <h1 className={style.main__mainTitle}>
                        Hi there! <br/>
                        I'm Yuri Kotenev <br/>
                        <span>
                            <Typewriter
                                options={{
                                    strings: 'Frontend Developer',
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>
                    <div className={style.main__box}>
                        <div className={style.main__links}>
                            <a href="https://t.me/yuri_kotenev" rel="noreferrer"
                               target="_blank" className="icon-telegram"/>
                            <a href="https://github.com/YK177" rel="noreferrer"
                               target="_blank" className="icon-github"/>
                            <a href="https://www.linkedin.com/in/yuri-kotenev/"
                               rel="noreferrer" target="_blank"
                               className="icon-linkedin"/>
                            <a href="https://www.codewars.com/users/YK177"
                               rel="noreferrer" target="_blank"
                               className="icon-codewars"/>
                        </div>
                        <div className={style.main__resume}>
                            <a href={resume}
                               download="cv_Yuri_Kotenev.pdf"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn">
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