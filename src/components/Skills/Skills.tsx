import React from 'react'
import style from './Skills.module.scss'
import {Skill} from './Skill/Skill'
import {Title} from '../common/Title/Title'

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
            <div className='container'>
                <Title>My Skills</Title>
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


