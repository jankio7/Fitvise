import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
export default function Layout(){
    const {pathName}=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}