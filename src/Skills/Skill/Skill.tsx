import React from 'react'
import style from './Skill.module.css'
import commonStyle from './../../common/style/commonStyle.module.css'

type PropsType = {
    subtitle: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.header}>
                <div className={style.icon}/>
            </div>
            <h3 className={commonStyle.subtitle}>{props.subtitle}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}