import React from 'react'
import style from './Project.module.scss'
import {Subtitle} from '../../common/Subtitle/Subtitle'

type PropsType = {
    pictureURL: string
    subtitle: string
    description: string
    link:string
}

export const Project = (props: PropsType) => {

    const background = {
        background: `url(${props.pictureURL}) center/cover no-repeat`
    }

    return (
        <article className={style.project}>
            <div style={background} className={style.project__image}/>
            <div className={style.project__body}>
                <Subtitle>{props.subtitle}</Subtitle>
                <p className={style.project__description}>
                    {props.description}
                </p>
                <a href={props.link} target={'_blank'} className="btn btn_small">View project</a>
            </div>
        </article>
    )
}