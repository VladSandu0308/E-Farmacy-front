import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);

        //navigate("/", {state: {prelogin: false}})

        let allergies = [];

        if (data.ibuprofen) { allergies.push({"name": "ibuprofen"});}
        if (data.cefuroxim) { allergies.push({"name": "cefuroxim"});}
        if (data.amoxicilina) { allergies.push({"name": "amoxicilina"});}
        if (data.lactoza) { allergies.push({"name": "lactoza"});}
        if (data.nurofen) { allergies.push({"name": "nurofen"});}
        if (data.penicilina) { allergies.push({"name": "penicilina"});}

        let body = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            advice: data.advice,
            administrationMethod: data.administrationMethod,
            allergies
        }

        console.log(body)

        
        try {
            setError('');
            server.post("/product/add", data).then(ret => {
                console.log(ret);
                
                navigate("/products", {state: {prelogin: false}})
            }).catch(e => {
                if (e.response.status === 400) {
                    setError("Product was not added");
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
            <Navbar current={"Products"} prelogin={false}/>
        </div>
        <div className='rown-span-8 bg-white flex'>
            <div className='m-auto mt-8 bg-secondary text-white py-6 px-14 rounded-2xl flex flex-col'>
                <div className='mx-auto'>
                    <h1 className='text-black font-bold uppercase'>Add product</h1>
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
                            <Icon icon="wpf:name" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                            <input {...register("name")} type="text" placeholder='Name' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </input>
                        </div>

                        <div className='mb-6 relative flex items-center'>
                            <Icon icon="healthicons:money-bag" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                            <input {...register("price")} type="text" placeholder='Price' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </input>
                        </div>
                        <div className='mb-6 relative flex items-center'>
                            <Icon icon="mingcute:balance-fill" color="#000" height="24" className='absolute ml-2 pb-0.5'/>
                            <input {...register("quantity")} type="number" placeholder='Quantity' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </input>
                        </div>


                        <div className='mb-6 relative flex items-center'>
                            <Icon icon="mdi:health-potion" color="#000" height="24" className='absolute top-0 ml-2 pb-0.5'/>
                            <textarea {...register("ingredients")} type="text" placeholder='Ingredients' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </textarea>
                        </div>
                        <div className='mb-6 relative flex items-center'>
                            <Icon icon="healthicons:medical-advice" color="#000" height="24" className='absolute top-0 ml-2 pb-0.5'/>
                            <textarea {...register("advice")} type="text" placeholder='Doctor advice' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </textarea>
                        </div>
                        <div className='mb-6 relative flex items-center'>
                            <Icon icon="medical-icon:administration" color="#000" height="24" className='absolute top-0 ml-2 pb-0.5'/>
                            <textarea {...register("administrationMethod")} type="text" placeholder='Administration method' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                            </textarea>
                        </div>

                        <div className='border-2 border-black w-full h-36 grid grid-cols-2 p-4'>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("ibuprofen")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Ibuprofen</label>
                            </div>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("lactoza")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Lactoza</label>
                            </div>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("penicilina")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Penicilina</label>
                            </div>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("amoxicilina")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Amoxicilina</label>
                            </div>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("cefuroxim")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Cefuroxim</label>
                            </div>
                            <div className='mb-6 relative flex items-center'>
                                <input {...register("nurofen")} type="checkbox" placeholder='Allergu' className='placeholder-black hover:placeholder-black/80 transition-colors duration-300 text-black border-0 border-b-2 border-black bg-transparent focus:outline-none pl-10 pb-0.5'>
                                </input>
                                <label className='text-black ml-1 text-sm'>Nurofen</label>
                            </div>
                        </div>
                        <button type="submit" className='bg-primary hover:bg-primary/80 transition-colors duration-300 mx-auto mb-4 mt-4 w-28 text-white py-2 px-4 rounded'>Add</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AddProduct