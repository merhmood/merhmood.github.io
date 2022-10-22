import React from 'react'


import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PersonalProjects from './components/PersonalProjects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return( 
    <>
      <div className='app'>
          <Header />
          <Home />
          <About />
          <PersonalProjects />
          <Contact />
      </div>
    </>
  )
}

export default App
