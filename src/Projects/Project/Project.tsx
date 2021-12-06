import React from 'react'
import style from './Project.module.scss'
import commonStyle from '../../common/style/commonStyle.module.scss'

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
        <article className={style.project}>
            <div style={background} className={style.project__body}>
                <a href={'#'} target={'_blank'} className={commonStyle.btn}>Explore</a>
            </div>
            <h3 className={commonStyle.subtitle}>{props.subtitle}</h3>
            <div className={style.project__description}>
                {props.description}
            </div>
        </article>
    )
}