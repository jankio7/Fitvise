import { addDoc, collection, loadBundle, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { FadeLoader } from "react-spinners"

export default function Subscribe(){
    const [goals, setGoals]=useState("")
    const [date, setDate]=useState("")
    const [restrictions, setRestrictions]=useState("")
    const [type, setType]=useState("")
    const [cuisines, setCuisines]=useState("")
    const [health, setHealth]=useState("")
    const [request, setRequest]=useState("")
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
                    date,
                    restrictions,
                    type,
                    cuisines,
                    health,
                    request,
                    status:true,
                    createdAt:Timestamp.now()
                }
                //console.log(data);
                await addDoc(collection(db, "subscription"),data)
                toast.success("Subscription added successfully")
                setGoals("")
                setDate("")
                setRestrictions("")
                setType("")
                setCuisines("")
                setHealth("")
                setRequest("")
                
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoad(false)
            }
        }
    return (
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
                        Subscription <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Subscription</h1>
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
                                                        <h3 className="mb-4">Subscription</h3>
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
                                                                        <label className="label" htmlFor="goal">
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
                                                                        <label className="label" htmlFor="date">
                                                                            Date
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="date"
                                                                            id="date"
                                                                            placeholder="Date"
                                                                            value={date}
                                                                            onChange={(event)=>{
                                                                                setDate(event.target.value)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" htmlFor="restrictions">
                                                                            Restrictions
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="restrictions"
                                                                            id="restrictions"
                                                                            placeholder="Restrictions"
                                                                            value={restrictions}
                                                                            onChange={(event)=>{
                                                                                setRestrictions(event.target.value)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" htmlFor="type">
                                                                            Diet Type
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="type"
                                                                            id="type"
                                                                            placeholder="Diet Type"
                                                                            value={type}
                                                                            onChange={(event)=>{
                                                                                setType(event.target.value)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" htmlFor="cuisines">
                                                                            Cuisines
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="cuisines"
                                                                            id="cuisines"
                                                                            placeholder="Cuisines"
                                                                            value={cuisines}
                                                                            onChange={(event)=>{
                                                                                setCuisines(event.target.value)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" htmlFor="health">
                                                                            Health condition
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="health"
                                                                            id="health"
                                                                            placeholder="Health condition"
                                                                            value={health}
                                                                            onChange={(event)=>{
                                                                                setHealth(event.target.value)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" htmlFor="request">
                                                                            Special Request
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="request"
                                                                            id="request"
                                                                            placeholder="Special Request"
                                                                            value={request}
                                                                            onChange={(event)=>{
                                                                                setRequest(event.target.value)
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