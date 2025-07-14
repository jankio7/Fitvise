import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Register(){
    const [name,setName]=useState("")
    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [contact,setContact]=useState("")

    const changeName=(event)=>{
        setName(event.target.value)
    }
    const changeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const changeContact=(event)=>{
        setContact(event.target.value)
    }
    let nav= useNavigate()
    const handleForm=(event)=>{
        event.preventDefault()
        if(name=="love" && email=="admin@gmail.com" && password=="2025" && contact=="1234567890"){
            toast.success("Login Successfully")
            nav("/")
        }else{
            toast.error("Invalid credentials");
        }
    }
    

    return(
        <>
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
                        Register <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Register</h1>
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
                            <h3 className="mb-4">Register</h3>
                            <div id="form-message-warning" className="mb-4" />
                            <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                            </div>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm"
                                onSubmit={handleForm}
                            >
                                <div className="row">
                                <div className="col-md-12">
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
                                        onChange={changeName}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
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
                                        required
                                        onChange={changeEmail}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="subject">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Password"
                                        required
                                        onChange={changePassword}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="subject">
                                        Contact
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Contact"
                                        minLength={10}
                                        maxLength={10}
                                        required
                                        onChange={changeContact}
                                    />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="SUBMIT"
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
                
                        
        </>
    )
}

            
