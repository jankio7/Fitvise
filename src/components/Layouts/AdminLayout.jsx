import { useEffect } from "react"
import AdminNavbar from "./AdminNavbar"
import Footer from "./Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function AdminLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("isLogin")
    const nav=useNavigate()
    useEffect(()=>{
        if(!isLogin){
            toast.error("Please Login")
            nav("/login")
        }
    },[])
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}