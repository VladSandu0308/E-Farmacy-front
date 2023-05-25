import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        
        // try {
        //     setError('');
        //     server.post("login", data).then(ret => {
        //         console.log(ret);
        //         setUser(ret.data);

        //         if (ret?.data?.isProvider) { 
        //             if(ret?.data?.first_login) {
        //                 navigate("/set_password", {});
        //             } else {
        //                 navigate("/provider/profile", {}); 
        //             }
                    
        //         } else if (ret?.data?.admin) {
        //             navigate("/student_list", {})
        //         } else {
        //             console.log(ret?.data?.first_login);
        //             if(ret?.data?.first_login) {
        //                 navigate("/set_password", {});
        //             } else {
        //                 navigate("/student/dashboard", {});
        //             }
        //         }
                
        //     })
        // } catch (e) {
        //     setError(e.message);
        //     console.log("Error: " + e);
        // }
    }
    

    return (
        <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-primary flex-flex-row sticky top-0'>
                <Navbar current={"Login"} state={"Alfa"} className="z-20"/>
            </div>
            <div className='rown-span-8 bg-white flex'>
                <div className='m-auto mt-16 bg-primary text-white py-6 px-14 rounded-2xl flex flex-col'>
                    <div className='mx-auto'>
                        <img className='w-36 mx-8 select-none' src={logo} alt='logo'/>
                    </div>
                    { error && 
                    
                        <div class="mx-auto mt-2 bg-red-100 border-t-4 border-red-400 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                            <p class="font-bold">Error</p>
                            <p class="text-sm">{error}</p>
                        </div>
                    }

                    <div className='mt-4 mx-auto flex flex-col'>
                        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4 relative flex items-center'>
                                <Icon icon="fluent:mail-24-filled" color="#fff" height="24" className='absolute ml-2 pb-0.5'/>
                                <input {...register("email")} type="email" placeholder='Email' className='placeholder-white hover:placeholder-white/80 transition-colors duration-300 text-white border-0 border-b-2 border-white bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                            </div>

                            <div className='mb-4 relative flex items-center'>
                                <Icon icon="ri:lock-password-fill" color="#fff" height="24" className='absolute ml-2 pb-0.5'/>
                                <input {...register("password")} type="password" placeholder='Password' className='placeholder-white hover:placeholder-white/80 transition-colors duration-300 text-white border-0 border-b-2 border-white bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                            </div>
                            {/* <button onClick={() => navigate("/reset")} className='text-xs italic mx-auto mt-2 mb-4 text-[#ead7ba] hover:text-[#ead7ba]/80 transition-colors duration-300'>Did you forgot your password?</button> */}
                            <button onClick={() => navigate("/")} className='text-xs italic mx-auto mb-2 text-secondary hover:text-secondary/80 transition-colors duration-300'>Don't you have an account? Register here</button>

                            <button type="submit" className='bg-white hover:bg-white/80 transition-colors duration-300 mx-auto mb-4 mt-4 w-28 text-primary py-2 px-4 rounded'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login