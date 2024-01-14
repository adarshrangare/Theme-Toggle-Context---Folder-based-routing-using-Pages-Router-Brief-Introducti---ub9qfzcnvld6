'use client'
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggleButton = () => {
    const {theme , toggleTheme } = useTheme();
    return (
       <>
        <button onClick={toggleTheme} className={`btn btn-${theme} txt-${theme}`}>
        Switch to {theme=="dark" ? "light" : "dark"} theme
        </button>
        
       </>
    )

}
export {ThemeToggleButton}