import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
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
    const {state} = useLocation();

    console.log(state);

    const prelogin = state?.prelogin !== null ? state?.prelogin : true;

    console.log(prelogin);

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        
       
    }
    

    return (
        <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-secondary flex-flex-row sticky top-0'>
                <Navbar current={"Home"} prelogin={prelogin}/>
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
                        E-Pharmacy este o nouă platformă care vine in sprijinul tuturor clientilor unei farmacii si a oricarei persoane aflata in situatia de a cumpara un medicament, fie nou fie ceva cu care este obisnuit. Platforma permite vizualizarea ofertelor dintr-o farmacie cu un detaliu foarte important: tipul alergiei continute. Scopul este identificarea alergiilor unui medicament cu alergiile unui pacient. Clientul isi formeaza un profil unde isi adauga alergiile de care sufera si mai apoi va fi notificat in privinta acestora. Un astfel de utilizator poate vizualiza cantitatile unui produs, sfatul medicului si prospectul intr-un format usor de urmarit.
Din punctul de vedere al personalului unei farmacii, platforma eficientizeaza partea de administrare a stocului medicamentelor.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home