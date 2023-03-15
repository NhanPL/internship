import React from 'react';
import avatarSrc from "../../assets/avatar.jpg";

const InfoDetail = () => {
    return (
        <div className='w-full h-full p-5'>
            <div className="w-full h-full bg-white rounded shadow overflow-hidden">
                <h2 className='text-white font-bold text-3xl bg-gray-700 pb-1 pl-5 shadow-md shadow-gray-200 uppercase'>Info Detail</h2>
                <div className="h-full body-content flex">
                    <div className='w-1/3 h-full pt-8 pl-20'>
                        <img src={avatarSrc} alt="Avatar Account" className='w-[425px] h-[525px]' />
                    </div>
                    <div className='w-2/3 h-full pt-8 pl-5 pr-5'>
                        <div className='bg-gray-700 text-center text-white font-bold text-xl mb-2'>Info</div>
                        <div className='grid grid-cols-2 mb-4 px-4'>
                            <div className='flex text-lg col-span-2 py-2'>
                                <div className='w-28 font-bold'>ID:</div>
                                <p>A000001</p>
                            </div>
                            <div className='flex text-lg col-span-2 py-2'>
                                <div className='w-28 font-bold'>Full Name:</div>
                                <p>Dao Van Nhan</p>
                            </div>
                            <div className='flex text-lg col-span-2 py-2'>
                                <div className='w-28 font-bold'>Gmail:</div>
                                <p>test123@gmail.com</p>
                            </div>
                            <div className='flex text-lg col-span-2 py-2'>
                                <div className='w-28 font-bold'>Gender:</div>
                                <p>Male</p>
                            </div>
                            <div className='flex text-lg py-2'>
                                <div className='w-28 font-bold'>Birth Day:</div>
                                <p>20/02/1999</p>
                            </div>
                            <div className='flex text-lg py-2'>
                                <div className='w-28 font-bold'>Phone:</div>
                                <p>0355884887</p>
                            </div>
                            <div className='flex text-lg col-span-2 py-2'>
                                <div className='w-28 font-bold'>Address:</div>
                                <p>28 - Lê Lợi - Ninh Kiều - Cần Thơ</p>
                            </div>
                        </div>
                        <div className='bg-gray-700 text-center text-white font-bold text-xl mb-2'>Class</div>
                        <div className='grid grid-cols-2 mb-4 px-4'>
                            <div className='flex text-lg py-2'>
                                <div className='w-28 font-bold'>Class:</div>
                                <p>DI017V2</p>
                            </div>
                            <div className='flex text-lg py-2'>
                                <div className='w-28 font-bold'>School year:</div>
                                <p>2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDetail