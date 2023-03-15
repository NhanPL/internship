import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({

}).required();

const FormStudentIntern = ({ isOpen, handleClose }) => {
    const { handleSubmit, control } = useForm({
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
                <h2 className='modal-from-header mt-5'>UPDATE STUDENT INTERNSHIP</h2>
                <div className='overflow-auto h-full'>
                    <form className='w-full p-6'>
                        <div className='pb-4 w-full'>
                            <TextField size='small' className='w-full' label="Full name:" variant="outlined" value={"Dao Van Nhan"} disabled />
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <FormControl fullWidth size='small'>
                                        <InputLabel id="demo-simple-select-label">Internship</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Internship"
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
                        </div>
                        <div className='font-bold text-xl'>Internship Info:</div>
                        <div className='pb-4 w-full flex flex-wrap border-separate border-2 p-3 shadow-md'>
                            <div className='flex w-1/2 py-2'>
                                <label className='w-40 font-bold'>Corporation name:</label>
                                <p>VNPT Cần Thơ</p>
                            </div>
                            <div className='flex w-1/2 py-2'>
                                <label className='w-40 font-bold'>Course internship:</label>
                                <p>43</p>
                            </div>
                            <div className='flex w-full py-2'>
                                <label className='w-40 font-bold'>Teacher name:</label>
                                <p>Tran Cong An</p>
                            </div>
                            <div className='flex w-1/2 py-2'>
                                <label className='w-40 font-bold'>Start date:</label>
                                <p>2023/11/02</p>
                            </div>
                            <div className='flex w-1/2 py-2'>
                                <label className='w-40 font-bold'>End date:</label>
                                <p>2023/12/02</p>
                            </div>
                            <div className='flex w-full py-2'>
                                <label className='w-40 font-bold'>Address:</label>
                                <p>VNPT Cần Thơ - Xuân Khánh - Ninh Kiều - Cần Thơ</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center my-6 gap-5'>
                    <button onClick={handleSubmit(onSubmit)} className="btn btn-primary w-24">Update</button>
                    <button onClick={handleClose} className="btn btn-secondary w-24">Close</button>
                </div>
            </div>
        </Dialog>
    )
}

export default FormStudentIntern