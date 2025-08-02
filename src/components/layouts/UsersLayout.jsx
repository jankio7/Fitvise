import { useEffect } from "react"
import UsersNavbar from "./UsersNavbar"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
export default function UsersLayout(){
    const {pathName}=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
    return(
        <>
        <UsersNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}