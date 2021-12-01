import React from 'react'
import {Header} from './Header/Header.'
import {Main} from './Main/Main'
import {Footer} from './Footer/Footer'
import commonStyle from './common/style/commonStyle.module.css'

function App() {
    return (
        <div className={commonStyle.wrapper}>
            <Header/>
            <main className={commonStyle.page}>
                <Main/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
