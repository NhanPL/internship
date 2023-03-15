import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({

}).required();

const FormEvaluate = ({ isOpen, handleClose }) => {
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
                <h2 className='modal-from-header mt-5'>UPDATE RESULT</h2>
                <div className='overflow-auto h-full'>
                    <form className='w-full p-6'>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="score"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' type="number" label="Score:" variant="outlined" {...field} />
                                )}
                            />
                        </div>
                        <div className='pb-4 w-full'>
                            <Controller
                                control={control}
                                name="content"
                                render={({ field }) => (
                                    <TextField size='small' className='w-full' type="number" label="Comment:" multiline rows={4} variant="outlined" {...field} />
                                )}
                            />
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

export default FormEvaluate