'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { useThemeContext } from './components/ThemeProvider';

const Page = () => {
    let context=useThemeContext();
    let {global}=context;

    return(
        <div className={global?"container bg-light":"container bg-dark"} id="themed-page">
            <p id="themed-text-container" className={global?"txt-light":"txt-dark"}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button  id="themed-button" className={global?"btn btn-light txt-light":"btn btn-dark txt-dark"}>Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }