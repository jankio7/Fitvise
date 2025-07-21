import { addDoc, collection, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"


export default function AddSubscription(){
    const [title, setTitle]=useState("")
    const [type, setType]=useState("")
    const [price, setPrice]=useState("")
    const [description, setDescription]=useState("")
    const handleForm=async(event)=>{
        event.preventDefault()
        saveData()
    }
    const saveData=async ()=>{
            try{ 
                let data={
                    title,
                    type,
                    price,
                    description,
                    status:true,
                    createdAt:Timestamp.now()
                }
                console.log(data);
                await addDoc(collection(db, "subscription"),data)
                toast.success("Subscription added successfully")
                setTitle("")
                setType("")
                setPrice("")
                setDescription("")
            }
            catch(error){
                toast.error(error.message)
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
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Add Subscription</h3>
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
                                                            <label className="label" htmlFor="type">
                                                            Type  
                                                            </label>
                                                            <select value={type} onChange={(event)=>{
                                                                setType(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Select</option>
                                                                <option>Weight loss</option>
                                                                <option>Weight gain</option>
                                                                <option>PCOS recovery</option>
                                                            </select>
                                                       
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="price">
                                                                Price
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="price"
                                                                id="price"
                                                                placeholder="Price"
                                                                value={price}
                                                                onChange={(event)=>{
                                                                    setPrice(event.target.value)
                                                                }}
                                                            />
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
                </div>
            </section>
        </>
    )
}