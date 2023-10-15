import {createContext,useContext} from 'react'


export const themeContext = createContext({
    thememode : 'light',
    darkMode : ()=>{} ,
    lightMode : ()=>{}
}) 

export const ThemeProvider = themeContext.Provider;

export const  useTheme = ()=>{
    return useContext(themeContext); 
}