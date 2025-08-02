import { useEffect } from "react"
import UsersNavbar from "./UsersNavbar"
import Footer from "./Footer"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function UsersLayout(){
    const {pathName}=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
    // let isLogin=sessionStorage.getItem("isLogin")
    // let userType=sessionStorage.getItem("userType")
    // const nav=useNavigate()
    // useEffect(()=>{
    //     if(!isLogin || userType!=3){
    //         toast.error("Please Login")
    //         nav("/login")
    //     }
    // })

    return(
        <>
        <UsersNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}