import React from 'react';
import { MdAccountBox, MdCalendarToday, MdFindInPage, MdLocationCity, MdMoveToInbox, MdOutlineInsertChartOutlined, MdOutlineMapsHomeWork, MdSchool } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./Sidebar.scss";

const Sidebar = ({ isShowMenu }) => {
    const { role } = useSelector((state) => state.auth);
    return (
        <>
            <div className='h-full w-full overflow-hidden'>
                <div className={isShowMenu ? 'mt-8 list-sidebar' : 'mt-8 list-sidebar-hidden'}>
                    {
                        role === "MANAGER" && <>
                            <NavLink to={'/teacher'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdAccountBox size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Quan ly giao vien</span>
                            </NavLink>
                            <NavLink to={'/list-student'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdSchool size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Quan ly sinh vien</span>
                            </NavLink>
                            <NavLink to={'/internship'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdLocationCity size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Quan ly thuc tap</span>
                            </NavLink>
                            <NavLink to={'/statistical'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdOutlineInsertChartOutlined size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Thong ke</span>
                            </NavLink>
                        </>
                    }
                    {
                        role === "STUDENT" && <>
                            <NavLink to={'/student/internship'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdOutlineMapsHomeWork size={30} />
                                <span className='pl-5 text-xl sidebar-text whitespace-nowrap'>Manager internship</span>
                            </NavLink>
                            <NavLink to={'/student/attendance'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdCalendarToday size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Attendace</span>
                            </NavLink>
                            <NavLink to={'/student/report'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdMoveToInbox size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Submit Report</span>
                            </NavLink>
                            <NavLink to={'/student/result'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdFindInPage size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Check Result</span>
                            </NavLink>
                        </>
                    }
                    {
                        role === "TEACHER" && <>
                            <NavLink to={'/teacher'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                                <MdAccountBox size={30} />
                                <span className='pl-5 text-xl sidebar-text'>Quan ly sinh vien</span>
                            </NavLink>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Sidebar