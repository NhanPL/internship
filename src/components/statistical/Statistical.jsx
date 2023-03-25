import { Pagination, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { countElementInPage } from '../../constant/Constants';
import StudentService from '../../services/StudentService';
import Loading from '../../shared/loading/Loading';
import ModalAlert from '../../shared/modal-alert/ModalAlert';
import TableGeneral from '../../shared/table_general/TableGeneral';
import {SiMicrosoftexcel} from "react-icons/si";

const Statistical = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState({ name: "", level: "", specialize: "" });
    const [students, setStudents] = useState([]);
    const [objAlert, setObjAlert] = useState({ isOpen: false, message: '', type: null });

    const headers = ["MSSV", "Full Name", "Email", "Gender", "Birthday", "Phone", "Teacher", "Internship Name", "Start day", "End day", "Attendance", "Score", "Report"];

    const renderDataTable = () => {
        return students.slice((page - 1) * countElementInPage, countElementInPage * page).map(student => {
            return {
                mssv: <span className='font-bold'>SV{student.id}</span>,
                name: student.fullname,
                email: student.email,
                gender: student.sex === 'male' ? <span className='font-bold text-primary'>{student.sex}</span> : <span className='font-bold text-purple-700'>{student.sex}</span>,
                dob: student.dob,
                phone: student.phone,
                teacher: student.teacherName,
                nameInternShip: student.nameInternShip,
                startDay: student.startDay,
                endDay: student.endDay,
                attendance: student.attendance?.length,
                score: student.score,
                report: student.report,
            }
        })
    }

    const handleChangeValueSearch = (name, value) => {
        setSearch((val) => ({
            ...val,
            [name]: value.target.value
        }));
    }

    const handleChangePanigation = (e, val) => {
        setPage(val);
    };

    const handleSearchListTeacher = async () => {

    }

    const handleCloseAlert = () => {
        setObjAlert({ isOpen: false, message: '' });
    };

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const res = await StudentService.getStatistical();
                const response = res.data.map((data) => {
                    return {
                        ...data.teacher,
                        ...data.internship,
                        addressInternship: data.internship?.address,
                        score: data.score === -1 ? '' : data.score,
                        attendance: data.attendance,
                        ...data.student,
                    }
                })
                setStudents(response);
                console.log(response)
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [])

    return (
        <div className='w-full h-full p-5 overflow-hidden'>
            <div className="w-full h-full bg-white rounded shadow overflow-hidden">
                <div className='flex bg-gray-700 justify-between shadow-md items-center shadow-gray-200 pr-4'>
                    <h2 className='text-white font-bold text-3xl pb-1 pl-5 uppercase'>Statistical</h2>

                </div>
                <div className="h-full w-full body-content overflow-hidden">
                    <h4 className='mx-10 border-b border-primary font-bold text-primary text-xl mt-2'>Filter:</h4>
                    <div className='flex gap-5 mt-2 mx-10 mb-5'>
                        <TextField className='w-full' label="Name:" onChange={(val) => handleChangeValueSearch("name", val)} variant="outlined" />
                        <TextField className='w-full' label="Level:" onChange={(val) => handleChangeValueSearch("level", val)} variant="outlined" />
                        <TextField className='w-full' label="Specialize:" onChange={(val) => handleChangeValueSearch("specialize", val)} variant="outlined" />
                        <button className='btn btn-primary w-[420px] text-xl' onClick={handleSearchListTeacher}>Search</button>
                    </div>
                    <div className='px-10 w-full h-[430px] overflow-hidden'>
                        <TableGeneral headers={headers} body={renderDataTable()} />
                    </div>
                    <div className='mt-2 px-10 flex justify-between'>
                        <button className='btn btn-primary flex items-center'><SiMicrosoftexcel color='white' size={25} className='mr-2' />Export file</button>
                        <Pagination onChange={handleChangePanigation} page={page} count={Math.ceil(students.length / countElementInPage)} color="primary" showFirstButton showLastButton />
                        </div>
                </div>
            </div>
            {objAlert.isOpen && <ModalAlert {...objAlert} handleClose={handleCloseAlert} />}
            {isLoading && <Loading />}
        </div>
    )
}

export default Statistical