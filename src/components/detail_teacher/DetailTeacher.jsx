import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { MdDeleteForever, MdEdit, MdOutlineMoreHoriz } from 'react-icons/md';
// import { useParams } from 'react-router-dom';
import avatarSrc from "../../assets/avatar.webp";
import ModalConfirm from '../../shared/modal_confirm/ModalConfirm';
import FormTeacher from '../from/form-teacher/FormTeacher';

const DetailTeacher = () => {
    const [isOpenFormTeacher, setIsOpenFormTeacher] = useState(false);
    const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);

    const handleClickOpenUpdateTeacher = (isOpen) => {
        setIsOpenFormTeacher(isOpen);
        handleClose();
    }

    const handleClickToggleModalConfirmDelete = (isOpen) => {
        setIsOpenConfirmDelete(isOpen);
        handleClose();
    }

    // const {id} = useParams();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteStudent = () => {
        console.log("Delete");
    }

    return (
        <div className='w-full h-full p-5 overflow-hidden'>
            <div className="w-full h-full flex flex-col bg-white rounded shadow overflow-hidden">
                <div className='flex bg-gray-700 justify-between shadow-md items-center shadow-gray-200 pr-4'>
                    <h2 className='text-white font-bold text-3xl pb-1 pl-5 uppercase'>DETAIL TEACHER</h2>
                    <MdOutlineMoreHoriz onClick={handleClick} size={25} className='text-gray-50 hover:cursor-pointer hover:bg-gray-600 rounded-full' />
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleClickOpenUpdateTeacher(true)}>
                            <div className='flex'><MdEdit size={25} className='text-primary' /> <div className='px-4'>Update Info</div></div>
                        </MenuItem>
                        <MenuItem onClick={() => handleClickToggleModalConfirmDelete(true)}>
                            <div className='flex'><MdDeleteForever size={25} className='text-red-500' /> <div className='px-4'>Delete</div></div>
                        </MenuItem>
                    </Menu>
                </div>
                <div className="h-full flex pt-4 pb-8 overflow-hidden">
                    <div className='w-1/3 h-full pl-20'>
                        <img src={avatarSrc} alt="Avatar Account" className='w-full h-full' />
                    </div>
                    <div className='w-2/3 h-full pl-5 pr-5 overflow-auto'>
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
                                <div className='w-28 font-bold'>Course:</div>
                                <p>K43</p>
                            </div>
                            <div className='flex text-lg py-2'>
                                <div className='w-28 font-bold'>Deparment:</div>
                                <p>IT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormTeacher isOpen={isOpenFormTeacher} handleClose={() => handleClickOpenUpdateTeacher(false)} />
            <ModalConfirm
                isOpen={isOpenConfirmDelete}
                content="Do you want to delete this student?"
                handleConfirm={deleteStudent}
                handleClose={() => handleClickToggleModalConfirmDelete(false)} />
        </div>
    )
}

export default DetailTeacher