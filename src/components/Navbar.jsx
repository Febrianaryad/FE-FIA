import React, {useState} from 'react'
import logofia from '../images/logofia.png'
import aboutnav from '../aboutnav.json';
import profnav from '../profnav.json';
import { IoMdMenu, IoMdArrowDropdown, IoMdArrowDropup, IoIosClose } from 'react-icons/io'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const click = () => setNav(!nav)

  const [navProv, setNavProv] = useState(false)
  const [isOpenProv, setIsOpenProv] = useState(false)
  const clickProv = () => setNavProv(!navProv)

  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center flex justify-between bg-gradient-to-tr from-zinc-900 to-violet-900 rounded-bl-lg rounded-br-lg py-4 md:px-10 px-7'>
        
        <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
          <span className='text-3xl text-indigo-600 m-1 pt-2'>
            <img className='w-20 pr-3' src={logofia} alt="Logo BEM FIA" />
          </span>
          BEM FIA UI
        </div>

        <div className='flex items-center h-full'>
          <ul className='hidden md:flex items-center h-full text-white text-lg font-bold mx-3'>
            <li className='hover:text-gray-400 duration-500 hover:underline  flex items-center h-full mx-2'>
              <a href="/">
                Home
              </a>
            </li>
    
            <li onClick={() => setIsOpen((prev) => !prev)} className='hover:text-gray-400 duration-500 hover:underline flex items-center h-full mx-2 cursor-pointer'>
                Tentang Kami
            {!isOpen ? (<IoMdArrowDropdown className='w-5'/>):(<IoMdArrowDropup className='w-5'/>)}
            </li>
            {isOpen && 
                <div className='absolute z-20 top-[7rem] flex flex-col items-start w-[10rem] p-2 py-3'>
                  {aboutnav.map((item, x) => (
                    <div className='flex w-full justify-between hover:bg-slate-50 py-3 cursor-pointer border-l-transparent' key={x}>
                      <h3>{item.about}</h3>
                    </div>
                  ))}
                </div>
              }

            <li onClick={() => setIsOpenProv((prev) => !prev)} className='hover:text-gray-400 duration-500 hover:underline flex items-center h-full mx-2 cursor-pointer'>
                Profile
            {!isOpenProv ? (<IoMdArrowDropdown className='w-5'/>):(<IoMdArrowDropup className='w-5'/>)}
            </li>
            {isOpenProv && 
                <div className='absolute z-20 top-[7rem] flex flex-col items-start w-[10rem] p-2 py-3'>
                  {profnav.map((item, y) => (
                    <div className='flex w-full justify-between hover:bg-slate-50 py-3 cursor-pointer border-l-transparent' key={y}>
                      <h3>{item.profile}</h3>
                    </div>
                  ))}
                </div>
              }

            <li className='hover:text-gray-400 duration-500 hover:underline flex items-center h-full mx-2'>
              <a href='/'>
                Publikasi
              </a>
            </li>

            <li className='hover:text-gray-400 duration-500 hover:underline flex items-center h-full mx-2'>
              <a href='/'>
                Open Registrasi
              </a>
            </li>

          </ul>
        </div>

        <div className='md:hidden' onClick={click}>
          {!nav ? <IoMdMenu color="White" className='w-5'/> : <IoIosClose color="White" className='w-5'/>}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute z-20 top-[7rem] bg-gradient-to-b from-zinc-900 to-violet-900 w-full px-8 left-0 text-white'}>
          <li className='border-b-2 w-full py-1'>
            <a href="/">
              Home
            </a>
          </li>
          <li className='border-b-2 w-full py-1'>
            <a href="/">
              Tentang Kami
            </a>
          </li>
          <li className='border-b-2 w-full py-1'>
            <a href="/">
              Profile
            </a>
          </li>
          <li className='border-b-2 w-full py-1'>
            <a href="/">
              Publikasi
            </a>
          </li>
          <li className=' w-full'>
            <a href="/">
              Open Registrasi
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
