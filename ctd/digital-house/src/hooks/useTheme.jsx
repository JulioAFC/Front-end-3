import { useState } from "react"
import { createContext, useContext } from "react"

//Criação do contexto
const ThemeContext = createContext()

//Criação do Provedor para o Contexto
export function ThemeProvider(props){

    const themeLocalStorage = localStorage.getItem('theme')
    //State que irá controlar qual Tema a aplicação está usando
    const [theme, setTheme] = useState(themeLocalStorage === null ? 'dark' : themeLocalStorage)

    //Função resopnsável por Trocar o Tema
    function changeTheme(themeReceived){

        if(themeReceived !== theme){
            
            setTheme(themeReceived)
            localStorage.setItem('theme',themeReceived)
        }
    }

    return(

        //Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será 
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

//Hook Personalizado dos Elementos utilizados quando quizermos utilizar algumas das Funcionalidades contidas em nosso Contexto
export function useTheme(){

    const context = useContext(ThemeContext)

    return context
}