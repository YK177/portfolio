import React from 'react'
import style from './Projects.module.scss'
import commonStyle from '../common/style/commonStyle.module.scss'
import {Project} from './Project/Project'

export const Projects = () => {

    const propjects = [
        {
            id: '1',
            pictureURL: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            subtitle: 'social network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sint?',
        },
        {
            id: '2',
            pictureURL: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            subtitle: 'to do list',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sint?',
        },
        {
            id: '3',
            pictureURL: 'https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            subtitle: 'counter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sint?',
        },
    ]

    return (
        <section className={style.projects}>
            <div className={commonStyle.container}>
                <h2 className={commonStyle.title}>My Projects</h2>
                <div className={style.projects__body}>
                    {
                        propjects.map(p => <Project key={p.id}
                                                    pictureURL={p.pictureURL}
                                                    subtitle={p.subtitle}
                                                    description={p.description}/>)
                    }
                </div>
            </div>
        </section>
    )
}