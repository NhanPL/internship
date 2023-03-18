import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({

}).required();

const FormInternship = ({ isOpen, handleClose }) => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            birthday: "2000-01-01",
            gender: "male"
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="md">
            <div className='w-full flex flex-col overflow-auto'>
                <h2 className='modal-from-header mt-5'>Add Internship</h2>
                <div className='overflow-auto h-full'>
                    <form className='w-full p-6'>
                        <div className='flex gap-4'>
                            <div className='pb-4 w-full'>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <TextField size='small' className='w-full' label="Internship Name:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.username?.message}</p>
                            </div>
                            <div className='pb-4 w-full'>
                                <Controller
                                    control={control}
                                    name="course"
                                    render={({ field }) => (
                                        <TextField size='small' className='w-full' type="number" label="Course:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.username?.message}</p>
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
                        <div className='flex gap-4'>
                            <div className='pb-4 w-1/2'>
                                <Controller
                                    control={control}
                                    name="start_day"
                                    render={({ field }) => (
                                        <TextField size='small' InputLabelProps={{ shrink: true }} className='w-full' type="date" label="Start Day:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.password?.message}</p>
                            </div>
                            <div className='pb-4 w-1/2'>
                                <Controller
                                    control={control}
                                    name="end_day"
                                    render={({ field }) => (
                                        <TextField size='small' InputLabelProps={{ shrink: true }} className='w-full' type="date" label="End Day:" variant="outlined" {...field} />
                                    )}
                                />
                                <p className='text-red-600'>{errors.password?.message}</p>
                            </div>
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="level"
                                render={({ field }) => (
                                    <TextField size='small' multiline rows={4} className='w-full' label="Description:" variant="outlined" {...field} />
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="teacher"
                                render={({ field }) => (
                                    <FormControl fullWidth size='small'>
                                        <InputLabel id="demo-simple-select-label">Teacher:</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Teacher"
                                            value={'1'}
                                            {...field}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <p className='text-red-600'>{errors.password?.message}</p>
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

export default FormInternship;