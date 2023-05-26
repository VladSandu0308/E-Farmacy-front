import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import { Icon } from '@iconify/react';
import useUser from '../hooks/useUser';


const Navbar = ({current, prelogin}) => {
  const navigate = useNavigate();
  const {setUser} = useUser();


  console.log(prelogin);

  


  return (
        <nav className="flex items-center h-full sticky top-0 relative py-2">
            <div className="flex items-center text-black mr-8 ml-4">
                <Icon className='select-none' height="48" icon="healthicons:pharmacy-alt-outline" />
            </div>

           
            <div className="w-full block flex items-center w-auto">
                {
                    !prelogin ? (
                        <div className="text-sm flex-grow">
                            <button className={`block inline-block ${current === "Home" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primry/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/", {state: {prelogin: prelogin}})}>
                                Home
                            </button>
                            <button className={`block inline-block ${current === "Account" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primary/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/account", {state: {prelogin: false}})}>
                                My account
                            </button>
                            <button className={`block inline-block ${current === "Products" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primary/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/products", {state: {prelogin: false}})}>
                                Products
                            </button>
                            <button className={`block inline-block ${current === "Logout" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primary/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => {setUser(null); navigate('/', {state: {prelogin: true}})}}>
                                Logout
                            </button>
                            
                        </div>
                    ) : (
                        <div className="text-sm flex-grow">
                            <button className={`block inline-block ${current === "Home" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primary/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/", {state: {prelogin: prelogin}})}>
                                Home
                            </button>
                            <button className={`block inline-block ${current === "Login" ? 'underline underline-offset-4 font-semibold' : ''} text-primary hover:text-primary/70 mr-6 text-xl font-serif transition-colors duration-300`} onClick={() => navigate("/login", {state: {prelogin: true}})}>
                                Login
                            </button>
                            
                        </div>
                    )
                }
                
                

            </div>
        </nav>
  )
}

export default Navbar;