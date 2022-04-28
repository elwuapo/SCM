export const baseApi = () => {
    const debug = true;

    if(debug){
        return 'http://localhost:8000/'
    }else{
        return 'https://www.knsw-api.com/';
    }
};
