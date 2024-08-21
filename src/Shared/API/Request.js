import axios from "axios"


const baseURL = 'https://project-management-system-tmli.onrender.com'
// http://localhost:4000

export const publicRequest = axios.create({
    baseURL : baseURL
 
})

export const UserRequest = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL : baseURL,
        headers : {
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        }
    })     
}