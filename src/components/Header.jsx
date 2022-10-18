import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs'
// FiSun
// BsMoonFill
function Header(props){
    return (
        <div className="border-b border-b-slate-300 dark:border-b-slate-800 shadow-md">
            <nav className='px-11 py-5 bm-12 flex justify-between'>
                <h1 className=' text-2xl font-bold text-blue-500 dark:text-cyan-400'>Simple Kanban</h1>
                <ul className='flex item-center'>
                <li>{props.darkMode ?
                    <BsFillMoonStarsFill onClick={() => props.setDarkMode(!props.darkMode)} className=' cursor-pointer text-2xl text-gray-200'/>:
                    <BsFillSunFill onClick={() => props.setDarkMode(!props.darkMode)} className=' cursor-pointer text-3xl text-yellow-400'/>
                    }
                </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;
