import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import "./ForgetPassword.scss";
import srcImg from "../../assets/img-login.avif";

const schema = yup.object({
    username: yup
        .string()
        .required('Please enter a MSSV!'),
}).required();

const ForgetPassword = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='w-full h-screen relative forget-password-container'>
            {/* <div className='forget-password-content box-center opacity-80 w-[600px]'>
                <h2 className='text-4xl text-center font-bold text-primary uppercase pb-5'>Forget Password</h2>
                <p className='text-center text-lg'>Vui lòng nhập MSSV cần thay đổi mật khẩu!</p>
                <form className='p-7' onSubmit={handleSubmit(onSubmit)}>
                    <div className='pb-4'>
                        <Controller
                            control={control}
                            name="username"
                            render={({ field }) => (
                                <TextField className='w-full' label="MSSV:" variant="standard" {...field} />
                            )}
                        />
                        <p className='text-red-600'>{errors.username?.message}</p>
                    </div>
                    <div className="text-right">
                        <Link to={'/'} className="text-primary">I have a account!</Link>
                    </div>
                    <div className='text-center mt-8'>
                        <button type='submit' className="btn btn-primary w-72">Sumbit</button>
                    </div>
                </form>
            </div> */}
            <div className="login-content box-center grid grid-cols-2 overflow-hidden">
                <div className=''>
                    <img src={srcImg} alt="" />
                </div>
                <div className='flex flex-col justify-center px-4'>
                    <h2 className='text-3xl text-center font-bold text-primary uppercase pb-5'>Forget Password</h2>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                        <div className='pb-4'>
                            <Controller
                                control={control}
                                name="username"
                                render={({ field }) => (
                                    <TextField className='w-full' label="MSSV:" variant="standard" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.username?.message}</p>
                        </div>
                        <div className="text-right">
                            <Link to={'/'} className="text-primary">I have a account!</Link>
                        </div>
                        <div className='text-center mt-8'>
                            <button type='submit' className="btn btn-primary w-full">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;