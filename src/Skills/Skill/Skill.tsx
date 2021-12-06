import React from 'react'
import style from './Skill.module.scss'
import commonStyle from '../../common/style/commonStyle.module.scss'

type PropsType = {
    subtitle: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <article className={style.skill}>
            <div className={style.skill__header}>
                <div className={style.skill__icon}/>
            </div>
            <h3 className={commonStyle.subtitle}>{props.subtitle}</h3>
            <div className={style.skill__description}>
                {props.description}
            </div>
        </article>
    )
}