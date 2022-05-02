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
    cookies.remove("fullName");
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("avatar");
    cookies.remove("businessId");
    cookies.remove("expanded");
    window.location.href = "/signin";
};

export const getTime = (date) => {
    const date1 = new Date(date);
    const hours  = date1.getHours();
    const min   = (date1.getMinutes() <10?'0':'') + date1.getMinutes();

    return hours + ":" + min + " Hrs";
}

export const changeDateFormat = (date) => {
    const date1 = new Date(date);
    const year  = date1.getFullYear();
    const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const day   = date1.getUTCDate();

    return month[date1.getMonth()] + " " + day + ", " + year;
};

export const changeDateFormat2 = (date) => {
    const date1    = new Date(date);
    const year     = date1.getFullYear();
    const month    = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day      = date1.getUTCDate();

    return weekdays[date1.getDay()] + ", " + month[date1.getMonth()] + " " + day + ", " + year;
};