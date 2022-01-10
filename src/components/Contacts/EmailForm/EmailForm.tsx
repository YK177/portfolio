import style from './EmailForm.module.scss'
import React from 'react'

export const EmailForm = () => {
    return (

        <form action="#" className={style.form}>
            <div className={style.form__line}>
                <input className={style.form__input}
                       placeholder={'Name *'}
                       type="text"/>
            </div>
            <div className={style.form__line}>
                <input className={style.form__input}
                       placeholder={'Email *'}
                       type="email"/>
            </div>
            <div className={style.form__line}>
                <input className={style.form__input}
                       placeholder={'Subject *'}
                       type="text"/>
            </div>
            <div className={style.form__line}>
                            <textarea className={style.form__input}
                                      placeholder={'Your message *'}/>
            </div>
            <div className={style.form__line}>
                <button className="btn" type={'submit'}>send message</button>
            </div>
        </form>
    )
}
