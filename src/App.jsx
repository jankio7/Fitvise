import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Blogsingle from "./components/pages/Blogsingle"
import Coach from "./components/pages/Coach"
import Contact from "./components/pages/Contact"
import Main from "./components/pages/Main"
import Successstories from "./components/pages/Successstories"
import Pricing from "./components/pages/Pricing"
import Services from "./components/pages/Services"
import Home from "./components/pages/Home"
import Error from"./components/pages/Error"
import Layout from "./components/layouts/Layout"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./components/Layouts/AdminLayout"
import AddDietplan from "./components/admin/dietplans/Adddietplan"
import ManageDietplan from "./components/admin/dietplans/ManageDietplan"
import AddSubscription from "./components/admin/dietplans/AddSubscription"
import ManageSubscription from "./components/admin/dietplans/ManageSubscription"
import AddUsers from "./components/admin/dietplans/AddUsers"
import ManageUsers from "./components/admin/dietplans/ManageUsers"
import AddDietdetails from "./components/admin/dietplans/AddDietdetails"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>} />
            <Route path="blog" element={<Blog/>}/>
            <Route path="blogsingle" element={<Blogsingle/>}/>
            <Route path="coach" element={<Coach/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="successstories" element={<Successstories/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="login" element={<Login/>}/>   
            <Route path="register" element={<Register/>}/> 
          </Route>  
            <Route path="/admin" element={<AdminLayout/>}>
              <Route path="dietplans/add" element={<AddDietplan/>}/>
              <Route path="dietplans/manage" element={<ManageDietplan/>}/>
              <Route path="subscription/add" element={<AddSubscription/>}/>
              <Route path="subscription/manage" element={<ManageSubscription/>}/>
              <Route path="users/add" element={<AddUsers/>}/>
              <Route path="users/manage" element={<ManageUsers/>}/>
              <Route path="dietdetails/add" element={<AddDietdetails/>}/>
            </Route>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
