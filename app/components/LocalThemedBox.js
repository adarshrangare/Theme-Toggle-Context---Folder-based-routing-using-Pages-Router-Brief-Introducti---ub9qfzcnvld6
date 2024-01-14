'use client'
import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';


const LocalThemedBox = () => {
    const {theme, toggleTheme} = useTheme();

    const [localTheme, toggleLocalTheme] = useState(theme);

    function handleLocalTheme(){

        toggleLocalTheme(prev=>{
            return prev == "dark" ? "light" : "dark";
        })

    }
    useEffect(()=>{

        toggleLocalTheme(theme);

    },[theme])



return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} className={`bg-${localTheme}`} id="local-themed-box">
        {/* Write code below this line */}
        <p className={`txt-${localTheme}`} id='local-themed-text-container' >Hiiii</p>
        
        <button onClick={handleLocalTheme} id='local-theme-toggler' className={`btn txt-${localTheme} btn-${localTheme}`}>Toggle local theme to {localTheme == "dark" ? "light" : "dark"}</button>
        
        
    </div>
)
}

export { LocalThemedBox }