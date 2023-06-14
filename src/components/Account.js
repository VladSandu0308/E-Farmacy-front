import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import home from '../images/home.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar';

const Account = () => {
    const { register, handleSubmit } = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const {state} = useLocation();

    console.log(state);

    const prelogin = state?.prelogin ? state?.prelogin : true;

    console.log(prelogin);

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        
       
    }
    

    return (
        <div className='w-screen h-screen bg-white z-0'>
            <div className='bg-secondary flex flex-row sticky top-0'>
                <Navbar current={"Account"} prelogin={false}/>
            </div>
            <div className='rown-span-8 flex'>
                {
                    user?.type === "CUSTOMER" ? (
                        <div className='mx-auto mt-16 bg-secondary text-white p-6 px-14 rounded-2xl flex flex-col'>
                            <div className='mx-auto grid grid-cols-2'>
                                <div className='bg-primary w-48 h-16 border-2 mr-4 rounded-lg flex'>
                                    <h5 className='m-auto text-white '>Name: </h5>
                                </div>

                                <div className='bg-primary w-48 h-16 border-2 ml-4 rounded-lg flex'>
                                    <button className='m-auto py-2 px-6 bg-white hover:bg-white/70 text-primary font-bold rounded-xl'>Add allergy</button>
                                </div>
                            </div>

                            <div className='mt-8 flex flex-col bg-primary'>
                                <div className='p-8 flex flex-col gap-2'>
                                    <div className='mx-auto bg-white text-primary px-2 py-1 rounded-xl w-56 grid grid-cols-3'>
                                        <p className='col-span-2'> Allergy 131</p>
                                        <button className='w-6 h-6 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 pl-0.5 place-self-end mr-2'>
                                            <Icon icon="dashicons:no" color="#233c3b" height="20" className=''/>
                                        </button>
                                    </div>
                                    <div className='mx-auto bg-white text-primary px-8 py-0.5'>Allergy 2</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='mx-auto mt-16 bg-secondary text-white p-6 px-14 rounded-2xl flex flex-col'>
                            <div className='mx-auto grid grid-cols-2'>
                                <div className='bg-primary w-48 h-16 border-2 mr-4 rounded-lg flex'>
                                    <h5 className='m-auto text-white '>Name: </h5>
                                </div>

                                <div className='bg-primary w-48 h-16 border-2 mr-4 rounded-lg flex'>
                                    <h5 className='m-auto text-white '>Pharmacy: </h5>
                                </div>
                            </div>

                            <div className='mt-8 flex flex-col bg-primary'>
                                <div className='p-8 flex flex-col gap-2'>
                                    <div className='mx-auto bg-white text-primary px-2 py-1 rounded-xl w-64 grid grid-cols-8'>
                                        <p className='col-span-6'> Medicament 123</p>
                                        <div className='bg-[#5fb49c] w-6 h-6 rounded-md p-0.25 flex'>
                                            <p className='m-auto text-white font-bold'>50</p>
                                            {/* TO DO adaugat culoare rosie pe val mica */}
                                        </div>
                                        <button className='w-6 h-6 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 pl-0.5 place-self-end mr-0.5'>
                                            <Icon icon="dashicons:no" color="#233c3b" height="20" className=''/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
            
        </div>
    )
}

export default Account