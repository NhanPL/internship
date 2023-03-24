export const ConstanstAPI = {
    LOGIN: {
        url: "http://localhost:8080/auth/login",
        method: "POST"
    },
    CHANGE_PASSWORD: {
        url: "http://localhost:8080/auth/password",
        method: "POST"
    },
    INFO_ACCOUNT_STUDENT: {
        url: "http://localhost:8080/student",
        method: "GET"
    },
    INFO_ACCOUNT_TEACHER: {
        url: "http://localhost:8080/teacher",
        method: "GET"
    },
    GET_LIST_STUDENT: {
        url: "http://localhost:8080/manager/liststudent",
        method: "GET"
    },
    GET_LIST_STUDENT_SEARCH: {
        url: "http://localhost:8080/manager/student/search",
        method: "POST"
    },
    GET_INFO_STUDENT: {
        url: "http://localhost:8080/student/infor",
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
    DELETE_STUDENT: {
        url: "http://localhost:8080/manager/student",
        method: "DELETE"
    },
    GET_LIST_INTERNSHIP: {
        url: "http://localhost:8080/student/internship/list",
        method: "GET"
    },
    CREATE_INTERNSHIP: {
        url: "http://localhost:8080/manager/intern",
        method: "POST"
    },
    CREATE_INTERNSHIP_STUDENT: {
        url: "http://localhost:8080/student/internshipStudent/create",
        method: "POST"
    },
    UPDATE_INTERNSHIP_STUDENT: {
        url: "http://localhost:8080/student/internshipStudent/update",
        method: "PUT"
    },
    INSERT_INTERNSHIP: {
        url: "http://localhost:8080/manager/intern/deleted",
        method: "DELETE"
    },
    UPDATE_INTERNSHIP: {
        url: "http://localhost:8080/manager/intern/deleted",
        method: "DELETE"
    },
    DELETE_INTERNSHIP: {
        url: "http://localhost:8080/manager/intern/deleted",
        method: "DELETE"
    },
    GET_LIST_TEACHER: {
        url: "http://localhost:8080/manager/listteacher",
        method: "GET"
    },
    INFO_TEACHER: {
        url: "http://localhost:8080/manager/teacher",
        method: "GET"
    },
    INSERT_TEACHER: {
        url: "http://localhost:8080/manager/teacher",
        method: "POST"
    },
    UPDATE_TEACHER: {
        url: "http://localhost:8080/teacher/update",
        method: "PUT"
    },
    DELETE_TEACHER: {
        url: "http://localhost:8080/manager/teacher",
        method: "DELETE"
    },
    GET_INFO_INTERNSHIP_STUDENT: {
        url: "http://localhost:8080/student/internshipStudent",
        method: "GET"
    },
    GET_EVALUATE_STUDENT: {
        url: "http://localhost:8080/student/evaluate",
        method: "GET"
    },
    CREATE_EVALUATE_STUDENT: {
        url: "http://localhost:8080/teacher/evaluate/create",
        method: "POST"
    },
    UPDATE_EVALUATE_STUDENT: {
        url: "http://localhost:8080/teacher/evaluate/update",
        method: "PUT"
    },
}

