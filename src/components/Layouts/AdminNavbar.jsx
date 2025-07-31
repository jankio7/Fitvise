import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function AdminNavbar(){
  const {pathName}=useLocation()

  let isLogin=sessionStorage.getItem("isLogin")
  let name=sessionStorage.getItem("name")
  const nav=useNavigate()
  const logout=()=>{
    Swal.fire({
    title: "Are you sure you want to Logout ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout!"
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.clear()
      nav("/login")
      Swal.fire({
        title: "Logout!",
        text: "Logout successfuly.",
        icon: "success"
      });
    }
  });
}
 
    return(
        <>
            <div className="wrap">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col d-flex align-items-center">
                  <p className="mb-0 phone">
                    <span className="mailus">Phone no:</span>{" "}
                    <a href="#">+00 1234 567</a> or{" "}
                    <span className="mailus">email us:</span>{" "}
                    <a href="#">emailsample@email.com</a>
                  </p>
                </div>
                <div className="col d-flex justify-content-end">
                  <div className="social-media">
                    <p className="mb-0 d-flex">
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook">
                          <i className="sr-only">Facebook</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter">
                          <i className="sr-only">Twitter</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram">
                          <i className="sr-only">Instagram</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-dribbble">
                          <i className="sr-only">Dribbble</i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Fit
                        <span>
                        Vise
                        <i className="fa fa-leaf" />
                        </span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="fa fa-bars" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${pathName=="/admin" && "active"}`}>
                            <Link to="/" className="nav-link">
                              Home
                            </Link>
                        </li>
                        <li className={`nav-item ${pathName=="/admin" && "active"}`}>
                            <Link to="/admin/dietplans/manage" className="nav-link">
                              Diet Plans
                            </Link>
                        </li>
                        <li className={`nav-item ${pathName=="/admin" && "active"}`}>
                            <Link to="/admin/subscription/manage" className="nav-link">
                              Subscription
                            </Link>
                        </li>
                        <li className={`nav-item ${pathName=="/admin" && "active"}`}>
                            <Link to="/admin/users/manage" className="nav-link">
                              Users
                            </Link>
                        </li>
                        <li className={`nav-item ${pathName=="/admin" && "active"}`}>
                            <Link to="/admin/dietdetails/manage" className="nav-link">
                              Diet details
                            </Link>
                        </li>
                        <li className={`nav-item mt-4 ${pathName=="/admin" && "active"}`}>
                          { 
                            isLogin?
                            <Link to="#" onClick={logout} className="btn btn-primary">
                              Logout {name}
                            </Link>
                            :
                            <Link to="/login" className="btn btn-primary">
                              Login
                            </Link>
                          }  
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
          {/* END nav */}
          
        </>
    )
}