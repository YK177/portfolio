import React from 'react'
import style from './Contacts.module.scss'
import {Title} from '../common/Title/Title'

export const Contacts = () => {
    return (
        <section className={style.contacts}>
            <div className='container'>
                <Title>Contact Me</Title>
                <div className={style.contacts__body}>
                    <form action="#" className={style.contacts__form}>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Enter Name'}
                                   type="text"/>
                        </div>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Enter email'}
                                   type="email"/>
                        </div>
                        <div className={style.contacts__line}>
                            <input className={style.contacts__input}
                                   placeholder={'Enter subject'}
                                   type="text"/>
                        </div>
                        <div className={style.line}>
                            <textarea className={`${style.contacts__input} ${style.contacts__textarea}`}
                                      placeholder={'Enter message'}/>
                        </div>
                        <div className={style.contacts__line}>
                            <button className='btn' type={'submit'}>send</button>
                            <button className='btn' type={'reset'}>clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}