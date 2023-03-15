import React from 'react';
import { MdAccountBox, MdLocationCity, MdOutlineInsertChartOutlined, MdSchool } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import "./Sidebar.scss";

const Sidebar = ({ isShowMenu }) => {
    return (
        <>
            <div className='h-full w-full overflow-hidden'>
                {/* <div className={`flex flex-col items-center text-white mt-10 h-40 ${!isShowMenu ? 'w-0' : 'w-full'} overflow-hidden`}>
                    <MdOutlineAccountCircle size={120} className='rounded-[50%]' />
                    <h4 className='text-center text-xl mb-3'>Dao Van Nhan</h4>
                    <button className='border border-white px-3 py-1 hover:bg-white hover:text-primary'>SIGN OUT</button>
                </div> */}
                <div className={isShowMenu ? 'mt-8 list-sidebar' : 'mt-8 list-sidebar-hidden'}>
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
                    <NavLink to={'/dashboard'} className="flex items-center text-white py-4 hover:bg-blue-400 pl-5 pr-2">
                        <MdOutlineInsertChartOutlined size={30} />
                        <span className='pl-5 text-xl sidebar-text'>Thong ke</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar