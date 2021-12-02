import React from 'react'
import {Header} from './Header/Header.'
import {Main} from './Main/Main'
import {Footer} from './Footer/Footer'
import commonStyle from './common/style/commonStyle.module.css'
import {Skills} from './Skills/Skills'
import {Projects} from './Projects/Projects'
import {Contacts} from './Contacts/Contacts'

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
