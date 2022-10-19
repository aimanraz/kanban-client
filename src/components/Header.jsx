import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
// FiSun
// BsMoonFill
function Header(props){
    return (
        <div className="border-b border-b-slate-300 dark:border-b-slate-800 shadow-md">
            <nav className='px-11 py-5 bm-12 flex justify-between'>
                <h1 className=' text-2xl font-bold text-blue-500 dark:text-cyan-400'>Simple Kanban</h1>
                <ul className='flex item-center'>
                <li className="px-4">{props.darkMode ?
                    <BsFillMoonStarsFill onClick={() => props.setDarkMode(!props.darkMode)} className=' cursor-pointer text-3xl text-gray-200'/>:
                    <BsFillSunFill onClick={() => props.setDarkMode(!props.darkMode)} className='cursor-pointer text-3xl text-yellow-400'/>
                    }
                </li>
                <li>
                    {props.darkMode ?
                    <a href="https://github.com/aimanraz/kanban-client" target="_blank" rel="noopener noreferrer"><FaGithubSquare className='cursor-pointer text-3xl transition-colors delay-75 text-gray-200 hover:text-cyan-600'/></a>:
                    <a href="https://github.com/aimanraz/kanban-client" target="_blank" rel="noopener noreferrer"><FaGithubSquare className='cursor-pointer text-3xl transition-colors delay-75 text-gray-900 hover:text-blue-500'/></a>
                    }
                </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;
