import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar';

const EditProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state)

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);

        //navigate("/", {state: {prelogin: false}})


        try {
            setError('');
            server.post(`/product/edit/quantity/${state.id}`, data).then(ret => {
                console.log(ret);
                
                navigate("/account", {state: {prelogin: false}})
            }).catch(e => {
                if (e.response.status === 304) {
                    setError("User already has this allergy");
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

   
    

    return (
        <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-secondary flex-flex-row sticky top-0'>
                <Navbar current={"Account"} prelogin={false}/>
            </div>
            <div className='rown-span-8 bg-white flex'>
                <div className='m-auto mt-40 bg-secondary text-white py-6 px-14 rounded-2xl flex flex-col w-1/3'>
                    <div className='mx-auto'>
                        <h1 className='text-black font-bold uppercase'>Edit product</h1>
                    </div>
                    <div className='border-b-2 border-gray-300 w-full mb-4'></div>
                    { error && 
                    
                        <div class="mx-auto mt-2 bg-red-100 border-t-4 border-red-400 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                            <p class="font-bold">Error</p>
                            <p class="text-sm">{error}</p>
                        </div>
                    }

                    <div className='mt-4 mx-auto flex flex-col'>
                        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-6 relative flex items-center'>
                                <Icon icon="mingcute:balance-fill" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                                <input {...register("quantity")} type="number" placeholder='Quantity' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                            </div>

                            <button type="submit" className='bg-primary hover:bg-primary/80 transition-colors duration-300 mx-auto mb-4 mt-4 w-28 text-white py-2 px-4 rounded'>Edit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EditProduct