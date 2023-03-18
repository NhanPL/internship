import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Dialog, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({

}).required();

const FormChangePassword = ({ isOpen, handleClose }) => {
    const [showPassword, setShowPassword] = useState({
        password: false,
        newPassword: false,
        renewPassword: false,
    });
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            password: "",
            newPassword: "",
            renewPassword: "",
        },
        resolver: yupResolver(schema)
    });

    const handleClickShowPassword = (type) => {
        switch (type) {
            case "password":
                setShowPassword((show) => ({ ...show, password: !showPassword.password }));
                break;
            case "newPassword":
                setShowPassword((show) => ({ ...show, newPassword: !showPassword.newPassword }));
                break;
            default:
                setShowPassword((show) => ({ ...show, renewPassword: !showPassword.renewPassword }));
                break;
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm">
            <div className='w-full flex flex-col overflow-auto'>
                <h2 className='modal-from-header mt-5'>Change Password</h2>
                <div className='overflow-auto h-full'>
                    <form className='w-full p-6'>
                        <div className='pb-4'>
                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <FormControl className="w-full pb-4" variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">Old Password:</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            {...field}
                                            type={showPassword.password ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={()=>handleClickShowPassword("password")}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword.password ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='pb-4'>
                            <Controller
                                control={control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormControl className="w-full pb-4" variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">New Password:</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            {...field}
                                            type={showPassword.newPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={()=>handleClickShowPassword("newPassword")}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='pb-4'>
                            <Controller
                                control={control}
                                name="renewPassword"
                                render={({ field }) => (
                                    <FormControl className="w-full pb-4" variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">ReNew Password:</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            {...field}
                                            type={showPassword.renewPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={()=>handleClickShowPassword("renewPassword")}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword.renewPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>

                    </form>
                </div>
                <div className='flex justify-center my-6 gap-5'>
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-primary w-24">Change</button>
                    <button onClick={handleClose} className="btn btn-secondary w-24">Close</button>
                </div>
            </div>
        </Dialog>
    )
}

export default FormChangePassword;