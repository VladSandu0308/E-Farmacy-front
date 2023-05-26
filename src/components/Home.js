import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../images/logo.svg';
import home from '../images/home.svg';
import { server } from '../services/axios';

import useUser from '../hooks/useUser';
import Navbar from './Navbar';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        
       
    }
    

    return (
        <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-secondary flex-flex-row sticky top-0'>
                <Navbar current={"Home"} prelogin={true}/>
            </div>
            <div className='rown-span-8 flex'>
                <div className='mx-40 mt-16 bg-[#4f517d] text-white p-6 px-14 rounded-2xl flex flex-col'>
                    <div className='mx-auto'>
                        <img className='w-36 mx-8 select-none' src={logo} alt='logo'/>
                    </div>

                    <div className='mt-8 grid grid-cols-2'>
                        <div className='flex'>
                            <img className='w-72 ml-16 mb-16 elect-none' src={home} alt='home'/>
                        </div>
                        <div>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looBonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a tr The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home