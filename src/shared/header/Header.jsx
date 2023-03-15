import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import avatarImg from "../../assets/avatar.jpg";
import { logout } from '../../redux/auth/AuthReducer';
import ModalConfirm from '../modal_confirm/ModalConfirm';

const Header = () => {
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);
    const { imgUrl, name } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutAccount = () => {
        dispatch(logout());
        navigate("/");
    };

    const handleOpenDialogConfirm = () => {
        handleClose();
        setIsOpenConfirm(true);
    }

    const navigateInfoDetail = () => {
        handleClose();
        navigate("/info-detail");
    }

    return (
        <div className='flex justify-between items-center h-10 shadow-sm hover:cursor-pointer'>
            <div className='text-xl text-primary font-bold pl-5'>Internship Management System</div>
            <div className='flex px-5' onClick={handleClick}>
                <div>
                    <img src={imgUrl} alt="Avatar" width={30} height={30} className="rounded-full" />
                </div>
                <span className='pl-2'>{name}</span>
                <div><MdOutlineExpandMore size={30} /></div>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={navigateInfoDetail} className='w-44'>My account</MenuItem>
                <MenuItem onClick={navigateInfoDetail} className='w-44'>Change password</MenuItem>
                <MenuItem onClick={handleOpenDialogConfirm} className='w-44'>Logout</MenuItem>
            </Menu>
            <ModalConfirm
                isOpen={isOpenConfirm}
                content="Do you want to sign out?"
                textConfirm="Logout"
                handleClose={() => setIsOpenConfirm(false)}
                handleConfirm={logoutAccount}
            />
        </div>
    )
}

export default Header