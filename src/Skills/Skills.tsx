import React from 'react'
import style from './Skills.module.scss'
import commonStyle from '../common/style/commonStyle.module.scss'
import {Skill} from './Skill/Skill'

export const Skills = () => {

    const skills = [
        {
            id: '1',
            subtitle: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
        {
            id: '2',
            subtitle: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
        {
            id: '3',
            subtitle: 'JavaScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
        {
            id: '4',
            subtitle: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
        {
            id: '5',
            subtitle: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
        {
            id: '6',
            subtitle: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.'
        },
    ]

    return (
        <section className={style.skills}>
            <div className={commonStyle.container}>
                <h2 className={commonStyle.title}>My Skills</h2>
                <div className={style.skills__body}>
                    {
                        skills.map(s => <Skill key={s.id}
                                               subtitle={s.subtitle}
                                               description={s.description}/>)
                    }
                </div>
            </div>
        </section>
    )
}


