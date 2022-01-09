import React from 'react'
import style from './Contacts.module.scss'
import {Title} from '../common/Title/Title'

export const Contacts = () => {
    return (
        <section className={style.contacts}>
            <div className="container">
                <Title>Get in touch</Title>
                <div className={style.contacts__body}>
                    <form action="#" className={style.contacts__form}>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Name *'}
                                   type="text"/>
                        </div>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Email *'}
                                   type="email"/>
                        </div>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Subject *'}
                                   type="text"/>
                        </div>
                        <div className={style.contacts__line}>
                            <textarea className={style.contacts__input}
                                      placeholder={'Your message *'}/>
                        </div>
                        <div className={style.contacts__line}>
                            <button className="btn" type={'submit'}>send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}