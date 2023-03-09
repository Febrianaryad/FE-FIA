import React from 'react'
import logofia from '../images/logofia.png'

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Tentang Kami", link: "/" },
    { name: "Profile", link: "/" },
    { name: "Publikasi", link: "/" },
    { name: "Open Registrasi", link: "/" },
  ]
  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between 
            bg-gradient-to-tr from-zinc-900 to-violet-900
            py-2 md:px-4'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-white mt-2 mb-2'>
          <span className='text-3xl text-indigo-600 pr-1'>
            <img className='w-16' src={logofia} alt="Logo BEM FIA" />
          </span>
          BEM FIA UI
        </div>
        <ul className='md:flex md:items-center'>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7 font-bold'>
                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
