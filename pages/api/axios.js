import axios from "axios";

const instance = axios.create({
    baseURL: 'http://91.107.160.88:3001/v1'
});
instance.interceptors.request.use(function (config) {
    console.log('a',config)
     if(config.url!==('/user/signup'||'/user/signup/verification'||'/user/login')){
    config.headers['access-token'] = localStorage.getItem("access-token");
    config.headers['Content-Type'] = 'application/json';
 }
//     else if(config.url==='/product'){
//         config.headers['access-token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZlNmNhYzI2NWE4MDhhM2MzYTIwYy' +
//         'IsImlhdCI6MTY5MDU3Mzc4OSwiZXhwIjoxNjk0MTczNzg5fQ.QuJLCN72McA_cbVYE5CFQ4bTkNL3N6ZRESukU6Go-oc'
//     }
    return config;
},
    function (error) {
    return Promise.reject(error);
}
);
// async function refreshToken(){
//     try {
//         const response = await axios.post('http://91.107.160.88:3001/v1/userRefreshToken',
//             {token:accessToken},
//             {
//                 headers: {
//                     'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzRjMzc4Y2RlMzM4OTc3ZTVjMjkxNCIs' +
//                         'ImlhdCI6MTY5MDYzMDI1MCwiZXhwIjo1MjkwNjMwMjUwfQ.pJB6oU23uGmKp95VsX0UpwfHWY5uyV0voAEX6sgbRdk',
//                 }
//             }).then(function (response) {
//             if(response.status===200){
//             }
//         });
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }
export default instance;