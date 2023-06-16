import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { Icon } from '@iconify/react';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

import { server } from '../services/axios';




const Products = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [goodProducts, setGoodProducts] = useState([]);

    const [search, setSearch] = useState("");


    useEffect(() => {
        server.get("product/all").then((ret) => {
            if (ret.status === 200) {
                console.log(ret.data);
                setProducts(ret.data);
                setGoodProducts(ret.data);
            } else {
                navigate("/");
            }
        });
      }, []);

      useEffect(() => {
        setGoodProducts(
          products.filter((prod) => prod.name?.toLowerCase().startsWith(search.toLowerCase()))
        )
      }, [search])
    



    console.log(products)

  return (
    <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
            <div className='bg-secondary flex flex-row sticky top-0'>
                <Navbar current={"Products"} prelogin={false}/>
            </div>
            <div className='row-span-7 flex flex-col'>
            {
                user?.type === "CUSTOMER" ? (
                    <input className='mx-auto mt-8 w-3/4 h-12 bg-secondary rounded-xl pl-2' placeholder='Search product...' value={search}
                    onChange={(e) => setSearch(e.target.value)}>

                    </input>
                ) : (
                    <div className='flex mb-4'>
                        <input className='ml-20 mt-8 w-2/3 h-12 bg-secondary rounded-xl pl-2' placeholder='Search product...' value={search}
                        onChange={(e) => setSearch(e.target.value)}>

                        </input>

                        <button className='bg-[#4f517d] hover:bg-[#4f517d]/70 transition-colors duration-300 w-40 h-12 rounded-md p-0.25 flex ml-40 mt-8'>
                                <button className='m-auto text-white font-bold' onClick={() => navigate("/add/product")}>ADD PRODUCT</button>
                        </button>
                    </div>
                )
            }

            



            
                <div className='mx-16 w-full h-full grid grid-cols-3 px-4 pt-2'>
                    {
                        goodProducts.map((prod) => (
                            <div className='m-8 bg-secondary border-2 border-black rounded-md grid grid-rows-2 gap-4 w-72 h-40 py-6'>
                                <div className='grid grid-cols-3'>
                                    <div className='col-span-2 '>
                                        <div className='bg-primary rounded-md w-46 h-10 ml-4 mr-6 flex'>
                                            <p className='m-auto text-white font-bold'>{prod.name}</p>
                                        </div>
                                    </div>
                                    <div className={`${prod.quantity <= 10 ? 'bg-[#b45f5f]' : 'bg-[#5fb49c]'} w-10 h-10 rounded-md p-0.25 flex ml-8`}>
                                        <p className='m-auto text-white font-bold'>{prod.quantity}</p>
                                        {/* TO DO adaugat culoare rosie pe val mica */}
                                    </div>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <button className='bg-[#4f517d] hover:bg-[#4f517d]/70 transition-colors duration-300 w-24 h-10 rounded-md p-0.25 flex ml-4'>
                                        <button className='m-auto text-white font-bold' onClick={() => navigate('/product', {state: prod})}>PROSPECT</button>
                                    </button>
                                    <button className='bg-[#4f517d] hover:bg-[#4f517d]/70 transition-colors duration-300 w-10 h-10 rounded-md p-0.25 flex ml-14'>
                                        <Icon className='m-auto' icon="bi:heart-fill" color="white" height={"24"} />
                                    </button>
                                    <div className='bg-primary w-12 h-10 rounded-md p-0.25 flex ml-7'>
                                        <p className='m-auto text-white font-bold'>{prod.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Products