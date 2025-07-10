export default function Header(){
    return( 
        <>
  <div classname="wrap">
    <div classname="container">
      <div classname="row justify-content-between">
        <div classname="col d-flex align-items-center">
          <p classname="mb-0 phone">
            <span classname="mailus">Phone no:</span>
            {"{"}" "{"}"}
            <a href="#">+00 1234 567</a> or{"{"}" "{"}"}
            <span classname="mailus">email us:</span>
            {"{"}" "{"}"}
            <a href="#">emailsample@email.com</a>
          </p>
        </div>
        <div classname="col d-flex justify-content-end">
          <div classname="social-media">
            <p classname="mb-0 d-flex">
              <a
                href="#"
                classname="d-flex align-items-center justify-content-center"
              >
                <span classname="fa fa-facebook">
                  <i classname="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                classname="d-flex align-items-center justify-content-center"
              >
                <span classname="fa fa-twitter">
                  <i classname="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                classname="d-flex align-items-center justify-content-center"
              >
                <span classname="fa fa-instagram">
                  <i classname="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                classname="d-flex align-items-center justify-content-center"
              >
                <span classname="fa fa-dribbble">
                  <i classname="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    classname="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div classname="container">
      <a classname="navbar-brand" href="index.html">
        Health
        <span>
          coach
          <i classname="fa fa-leaf"></i>
        </span>
        <i classname="fa fa-leaf"></i>
      </a>
      <i classname="fa fa-leaf">
        <button
          classname="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="fa fa-bars"> Menu</span>
        </button>
        <div classname="collapse navbar-collapse" id="ftco-nav">
          <ul classname="navbar-nav ml-auto">
            <li classname="nav-item">
              <a href="index.html" classname="nav-link">
                Home
              </a>
            </li>
            <li classname="nav-item active">
              <a href="about.html" classname="nav-link">
                About
              </a>
            </li>
            <li classname="nav-item">
              <a href="coach.html" classname="nav-link">
                Coach
              </a>
            </li>
            <li classname="nav-item">
              <a href="pricing.html" classname="nav-link">
                Pricing
              </a>
            </li>
            <li classname="nav-item">
              <a href="services.html" classname="nav-link">
                Services
              </a>
            </li>
            <li classname="nav-item">
              <a href="success-stories.html" classname="nav-link">
                Stories
              </a>
            </li>
            <li classname="nav-item">
              <a href="blog.html" classname="nav-link">
                Blog
              </a>
            </li>
            <li classname="nav-item">
              <a href="contact.html" classname="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <i classname="fa fa-leaf"></i>
  </nav>
  <i classname="fa fa-leaf">
    {"{"}/* END nav */{"}"}
  </i>
</>

    ) 
}

