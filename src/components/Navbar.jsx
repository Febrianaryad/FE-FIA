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
            bg-gradient-to-tr from-zinc-900 to-violet-900 rounded-bl-lg rounded-br-lg
            py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
          <span className='text-3xl text-indigo-600 m-1 pt-2'>
            <img className='w-20 pr-3' src={logofia} alt="Logo BEM FIA" />
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
