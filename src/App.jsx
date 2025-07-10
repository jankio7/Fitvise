import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Blog from "./components/pages/Blog"
import Blogsingle from "./components/pages/Blogsingle"
import Coach from "./components/pages/Coach"
import Contact from "./components/pages/Contact"
import Main from "./components/pages/Main"
import Pricing from "./components/pages/Pricing"
import Services from "./components/pages/Services"
import Successstories from "./components/pages/Successstories"
import Home from "./components/pages/Home"
import Error from"./components/pages/Error"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blogsingle" element={<Blogsingle/>}/>
          <Route path="/coach" element={<Coach/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/successstories" element={<Successstories/>}/>  
          <Route path="/*" element={<Error/>}/>      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
