import { doc, onSnapshot, Timestamp, updateDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"


export default function UpdateSubscription(){
    const [userdetails, setUserdetails]=useState("")
    const [payment, setPayment]=useState("")
    const [goals, setGoals]=useState("")
    const [date, setDate]=useState("")
    const [item, setItem]=useState("")
    const nav=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        const fetchData=()=>{
            onSnapshot(doc(db,"subscription",id),(SubscriptionData)=>{
                const FillData=SubscriptionData.data()
                setUserdetails(FillData.userdetails)
                setPayment(FillData.payment)
                setGoals(FillData.goals)
                setDate(FillData.date)
                setItem(FillData.item)
            })
        }
        fetchData()
        //console.log(id);
    },[])
    
    const handleForm=async(event)=>{
        event.preventDefault()
        saveData()
    }
    const saveData=async ()=>{
            try{ 
                let data={
                    userdetails,
                    payment,
                    goals,
                    date,
                    item,
                    status:true,
                    createdAt:Timestamp.now()
                }
                //console.log(data);
                await updateDoc(doc(db, "subscription",id),data)
                toast.success("Subscription updated successfully")
                setUserdetails("")
                setPayment("")
                setGoals("")
                setDate("")
                setItem("")
                nav("/admin/subscription/manage")
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
                                            <h3 className="mb-4">Update Subscription</h3>
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
                                                            <label className="label" htmlFor="userdetails">
                                                                User details
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="userdetails"
                                                                id="userdetails"
                                                                placeholder="User details"
                                                                value={userdetails}
                                                                onChange={(event)=>{
                                                                    setUserdetails(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="payment">
                                                                Payment
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="payment"
                                                                id="payment"
                                                                placeholder="Payment"
                                                                value={payment} 
                                                                onChange={(event)=>{
                                                                    setPayment(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
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
                                                            <label className="label" htmlFor="item">
                                                                Item
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="item"
                                                                id="item"
                                                                placeholder="Item"
                                                                value={item}
                                                                onChange={(event)=>{
                                                                    setItem(event.target.value)
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