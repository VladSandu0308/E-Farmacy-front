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
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const {state} = useLocation();

    console.log(state);

    const prelogin = state?.prelogin ? state?.prelogin : true;

    const [allergies, setAllergies] = useState([]);
    const [products, setProducts] = useState([]);


    console.log(prelogin);

    useEffect(() => {
        server.get(`/user/${user.id}/allergies`).then((ret) => {
            if (ret.status === 200) {
                console.log(ret.data);
                setAllergies(ret.data);
            } else {
                navigate("/");
            }
        });
      }, []);

      useEffect(() => {
        server.get("product/all").then((ret) => {
            if (ret.status === 200) {
                console.log(ret.data);
                setProducts(ret.data);
            } else {
                navigate("/");
            }
        });
      }, []);



    const handleDeleteAllergy = (al) => {
        console.log(al);
        try {
            server.delete(`/user/${user.id}/allergies`, {data: al}).then(ret => {
                console.log(ret);
                setAllergies(ret.data);
                
                let newUser = user;
                newUser.allergies = ret.data;

                setUser(newUser);

            }).catch(e => {
                console.log("Error: " + e.message);
            })
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    const handleDeleteProduct = (prod) => {
        console.log(prod);
        try {
            server.delete(`/product/delete/${prod.id}`).then(ret => {
                console.log(ret);

                server.get("product/all").then((rett) => {
                    if (rett.status === 200) {
                        console.log(rett.data);
                        setProducts(rett.data);
                    } else {
                        navigate("/");
                    }
                });

            }).catch(e => {
                console.log("Error: " + e.message);
            })
        } catch (e) {
            console.log("Error: " + e);
        }
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
                                    <h5 className='m-auto text-white '>Name: {user.username}</h5>
                                </div>

                                <div className='bg-primary w-48 h-16 border-2 ml-4 rounded-lg flex'>
                                    <button className='m-auto py-2 px-6 bg-white hover:bg-white/70 text-primary font-bold rounded-xl' onClick={() => navigate("/add/allergy", {state: {prelogin: false}})}>Add allergy</button>
                                </div>
                            </div>

                            <div className='mt-8 flex flex-col bg-primary'>
                                <div className='p-8 flex flex-col gap-2'>
                                    {
                                        allergies.length ? (
                                            allergies.map(al => (
                                                <div className='mx-auto bg-white text-primary px-2 py-1 rounded-xl w-56 grid grid-cols-3'>
                                                    <p className='col-span-2 capitalize'> {al.name} </p>
                                                    <button className='w-6 h-6 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 pl-0.5 place-self-end mr-2' onClick={() => handleDeleteAllergy(al)}>
                                                        <Icon icon="dashicons:no" color="#233c3b" height="20" className=''/>
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <div className='mx-auto bg-p text-white px-2 py-1 rounded-xl'>
                                               No allergies
                                            </div>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='mx-auto mt-16 bg-secondary text-white p-6 px-14 rounded-2xl flex flex-col'>
                            <div className='mx-auto grid grid-cols-2'>
                                <div className='bg-primary w-48 h-16 border-2 mr-4 rounded-lg flex'>
                                    <h5 className='m-auto text-white '>Name: {user.username}</h5>
                                </div>

                                <div className='bg-primary w-48 h-16 border-2 mr-4 rounded-lg flex'>
                                    <h5 className='m-auto text-white '>Pharmacy: {user.pharmacy}</h5>
                                </div>
                            </div>

                            <div className='mt-8 flex flex-col bg-primary'>
                                <div className='p-8 flex flex-col gap-2'>
                                    {
                                        products.length ? (
                                            products.map(prod => (
                                                <div className='mx-auto bg-white text-primary px-2 py-1 rounded-xl w-80 grid grid-cols-8'>
                                                    <p className='col-span-5'> {prod.name}</p>
                                                    <div className={`${prod.quantity <= 10 ? 'bg-[#b45f5f]' : 'bg-[#5fb49c]'} w-8 h-6 rounded-md p-0.25 flex`}>
                                                        <p className='m-auto text-white font-bold'>{prod.quantity}</p>
                                                        {/* TO DO adaugat culoare rosie pe val mica */}
                                                    </div>
                                                    <button className='w-6 h-6 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 pl-0.5 place-self-end mr-1' onClick={() => handleDeleteProduct(prod)}>
                                                        <Icon icon="dashicons:no" color="#233c3b" height="20" className=''/>
                                                    </button>
                                                    <button className='w-6 h-6 rounded-full bg-primary hover:bg-secondary transition-colors duration-300 pl-0.5 place-self-end mr-0.5' onClick={() => navigate('/edit/product', {state: prod})}>
                                                        <Icon icon="material-symbols:edit" color="#233c3b" height="20" className=''/>
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <div className='mx-auto bg-p text-white px-2 py-1 rounded-xl'>
                                               No products
                                            </div>

                                        )
                                    }
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