import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='text-slate-400 dark:text-slate-600 w-screen absolute bottom-2 text-center'>
        Copyright ⓒ {year}
    </footer>
  )
}

export default Footer;