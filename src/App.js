import React from 'react'
import './App.css'
import { Features, YouNeedBrowser, DragAndDrop, Pricing, Footer, HeaderComp } from './components/index';

const App = () => {
  return (
    <>
    <HeaderComp />
    <Features />
    <YouNeedBrowser />
    <DragAndDrop />
    <Pricing />
    <Footer />
    </>
  )
}

export default App
