'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext, useTheme } from './components/ThemeProvider';


const Main = () => {
    const {theme, toggleTheme } = useTheme();
    return(
        <div className={`container bg-${theme}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme} txt-${theme}`} onClick={toggleTheme} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }