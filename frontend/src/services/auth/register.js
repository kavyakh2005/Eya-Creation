import axiosInstance from "../httpServices";

const AdminServices = {
    register:async(data)=>{
        return axiosInstance.post("/auth/admin/register",data); 
    },

    login:async(data)=>{
        return axiosInstance.post("/auth/admin/login",data);
    }

}

export default AdminServices;
    