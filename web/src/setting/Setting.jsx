import Cookies from "universal-cookie";

export const urlApi = () => {
    const debug = true;

    if(debug){
        return 'http://localhost:8000'
    }else{
        return 'https://www.knsw-api.com';
    }
};

const cookies = new Cookies();

export const clearCookies = () => {
    cookies.remove("user");
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("avatar");
    cookies.remove("businessId");
    cookies.remove("expanded");
    window.location.href = "/signin";
};
