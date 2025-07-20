import { addDoc, collection, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"


export default function AddDietplan(){
    const [day, setDay]=useState("")
    const [type, setType]=useState("")
    const [description, setDescription]=useState("")
    const [meal1, setMeal1]=useState("")
    const [meal2, setMeal2]=useState("")
    const [meal3, setMeal3]=useState("")

    const handleForm=async(event)=>{
        event.preventDefault()
        //formData.append("file", image);
                // formData.append("upload_preset", "images"); // Replace with your upload preset
        
                // try {
                //     const response = await axios.post(
                //         `https://api.cloudinary.com/v1_1/dnxng3fkk/image/upload`, // Replace with your Cloudinary cloud name
                //         formData
                //     );
                //     setUrl(response.data.secure_url);
                 saveData()
                // } catch (error) {
                //     toast.error("Error uploading image:", error.message);
                // }

    }
    const saveData=async ()=>{
        try{ 
            let data={
                day,
                type,
                description,
                meal1,
                meal2,
                meal3,
                status:true,
                createdAt:Timestamp.now()
            }
           // console.log(data);
            await addDoc(collection(db, "dietplans"),data)
            toast.success("Diet plan added successfully")
            setDay("")
            setType("")
            setDescription("")
            setMeal1("")
            setMeal2("")
            setMeal3("")
        }
        catch(error){
            toast.error(error.message)
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
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4"> Add diet</h3>
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
                                                            <label className="label" htmlFor="day">
                                                                Day
                                                            </label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="day"
                                                                id="day"
                                                                placeholder="Day"
                                                                value={day}
                                                                onChange={(event)=>{
                                                                    setDay(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="desc">
                                                            Type  
                                                            </label>
                                                            <select value={type} onChange={(event)=>{
                                                                setType(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Choose one</option>
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
                                                            <label className="label" htmlFor="meal1">
                                                                Meal 1
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="meal1"
                                                                id="meal1"
                                                                placeholder="Meal 1"
                                                                value={meal1}
                                                                onChange={(event)=>{
                                                                    setMeal1(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="meal2">
                                                                Meal 2
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="meal2"
                                                                id="meal2"
                                                                placeholder="Meal 2"
                                                                value={meal2}
                                                                onChange={(event)=>{
                                                                    setMeal2(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="meal3">
                                                                Meal 3
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="meal3"
                                                                id="meal3"
                                                                placeholder="Meal 3"
                                                                value={meal3}
                                                                onChange={(event)=>{
                                                                    setMeal3(event.target.value)
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
                </div>
            </section>
        </>
    )
}