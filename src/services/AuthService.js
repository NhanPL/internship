import https from "../https/httpHandle";
import * as APIContants from "../constant/APIContanst";

const AuthService = {
    login: async (username, password) => {
        try {
            const payload = { username, password };
            const result = await https({
                method: APIContants.LOGIN.method,
                url: APIContants.LOGIN.url,
                data: payload
            });
            return { status: 200, data: result };
        } catch (err) {
            return { status: err.response.status, data: err.response.data?.message }
        }
    }
}

export default AuthService;