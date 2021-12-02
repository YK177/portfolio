import React from 'react'
import style from './Contacts.module.css'
import commonStyle from './../common/style/commonStyle.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={commonStyle.container}>
                <h2 className={commonStyle.title}>Contact Me</h2>
                <div className={style.body}>
                    <form action="#" className={style.form}>
                        <div className={style.line}>
                            <input className={style.input}
                                   placeholder={'Enter Name'}
                                   type="text"/>
                        </div>
                        <div className={style.line}>
                            <input className={style.input}
                                   placeholder={'Enter email'}
                                   type="email"/>
                        </div>
                        <div className={style.line}>
                            <input className={style.input}
                                   placeholder={'Enter subject'}
                                   type="text"/>
                        </div>
                        <div className={style.line}>
                            <textarea className={`${style.input} ${style.textarea}`}
                                      placeholder={'Enter message'}/>
                        </div>
                        <div className={style.line}>
                            <button className={commonStyle.btn} type={'submit'}>send</button>
                            <button className={commonStyle.btn} type={'reset'}>clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}