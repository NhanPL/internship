export const ConstanstAPI = {
    LOGIN: {
        url: "http://localhost:8080/auth/login",
        method: "POST"
    },
    CHANGE_PASSWORD: {
        url: "http://localhost:8080/auth/password",
        method: "POST"
    },
    GET_LIST_STUDENT: {
        url: "http://localhost:8080/manager/liststudent",
        method: "GET"
    },
    GET_INFO_STUDENT: {
        url: "http://localhost:8080/student",
        method: "GET"
    },
    INSERT_STUDENT: {
        url: "http://localhost:8080/manager/student",
        method: "POST"
    },
    UPDATE_STUDENT: {
        url: "http://localhost:8080/student/update",
        method: "PUT"
    },
    GET_LIST_INTERNSHIP: {
        url: "http://localhost:8080/student/internship/list",
        method: "GET"
    },
}

