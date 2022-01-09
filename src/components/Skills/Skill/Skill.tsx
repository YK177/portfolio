import React from 'react'
import style from './Skill.module.scss'
import {Subtitle} from '../../common/Subtitle/Subtitle'

type PropsType = {
    icon: string
    subtitle: string
}

export const Skill = (props: PropsType) => {
    return (
        <article className={style.skill}>
            <div className={style.skill__header}>
                <div className={style.skill__icon}>
                    <span className={props.icon}/>
                </div>
            </div>
            <Subtitle>{props.subtitle}</Subtitle>
        </article>
    )
}