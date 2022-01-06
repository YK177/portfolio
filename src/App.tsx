import React from 'react'
import {Contacts} from './components/Contacts/Contacts'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Projects} from './components/Projects/Projects'
import {Skills} from './components/Skills/Skills'


function App() {
    return (
        <>
            <div className='background'/>
            <div className='right-effects'/>
            <div className='left-effects'/>
            <div className='wrapper'>
                <Header/>
                <main className='page'>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
                </main>
                <Footer/>
            </div>

        </>
    )
}

export default App
