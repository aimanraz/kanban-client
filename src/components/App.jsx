import React, { useEffect, useState } from "react";
import Header from './Header';
import Board from "./Board";

function App (){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log(darkMode);
    }, [darkMode])
    

    return (
        <div className={darkMode ? "dark": ""}>
            <div className="min-h-screen bg-white dark:bg-slate-900">
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Board />
            </div>

        </div>
        )
}

export default App;