import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { auth } from "../../Firebase"
import { doc, getDoc } from "firebase/firestore"
export default function Login(){
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const changeEmail=(event)=>{
        console.log(event);
        setEmail(event.target.value)
    }
    let nav=useNavigate()
    const handleForm=(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
            let userId=userCred.user.uid
            getUserData(userId)
        })
        .catch((error)=>{
            toast.error(error.message);
        })
    }
    const getUserData=async (userId)=>{
        let userDoc=await getDoc((doc(db, "users", userId)))
        let userData=userDoc.data()
        sessionStorage.setItem("name", userData?.name)
        sessionStorage.setItem("email", userData?.email)
        sessionStorage.setItem("userType", userData?.userType)
        sessionStorage.setItem("userId", userData?.userId)
        sessionStorage.setItem("isLogin", userData?.true)
        toast.success("Login successfully")
        if(userData?.userType==1){
            nav("/admin")
        }else{
            nav("/")
        }
    }
    const signInGoogle=()=>{
    let provider=new GoogleAuthProvider()
         signInWithPopup(auth, provider)
         .then((userCred)=>{
            let userId=userCred.user.uid
            getUserData(userId)
         })
        .catch((error)=>{
            toast.error(error.message)
        })
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
                        Login <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Login</h1>
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
                                            <h3 className="mb-4">Login</h3>
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
                                                            value={email}
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
                                                                value={password}
                                                                onChange={(event)=>{
                                                                    setPassword(event.target.value)
                                                                }}
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
                                            <button type="button" onClick={signInGoogle} className="btn btn-danger"><i class="bi bi-google"></i> Sign in with google</button>
                                           <div>Don't have an account ? <Link to={"/register"}>Register Here !</Link></div>
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