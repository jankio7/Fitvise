import AdminNavbar from "./AdminNavbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
export default function AdminLayout(){
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}