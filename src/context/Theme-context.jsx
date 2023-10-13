import React, { useState, useEffect, createContext } from "react"
import { ThemeContext } from "styled-components";

export const themes = {

    light: {
        divsBg: "hsl(0, 0%, 98%)",
        bodyBg: "hsl(236, 33%, 92%)",
        linhaEntreLabels: "hsl(233, 11%, 84%)",
        letrasFooterColor: "hsl(236, 9%, 61%)",
        letrasLabelColor: "hsl(235, 19%, 35%)",
        backgroundImage: "url(./images/bg-desktop-light.jpg)",

    },
    dark: {

        bodyBg: "hsl(235, 21%, 11%)",
        shadows: "hsl(235, 24%, 19%)",
        LinhaEntreLabels: "hsl(234, 39%, 85%)",
        letrasLabelColorHover: "hsl(236, 33%, 92%)",
        letrasLabelColor: "hsl(234, 11%, 52%)",
        letrasFooterColor: "hsl(233, 14%, 35%)",
        divsBg: "hsl(237, 14%, 26%)",
        backgroundImage: "url(./images/bg-desktop-dark.jpg)",

    }
}


export const themeContext = createContext({
    theme: "",
    TrocarTema: () => { }
})


export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(theme.light);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    const TrocarTema = (newTheme) => {

        setTheme(newTheme)

        if (theme === themes.light) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }


    return (

        <ThemeContext.Provider value={{ theme, TrocarTema }}>
            {props.children}
        </ThemeContext.Provider>
    )

}