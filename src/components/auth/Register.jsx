 import { createUserWithEmailAndPassword } from "firebase/auth"
 import { useState } from "react"
 import { auth, db } from "../../Firebase"
 import { toast } from "react-toastify"
 import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
import  { useNavigate } from "react-router-dom"

 export default function Register(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [contact, setContact]=useState("")
    const [gender, setGender]=useState("")
    const [age, setAge]=useState("")
    const [goals, setGoals]=useState("")
    const nav=useNavigate()
    const handleForm=(event)=>{
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
           let userId=userCred.user.uid
           saveData(userId)
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }      
        const saveData=async (userId)=>{      
            try{
            let data={
               name:name,
               email:email,
               contact:contact,
               gender,
               age,
               goals,
               userType:3,
               userId:userId,
               status:true,
               createdAt:Timestamp.now()
            }
            await setDoc(doc(db, "users", userId), data)
            toast.success("Registered successfully")
            getUserData(userId)
        }
            catch(error){
                toast.error(error.message)
            }
        }
            const getUserData=async (userId)=>{
                let userDoc=await getDoc(doc(db, "users", userId))
                let userData=userDoc.data()            
                sessionStorage.setItem("name", userData.name)
                sessionStorage.setItem("email", userData.email)
                sessionStorage.setItem("userType", userData.userType)
                sessionStorage.setItem("userId", userData.userId)
                sessionStorage.setItem("isLogin", userData.true)
                toast.success("Login successfullly")
                if(userData.userType==1){
                    nav("/admin")
                }
                else if(userData.userType==3){
                    nav("/users")
                }
                    else{
                    nav("/")
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
                                                        value={name}
                                                        onChange={(event)=>{
                                                            setName(event.target.value)
                                                        }}
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
                                                        value={email}
                                                        onChange={(event)=>{
                                                            setEmail(event.target.value)
                                                        }}
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
                                                        value={contact}
                                                        onChange={(event)=>{
                                                            setContact(event.target.value)
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Gender
                                                    </label>
                                                    <select value={gender} onChange={(event)=>{
                                                                setGender(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Choose one</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Others</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Age
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="age"
                                                        id="subject"
                                                        placeholder="Age"
                                                        required
                                                        value={age}
                                                        onChange={(event)=>{
                                                            setAge(event.target.value)
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                    <label className="label" htmlFor="subject">
                                                        Goals
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="goala"
                                                        id="subject"
                                                        placeholder="Goals"
                                                        required
                                                        value={goals}
                                                        onChange={(event)=>{
                                                            setGoals(event.target.value)
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
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-lg-4 d-flex align-itmes-stretch">
                                        <div className="info-wrap w-100 img"
                                        style={{backgroundImage: "url(/assets/images/coach-1.jpg"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    )
}
