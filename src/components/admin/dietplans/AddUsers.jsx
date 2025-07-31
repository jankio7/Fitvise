import { addDoc, collection, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { FadeLoader } from "react-spinners"

export default function AddUsers(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [contact, setContact]=useState("")
    const [goals, setGoals]=useState("")
    const [actions, setActions]=useState("")
    const [load, setLoad]=useState(false)
    const handleForm=async(event)=>{
        event.preventDefault()
        setLoad(true)
        saveData()
    }
    const saveData=async ()=>{
            try{ 
                let data={
                    name,
                    email,
                    contact,
                    goals,
                    actions,
                    status:true,
                    createdAt:Timestamp.now()
                }
                console.log(data);
                await addDoc(collection(db, "users"),data)
                toast.success("User added successfully")
                setName("")
                setEmail("")
                setContact("")
                setGoals("")
                setActions("")
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoad(false)
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
                        Users <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Users</h1>
                    </div>
                </div>
                </div>
        </section>
        <section className="ftco-section bg-light">
            <div className="container">
                {load ?
                <FadeLoader color="#069ad4ff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Add Users</h3>
                                            <div id="form-message-warning" className="mb-4" />
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
                                                               Name 
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
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                                value={email}
                                                                onChange={(event)=>{
                                                                    setEmail(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="contact">
                                                                Contact
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                name="contact"
                                                                id="contact"
                                                                placeholder="Contact"
                                                                value={contact}
                                                                minLength={10}
                                                                maxLength={10}
                                                                onChange={(event)=>{
                                                                    setContact(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="goals">
                                                                Goals
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="goals"
                                                                id="goals"
                                                                placeholder="Goals"
                                                                value={goals}
                                                                onChange={(event)=>{
                                                                    setGoals(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="actions">
                                                                Actions
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="actions"
                                                                id="actions"
                                                                placeholder="Actions"
                                                                value={actions}
                                                                onChange={(event)=>{
                                                                    setActions(event.target.value)
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
                                </div>
                            </div>
                        </div>
                    </div>
                }
                </div>

                
        </section>
        </>
    )
}