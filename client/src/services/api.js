// import axios from "axios"


// const instance = axios.create({
//     baseURL: 'localhost:5000',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

// const api = async(
//     method, url, payload, rejectWithValue, options
// ) => {
//     try {
//         const { data } = await instance[method](url, payload, {...options})
//         return data
//     } catch (e) {
    
//         if (rejectWithValue && e.response.status <=500 && e.response >= 400) {
//             return rejectWithValue({
//                 ...e?.response?.data,
//                 status: e.response.status
//             })
//         }
//         throw e
//     }
// }

// export default api