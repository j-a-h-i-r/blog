import React, { useEffect, useState } from 'react';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const btnStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
}

export function ThemeToggle() {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        changeThemeInHtmlTag(theme);
        setTheme(theme);
    }, []);

    function onClickToggle() {
        const newTheme = theme === 'light'? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        changeThemeInHtmlTag(newTheme);
        setTheme(newTheme);
    }

    function changeThemeInHtmlTag(newTheme) {
        const oldTheme = newTheme === 'light'? 'dark' : 'light';
        document.documentElement.classList.remove(oldTheme);
        document.documentElement.classList.add(newTheme);
    }

    return <button type="button" style={btnStyle} onClick={onClickToggle}>
        {theme === 'light'? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun} color="rgb(252,211,77)" /> }
    </button>
}
