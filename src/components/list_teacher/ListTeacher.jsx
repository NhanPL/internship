import { Menu, MenuItem, Pagination, TextField } from '@mui/material';
import React, { useState } from 'react';
import { MdAdd, MdDeleteForever, MdEdit, MdOutlineMoreHoriz, MdOutlineRemoveRedEye } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ModalConfirm from '../../shared/modal_confirm/ModalConfirm';
import TableGeneral from '../../shared/table_general/TableGeneral';
import FormStudent from '../from/form-student/FormStudent';
import './ListTeacher.scss';

const ListTeacher = () => {
    const [page, setPage] = useState(1);
    const [idStudent, setIdStudent] = useState(null);
    const [isOpenModalConfirmDelete, setIsOpenModalConfirmDelete] = useState(false);
    const [isOpenModalAddStudent, setIsOpenModalAddStudent] = useState(false);

    const navigate = useNavigate();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, id) => {
        setIdStudent(id);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const showModalAddStudent = () => {
        handleClose();
        setIsOpenModalAddStudent(true);
    }

    const closeModalAddStudent = () => {
        setIdStudent(null);
        setIsOpenModalAddStudent(false);
    }

    const handleConfirmDeleteStudent = () => {
        handleClose();
        setIsOpenModalConfirmDelete(true);
    }

    const handleViewDetailStudent = () => {
        if(idStudent){
            navigate("/list-student/detail/"+idStudent);
        }
    }

    const handleCloseModalConfirmDelete = () => {
        setIsOpenModalConfirmDelete(false);
    }

    const deleteStudent = () => {
        console.log(idStudent);
    }

    const headers = ["MSSV", "Full Name", "Email", "Gender", "Phone Number",  "Action"];
    const students = [
        { id: 1, mssv: "A000001", name: "Dao Van Nhan Van Nhan", email: "nhan123@gmail.com", gender: "Male", phone: "03992777217", class: "DI17V7A2", schoolYear: "K38", startDay: "2023-02-01", endDay: "2023-05-30", status: "" },
    ];

    const renderDataTable = () => {
        return students.map(student => {
            return {
                mssv: <span className='font-bold'>{student.mssv}</span>,
                name: student.name,
                email: student.email,
                gender: student.gender === 'Male' ? <span className='font-bold text-primary'>{student.gender}</span> : <span className='font-bold text-purple-700'>{student.gender}</span>,
                phone: student.phone,
                class: student.class,
                schoolYear: student.schoolYear,
                startDay: student.startDay,
                endDay: student.endDay,
                status: (
                    <div className='flex justify-center'>
                        <MdOutlineMoreHoriz size={25} className='hover:cursor-pointer hover:bg-gray-400 rounded-full' onClick={(e) => handleClick(e, student.id)} />
                    </div>
                ),
            }
        })
    }

    const handleChangePanigation = (e, val) => {
        setPage(val);
    };

    return (
        <div className='w-full h-full p-5 overflow-hidden'>
            <div className="w-full h-full bg-white rounded shadow overflow-hidden">
                <div className='flex bg-gray-700 justify-between shadow-md items-center shadow-gray-200 pr-4'>
                    <h2 className='text-white font-bold text-3xl pb-1 pl-5 uppercase'>List Teacher</h2>
                    <MdAdd onClick={showModalAddStudent} size={25} className='text-white hover:cursor-pointer hover:bg-gray-200 rounded-full' />
                </div>
                <div className="h-full w-full body-content overflow-hidden">
                    <h4 className='mx-10 border-b border-primary font-bold text-primary text-xl mt-2'>Filter:</h4>
                    <div className='flex gap-5 mt-2 mx-10 mb-5'>
                        <TextField className='w-full' label="Name:" variant="outlined" />
                        <TextField className='w-full' label="Class:" variant="outlined" />
                        <TextField className='w-full' label="School year:" variant="outlined" />
                        <TextField className='w-full' label=":" variant="outlined" />
                    </div>
                    <div className='px-10 w-full h-[430px] overflow-hidden'>
                        <TableGeneral headers={headers} body={renderDataTable()} />
                    </div>
                    <div className='mt-2 px-10 flex justify-end'><Pagination onChange={handleChangePanigation} page={page} count={2} color="primary" showFirstButton showLastButton /></div>
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleViewDetailStudent}>
                    <div className='flex'><MdOutlineRemoveRedEye size={25} className='text-primary' /> <div className='w-20 px-4'>Detail</div></div>
                </MenuItem>
                <MenuItem onClick={showModalAddStudent}>
                    <div className='flex'><MdEdit size={25} className='text-yellow-700' /> <div className='w-20 px-4'>Update</div></div>
                </MenuItem>
                <MenuItem onClick={handleConfirmDeleteStudent}>
                    <div className='flex'><MdDeleteForever size={25} className='text-red-700' /> <div className='w-20 px-4'>Delete</div></div>
                </MenuItem>
            </Menu>
            <ModalConfirm
                isOpen={isOpenModalConfirmDelete}
                content="Do you want to delete this student?"
                handleConfirm={deleteStudent}
                handleClose={handleCloseModalConfirmDelete} />
            <FormStudent
                isOpen={isOpenModalAddStudent}
                idStudent={idStudent}
                handleClose={closeModalAddStudent}
            />
        </div>
    )
}

export default ListTeacher