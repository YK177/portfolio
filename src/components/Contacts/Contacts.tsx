import React from 'react'
import style from './Contacts.module.scss'
import {Title} from '../common/Title/Title'
import {EmailForm} from './EmailForm/EmailForm'

export const Contacts = () => {
    return (
        <section id="contacts" className={style.contacts}>
            <div className="container">
                <Title>Get in touch</Title>
                <div className={style.contacts__form}>
                    <EmailForm/>
                </div>
                <div className={style.contacts__items}>
                    <a href="mailto:kotenev.yuri@gmail.com" className={style.contacts__item}><span className='icon-mail'/>kotenev.yuri@gmail.com</a>
                    <a href="https://t.me/yuri_kotenev" className={style.contacts__item}><span className='icon-telegram'/>@yuri_kotenev</a>
                    <a href="tel:+79037577890" className={style.contacts__item}><span className='icon-phone'/>+7 (903) 757-78-90</a>
                </div>
            </div>
        </section>
    )
}


