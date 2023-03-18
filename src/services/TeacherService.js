import https from "../https/httpHandle";
import { ConstanstAPI } from "../constant/APIContanst";

const TeacherService = {
    getListTeacher: async () => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_TEACHER.method,
                url: ConstanstAPI.INFO_TEACHER.url,
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    getInfoTeacher: async (id) => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_TEACHER.method,
                url: ConstanstAPI.INFO_TEACHER.url + '/' + id,
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    createTeacher: async (data) => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_TEACHER.method,
                url: ConstanstAPI.INFO_TEACHER.url,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    updateTeacher: async (id, data) => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_TEACHER.method,
                url: ConstanstAPI.INFO_TEACHER.url + '/' + id,
                data: data
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
    deleteTeacher: async (id) => {
        try {
            const result = await https({
                method: ConstanstAPI.INFO_TEACHER.method,
                url: ConstanstAPI.INFO_TEACHER.url + '/' + id,
            });
            return result;
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    },
}

export default TeacherService;