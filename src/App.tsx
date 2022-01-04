import React from 'react'
import commonStyle from './common/style/commonStyle.module.scss'
import {Skills} from './components/Skills/Skills'
import {Projects} from './components/Projects/Projects'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Contacts} from './components/Contacts/Contacts'
import {Footer} from './components/Footer/Footer'

function App() {
    return (
        <div className={commonStyle.wrapper}>
            <Header/>
            <main className={commonStyle.page}>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
