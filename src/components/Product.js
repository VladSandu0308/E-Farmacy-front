import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Product = () => {
    const {state} = useLocation();
    console.log(state)
    const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-white grid-grid-rows-9 z-0'>
        <div className='bg-secondary flex flex-row sticky top-0'>
            <Navbar current={"Products"} prelogin={false}/>
        </div>

        <div className='flex flex-col row-span-8'>
            <div className='mx-auto mt-4 w-3/4 h-16 bg-primary flex'>
                <h1 className='my-auto ml-4 text-white font-semibold capitalize text-xl'>{state.name}</h1>
            </div>
            <div className='mx-auto w-3/4 h-full mb-2 bg-secondary px-4 pt-4 flex flex-col'>
                <div className='flex flex-row gap-4 mb-6'>
                    {
                        state?.allergies.map(al => (
                            
                            <div className='w-20 flex bg-[#b45f5f] h-8 rounded-md shadow-lg'>
                                <p className='text-white text-sm capitalize font-semibold m-auto'>{al.name}</p>
                            </div>
                        )) 
                    }
                </div>

                <div className='w-44 flex bg-[#5fb49c] h-8 rounded-md shadow-lg mb-3'>
                    <p className='text-white text-sm capitalize font-semibold m-auto'>Administration method</p>
                </div>

                <div className='border-2 border-black w-full h-32 p-4 rounded-xl mb-6'>
                    <p className='text-black text-sm'>{state.administrationMethod}</p>
                </div>

                <div className='w-44 flex bg-[#5fb49c] h-8 rounded-md shadow-lg mb-3'>
                    <p className='text-white text-sm capitalize font-semibold m-auto'>Ingredients</p>
                </div>

                <div className='border-2 border-black w-full h-32 p-2 rounded-xl mb-6'>
                    <p className='text-black text-sm'>{state.ingredients}</p>
                </div>

                <div className='w-44 flex bg-[#5fb49c] h-8 rounded-md shadow-lg mb-3'>
                    <p className='text-white text-sm capitalize font-semibold m-auto'>Doctor's advice</p>
                </div>

                <div className='border-2 border-black w-full h-32 p-4 rounded-xl mb-6'>
                    <p className='text-black text-sm'>{state.advice}</p>
                </div>
                

                
            </div>
        </div>
    </div>
  )
}

export default Product