import axios from "axios";
// const accessToken = localStorage.getItem('accessToken');


const instance = axios.create({
    baseURL: 'http://91.107.160.88:3001/v1'
});
// instance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if(error.response.status === 403){
//             refreshToken()
//         }
//     }
// );
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