import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import DetailStudent from '../components/detail_student/DetailStudent';
import ForgetPassword from '../components/forget_password/ForgetPassword';
import GlobalNavigation from '../components/global_navigation/GlobalNavigation';
import Home from '../components/home/Home';
import InfoDetail from '../components/info_detail/InfoDetail';
import ListStudent from '../components/list_student/ListStudent';
import ListTeacher from '../components/list_teacher/ListTeacher';
import Login from '../components/login/Login';
import PageNotFound from '../components/page_not_found/PageNotFound';

function RouterComponent() {
    const { token } = useSelector((state) => state.auth);

    const renderRoutePublic = () => (
        <>
            <Route path='/' element={<Login />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
        </>
    )

    const renderRoutePrivite = () => {
        return (
            <Route path='/' element={<GlobalNavigation />}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/info-detail' element={<InfoDetail />}></Route>
                <Route path='/list-student' element={<ListStudent />}></Route>
                <Route path='/list-student/detail/:id' element={<DetailStudent />}></Route>
                <Route path='/teacher' element={<ListTeacher />}></Route>
            </Route>
        )
    }

    return (
        <Router>
            <Routes>
                {token ? renderRoutePrivite() : renderRoutePublic()}
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </Router>
    )
}

export default RouterComponent