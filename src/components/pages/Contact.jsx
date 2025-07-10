function Contact(){
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
                                Health
                               <span>
                                    coach
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
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">
                                    About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="coach.html" className="nav-link">
                                    Coach
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pricing.html" className="nav-link">
                                    Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="services.html" className="nav-link">
                                    Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="success-stories.html" className="nav-link">
                                    Stories
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="blog.html" className="nav-link">
                                    Blog
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a href="contact.html" className="nav-link">
                                    Contact
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
            </nav>
            {/* END nav */}
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-2">
                        <a href="index.html">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        Contact us <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Contact us</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                    <div className="wrapper">
                        <div className="row no-gutters">
                        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4">Get in touch</h3>
                            <div id="form-message-warning" className="mb-4" />
                            <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                            </div>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm"
                            >
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label className="label" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label className="label" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="#">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="message"
                                        cols={30}
                                        rows={4}
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Send Message"
                                        className="btn btn-primary"
                                    />
                                    <div className="submitting" />
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                            <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                            <h3>Let's get in touch</h3>
                            <p className="mb-4">
                                We're open for any suggestion or just to have a chat
                            </p>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-map-marker" />
                                </div>
                                <div className="text pl-3">
                                <p>
                                    <span>Address:</span> 198 West 21th Street, Suite 721
                                    New York NY 10016
                                </p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-phone" />
                                </div>
                                <div className="text pl-3">
                                <p>
                                    <span>Phone:</span>{" "}
                                    <a href="tel://1234567920">+ 1235 2355 98</a>
                                </p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-paper-plane" />
                                </div>
                                <div className="text pl-3">
                                <p>
                                    <span>Email:</span>{" "}
                                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                </p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-globe" />
                                </div>
                                <div className="text pl-3">
                                <p>
                                    <span>Website</span> <a href="#">yoursite.com</a>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <div id="map" className="map" />
                    </div>
                </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6">
                    <div className="subscribe mb-5">
                        <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                            <input
                            type="text"
                            className="form-control rounded-left"
                            placeholder="Enter email address"
                            />
                            <input
                            type="submit"
                            defaultValue="Subscribe"
                            className="form-control submit px-3"
                            />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                        <h2 className="footer-heading">
                            <a href="#" className="logo">
                            Health<span>care</span>
                            </a>
                        </h2>
                        <p>
                            A small river named Duden flows by their place and supplies it
                            with the necessary regelialia.
                        </p>
                        <a href="#">
                            read more <span className="ion-ios-arrow-round-forward" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                    <div className="row">
                        <div className="col-md-3 mb-md-0 mb-4 border-left">
                        <h2 className="footer-heading">Services</h2>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="py-1 d-block">
                                Balance Body
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Physical Activity
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Fitness Program
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Healthy Food
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-4 border-left">
                        <h2 className="footer-heading">About</h2>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="py-1 d-block">
                                Staff
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Team
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Careers
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Blog
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-4 border-left">
                        <h2 className="footer-heading">Resources</h2>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="py-1 d-block">
                                Security
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Global
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Charts
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Privacy
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-4 border-left">
                        <h2 className="footer-heading">Social</h2>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="py-1 d-block">
                                Facebook
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Twitter
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Instagram
                            </a>
                            </li>
                            <li>
                            <a href="#" className="py-1 d-block">
                                Google
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-8">
                    <p className="copyright">
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with{" "}
                        <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                        Colorlib.com
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                    </div>
                    <div className="col-md-6 col-lg-4 text-md-right">
                    <p className="mb-0 list-unstyled">
                        <a className="mr-md-3" href="#">
                        Terms
                        </a>
                        <a className="mr-md-3" href="#">
                        Privacy
                        </a>
                        <a className="mr-md-3" href="#">
                        Compliances
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </footer>
        </>

    )
}
export default Contact;