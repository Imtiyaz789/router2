import React from 'react'
import './app.css'
import {Brand, Navbar, CTA} from './Components/index'
import {Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './container'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Feature/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
