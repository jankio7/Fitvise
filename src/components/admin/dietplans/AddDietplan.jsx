import { addDoc, collection, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { FadeLoader } from "react-spinners"


export default function AddDietplan(){
    const [goals, setGoals]=useState("")
    const [title, setTitle]=useState("")
    const [cuisine, setCuisine]=useState("")
    const [type, setType]=useState("")
    const [description, setDescription]=useState("")
    const [duration, setDuration]=useState("")
    const [min, setMin]=useState("")
    const [max, setMax]=useState("")
    const [load, setLoad]=useState(false)

    const handleForm=async(event)=>{
        event.preventDefault()
        setLoad(true)
        saveData()
    }
    const saveData=async ()=>{
        try{ 
            let data={
                goals,
                title,
                cuisine,
                type,
                description,
                duration,
                min,
                max,
                status:true,
                createdAt:Timestamp.now()
            }
           // console.log(data);
            await addDoc(collection(db, "dietplans"),data)
            toast.success("Diet plan added successfully")
            setGoals("")
            setTitle("")
            setCuisine("")
            setType("")
            setDescription("")
            setDuration("")
            setMin("")
            setMax("")
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
                        Diet plan <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Diet plan</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    {load ?
                    <FadeLoader color="#069ad4ff" size={30} cssOverride={{display:"block",margin:"0 auto"}} loading={load}/>
                    :
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4"> Add diet</h3>
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
                                                            <label className="label" htmlFor="title">
                                                                Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="title"
                                                                id="title"
                                                                placeholder="Title"
                                                                value={title}
                                                                onChange={(event)=>{
                                                                    setTitle(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="cuisine">
                                                            Cuisine  
                                                            </label>
                                                            <select value={cuisine}
                                                             onChange={(event)=>{
                                                                setCuisine(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Select</option>
                                                                <option>North</option>
                                                                <option>South</option>
                                                                <option>East</option>
                                                                <option>West</option>
                                                            </select>
                                                       </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="diet type">
                                                            Diet type  
                                                            </label>
                                                            <select value={type}
                                                                onChange={(event)=>{
                                                                setType(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Select</option>
                                                                <option>Breakfast</option>
                                                                <option>Lunch</option>
                                                                <option>Snacks</option>
                                                                <option>Dinner</option>
                                                            </select>
                                                       </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="desc">
                                                                Description
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="desc"
                                                                id="desc"
                                                                placeholder="Description"
                                                                value={description}
                                                                onChange={(event)=>{
                                                                    setDescription(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="duration">
                                                                Duration
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="duration"
                                                                id="duration"
                                                                placeholder="Duration"
                                                                value={duration}
                                                                onChange={(event)=>{
                                                                    setDuration(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="min calorie">
                                                                Minimum calorie
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="min"
                                                                id="min"
                                                                placeholder="Minimum calorie"
                                                                value={min}
                                                                onChange={(event)=>{
                                                                    setMin(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="max calorie">
                                                                Maximum calorie
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="max"
                                                                id="max"
                                                                placeholder="Maximum calorie"
                                                                value={max}
                                                                onChange={(event)=>{
                                                                    setMax(event.target.value)
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
                    </div>
                    }
                </div>
            </section>
        </>
    )
}