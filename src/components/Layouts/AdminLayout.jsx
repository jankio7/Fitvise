import { useEffect } from "react"
import AdminNavbar from "./AdminNavbar"
import Footer from "./Footer"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function AdminLayout(){
    const {pathName}=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
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