import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [role, setRole] = useState("user");

    const onSubmit = (data) => {
        console.log(data);

        // navigate("/login");

        const type = role === 'user' ? 0 : 1;

        let body;

        if (role === 'user') {
            body = {
                username: data.username,
                password: data.password,
                type,
                allergy: data.allergy
            }
        } else {
            body = {
                username: data.username,
                password: data.password,
                type,
                pharmacy: data.pharmacy,
                address: data.address
            }
        }
        
        try {
            setError('');
            server.post("/register", body).then(ret => {
                console.log(ret);

                navigate("/login")
                
            }).catch(e => {
                if (e.response.status === 400) {
                    setError("Account already exists");
                } else {
                    setError(e.message)
                }
                
                console.log("Error: " + e.message);
            })
        } catch (e) {
            setError(e.message);
            console.log("Error: " + e);
        }
    }

    console.log(role);
    

    return (
        <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-secondary flex-flex-row sticky top-0'>
                <Navbar current={"Login"} prelogin={true}/>
            </div>
            <div className='rown-span-8 bg-white flex'>
                <div className='m-auto mt-16 bg-secondary text-white py-6 px-14 rounded-2xl flex flex-col'>
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
                                <Icon icon="fluent:mail-24-filled" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                <input {...register("username")} type="text" placeholder='Username' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full'>
                                </input>
                            </div>

                            <div className='mb-4 relative flex items-center'>
                                <Icon icon="ri:lock-password-fill" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                <input {...register("password")} type="password" placeholder='Password' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full'>
                                </input>
                            </div>

                            <div className='mb-4 relative flex items-center'>
                                <Icon icon="subway:admin" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                <select {...register("type")} className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full' value={role} onChange={e => setRole(e.target.value)}>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            {
                                role === "user" ? (
                                    <div className='mb-4 relative flex items-center'>
                                        <Icon icon="mdi:allergy-outline" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                        <select {...register("allergy")} placeholder="Main Allergy" className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full'>
                                            <option value="none">No allergy</option>
                                            <option value="ibuprofen">Ibuprofen</option>
                                            <option value="amoxicilin">Amoxicilin</option>
                                        </select>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='mb-4 relative flex items-center'>
                                            <Icon icon="map:pharmacy" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                            <input {...register("pharmacy")} type="text" placeholder='Pharmacy' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full'>
                                            </input>
                                        </div>
                                        <div className='mb-4 relative flex items-center'>
                                            <Icon icon="material-symbols:house" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                            <input {...register("address")} type="text" placeholder='Address' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5 w-full'>
                                            </input>
                                        </div>
                                    </div>
                                )
                            }



                            
                            {/* <button onClick={() => navigate("/reset")} className='text-xs italic mx-auto mt-2 mb-4 text-[#ead7ba] hover:text-[#ead7ba]/80 transition-colors duration-300'>Did you forgot your password?</button> */}
                            <button onClick={() => navigate("/login")} className='text-xs italic mx-auto mb-2 text-primary hover:text-secondary/80 transition-colors duration-300'>Do you already have an account? Login here</button>

                            <button type="submit" className='bg-primary hover:bg-primary/80 transition-colors duration-300 mx-auto mb-4 mt-4 w-28 text-white py-2 px-4 rounded'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register