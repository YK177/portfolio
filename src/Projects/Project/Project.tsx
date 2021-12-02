import React from 'react'
import style from './Project.module.css'
import commonStyle from './../../common/style/commonStyle.module.css'

type PropsType = {
    pictureURL: string
    subtitle: string
    description: string
}

export const Project = (props: PropsType) => {

    const background = {
        background: `url(${props.pictureURL}) center/cover no-repeat`
    }

    return (
        <div className={style.project}>
            <div style={background} className={style.body}>
                <a href={'#'} target={'_blank'} className={commonStyle.btn}>Explore</a>
            </div>
            <h3 className={commonStyle.subtitle}>{props.subtitle}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}