import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import avatar from "../../../assets/avatar.webp";
import { fileToBase64 } from "../../../untils/Ultil";
import * as yup from 'yup';

const schema = yup.object({

}).required();

const FormStudent = ({ isOpen, handleClose }) => {
    useEffect(() => {
        if(isOpen=== false) {
            setSrcAvatar(avatar);
        }
    }, [isOpen])
    const [srcAvatar, setSrcAvatar] = useState(avatar);
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            birthday: "2000-01-01",
            gender: "male"
        },
        resolver: yupResolver(schema)
    });

    const chooseImage = () => {
        document.getElementById('from-student-input-file').click();
    }

    const handleChangeAvatar = async (e) => {
        const base = await fileToBase64(e.target.files[0]);
        setSrcAvatar('data:image/png;base64, '+ base);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="md">
            <div className='w-full flex flex-col overflow-auto'>
                <h2 className='modal-from-header mt-5'>Add Student</h2>
                <div className='overflow-auto h-full'>
                    <form className='w-full p-6'>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Full name:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.username?.message}</p>
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Email:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='pb-4 w-1/2'>
                                <Controller
                                    control={control}
                                    name="birthday"
                                    render={({ field }) => (
                                        <TextField size='small' className='w-full' type="date" label="Birthday:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.password?.message}</p>
                            </div>
                            <div className='pb-4 w-1/2'>
                                <Controller
                                    control={control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <TextField size='small' className='w-full' label="Phone Number:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.password?.message}</p>
                            </div>
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="address"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Address:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='pb-4'>
                            <Controller
                                control={control}
                                name="gender"
                                render={({ field }) => (
                                    <FormControl size='small'>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            {...field}
                                        >
                                            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                            <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="">Avatar:</label>
                            <input type="file" id='from-student-input-file' className='hidden' accept="image/png, image/gif, image/jpeg" onChange={handleChangeAvatar} />
                            <img src={srcAvatar} onClick={chooseImage} alt="Avatar Student" width={200} height={300} />
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="class"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Class name:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='flex gap-4'>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="course"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Course:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="deparment"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' label="Deparment:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center my-6 gap-5'>
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-primary w-24">Add</button>
                    <button onClick={handleClose} className="btn btn-secondary w-24">Close</button>
                </div>
            </div>
        </Dialog>
    )
}

export default FormStudent;