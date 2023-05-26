import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import { Icon } from '@iconify/react';
import useUser from '../hooks/useUser';


const Navbar = ({current, prelogin}) => {
  const navigate = useNavigate();
  const {setUser} = useUser();

  


  return (
        <nav className="flex items-center h-full sticky top-0 relative py-2">
            <div className="flex items-center text-black mr-8 ml-4">
                <Icon className='select-none' height="48" icon="healthicons:pharmacy-alt-outline" />
            </div>
            <div className="w-full block flex items-center w-auto">
                <div className="text-sm flex-grow">
                    <button className={`block inline-block ${current === "Home" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-white/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/", {})}>
                        Home
                    </button>
                    <button className={`block inline-block ${current === "Login" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-white/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/login", {})}>
                        Login
                    </button>
                </div>

                {
                    !prelogin && (
                        <div className='mr-8 flex flex-row items-center relative'>
                            <button className={`block inline-block ${current === "Logout" ? 'underline underline-offset-4 font-semibold' : ''} text-white hover:text-white/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => {setUser(null); navigate('/', {})}}>
                                Logout
                            </button>
                            <button className='rounded-full w-16 h-16 flex' onClick={() => navigate("/student/profile", {})}>
                                <Icon icon="healthicons:ui-user-profile" height="48" color="white" className='m-auto' />
                            </button>
                        </div>
                    )
                }
                
                

            </div>
        </nav>
  )
}

export default Navbar;