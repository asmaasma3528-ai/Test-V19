import { createContext, useContext } from "react";

const ThemeContext = createContext("dark");

// const ThemeProvider = ({children}) => (
//     <themeContext.Provider value = "light">
//         {children}
//     </themeContext.Provider>
// );

const ThemeComponent = () => {
    const theme = useContext(ThemeContext);
    return  <h1>Current theme : {theme}</h1>
}

export default function App(){
    return (
        <ThemeContext value = "light">
            <ThemeComponent />
        </ThemeContext>
    )
}