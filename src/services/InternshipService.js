import https from "../https/httpHandle";
import { ConstanstAPI } from "../constant/APIContanst";

const InternshipService = {
    getListInternship: async () => {
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
    getInfoInternship: async (id) => {
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
    createInternship: async (data) => {
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
    updateInternship: async (id, data) => {
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
    deleteInternship: async (id) => {
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

export default InternshipService;