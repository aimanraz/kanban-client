import React, { useState } from "react";
import Header from './Header';
import Board from "./Board";
import Footer from "./Footer";

function App (){
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark": ""}>
            <div className="min-h-screen bg-white dark:bg-slate-900">
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Board/>
                
            </div>
            <Footer/>
        </div>
        )
}

export default App;