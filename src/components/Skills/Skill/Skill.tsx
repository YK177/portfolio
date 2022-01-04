import React from 'react'
import style from './Skill.module.scss'
import {Subtitle} from '../../common/Subtitle/Subtitle'

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
            <Subtitle>{props.subtitle}</Subtitle>
            <div className={style.skill__description}>
                {props.description}
            </div>
        </article>
    )
}