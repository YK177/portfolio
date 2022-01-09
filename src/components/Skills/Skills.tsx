import React from 'react'
import style from './Skills.module.scss'
import {Skill} from './Skill/Skill'
import {Title} from '../common/Title/Title'

export const Skills = () => {

    const skills = [
        {
            id: '1',
            icon: 'icon-react',
            subtitle: 'React',
        },
        {
            id: '2',
            icon: 'icon-redux',
            subtitle: 'Redux',
        },
        {
            id: '3',
            icon: 'icon-ts',
            subtitle: 'TypeScript',
        },
        {
            id: '4',
            icon: 'icon-js',
            subtitle: 'JavaScript',
        },
        {
            id: '5',
            icon: 'icon-html5',
            subtitle: 'HTML',
        },
        {
            id: '6',
            icon: 'icon-css3',
            subtitle: 'CSS',
        },


    ]

    return (
        <section className={style.skills}>
            <div className="container">
                <Title>My Skills</Title>
                <div className={style.skills__body}>
                    {
                        skills.map(s => <Skill
                            key={s.id}
                            icon={s.icon}
                            subtitle={s.subtitle}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}


