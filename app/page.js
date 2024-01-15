import React from 'react'
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { Page } from './Main'
const App = () => {

  return (
    <div id="main">
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
      </ThemeProvider>
    </div>
  )
}


export default App;