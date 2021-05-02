import React from 'react'
import './App.css'
import classNames from 'classnames'

function App() {
  const headerClass = classNames('App-header', 'animation-oboroge', 'wrapper')
  return (
    <div className="App">
      <header className={headerClass}>
        <p className="contents">46</p>
      </header>
      <footer>©oboroge ni ukande kita...</footer>
    </div>
  )
}

export default App
