import axios from "axios"

const http=axios.create({
    baseURL:"http://localhost:8000/api/patient"
})

const addPatient=(data)=>{
    return http.post('/',data)
    .then(res=>res.data)
    .catch(err=>{throw err})
}
const getAllPatients=()=>{
    return http.get('/')
    .then(res=>res.data)
    .catch(err=>{throw err})
}

const getOnePatients=(id)=>{
    return http.get(`/${id}`)
    .then(res=>res.data)
    .catch(err=>{throw err})
}

const deletePatient=(id)=>{
    return http.delete(`/${id}`)
    .then(res=>res.data)
    .catch(err=>{throw err})
}

const editPatient=(newPatient,id)=>{
    return http.put(`/${id}`,newPatient)
    .then(res=>res.data)
    .catch(err=>{throw err})
}






export{
    addPatient,
    getAllPatients,
    getOnePatients,
    deletePatient,
    editPatient
}