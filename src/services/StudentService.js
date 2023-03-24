import https from "../https/httpHandle";
import { ConstanstAPI } from "../constant/APIContanst";

const StudentService = {
    getListStudent: async () => {
        try {
            const result = await https({
                method: ConstanstAPI.GET_LIST_STUDENT.method,
                url: ConstanstAPI.GET_LIST_STUDENT.url,
            });
            return result;
        } catch (err) {
            console.log(err.toJSON())
            return { status: err.response?.status, data: err.response?.data?.message }
        }
    },
    getSearchListStudent: async (data) => {
        try {
            const result = await https({
                method: ConstanstAPI.GET_LIST_STUDENT_SEARCH.method,
                url: ConstanstAPI.GET_LIST_STUDENT_SEARCH.url,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    getInfoStudent: async (id) => {
        try {
            const result = await https({
                method: ConstanstAPI.GET_INFO_STUDENT.method,
                url: ConstanstAPI.GET_INFO_STUDENT.url + '/' + id,
                data: {}
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    getEvaluateStudent: async (id) => {
        try {
            const result = await https({
                method: ConstanstAPI.GET_EVALUATE_STUDENT.method,
                url: ConstanstAPI.GET_EVALUATE_STUDENT.url + '/' + id,
                data: {}
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    createStudent: async (data) => {
        try {
            const result = await https({
                method: ConstanstAPI.INSERT_STUDENT.method,
                url: ConstanstAPI.INSERT_STUDENT.url,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    // createInternshipStudent: async (idStudent, idInternship) => {
    //     try {
    //         const result = await https({
    //             method: ConstanstAPI.INFO_STUDENT.method,
    //             url: ConstanstAPI.INFO_STUDENT.url + '/' + idStudent,
    //             data: {
    //                 idStudent,
    //                 idInternship
    //             }
    //         });
    //         return result;
    //     } catch (err) {
    //         return { status: err.response.status, data: err.response.data?.message }
    //     }
    // },
    createEvaluateStudent: async(data) => {
        try {
            const result = await https({
                method: ConstanstAPI.CREATE_EVALUATE_STUDENT.method,
                url: ConstanstAPI.CREATE_EVALUATE_STUDENT.url,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    updateStudent: async (id, data) => {
        try {
            const result = await https({
                method: ConstanstAPI.UPDATE_STUDENT.method,
                url: ConstanstAPI.UPDATE_STUDENT.url + '/' + id,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    updateInternshipStudent: async (idStudent, idInternship) => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_STUDENT.method,
                url: ConstanstAPI.INFO_STUDENT.url + '/' + idStudent,
                data: {
                    idStudent,
                    idInternship
                }
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    updateEvaluateStudent: async (data) => {
        try {
            const result = await https({
                method: ConstanstAPI.UPDATE_EVALUATE_STUDENT.method,
                url: ConstanstAPI.UPDATE_EVALUATE_STUDENT.url,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    deleteStudent: async (id) => {
        try {
            const result = await https({
                method: ConstanstAPI.DELETE_STUDENT.method,
                url: ConstanstAPI.DELETE_STUDENT.url + '/' + id,
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
}

export default StudentService;