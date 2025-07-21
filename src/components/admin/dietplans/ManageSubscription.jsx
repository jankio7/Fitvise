import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../Firebase"
export default function ManageSubscription(){
    const [subscription, setSubscription]=useState([])
        const fetchData=()=>{
            let q= query(collection(db,"subscription"))
        onSnapshot(q,(subscriptionCol)=>{
            setSubscription(subscriptionCol.docs?.map((el)=>{
                return {...el.data(), id:el.id};
            }))
        })
        }
        useEffect(()=>{
            fetchData()
        },[])
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
                    <Link to={"/admin"}>
                        Home <i className="ion-ios-arrow-forward" />
                    </Link>
                    </span>{" "}
                    <span>
                    Subscription <i className="ion-ios-arrow-forward" />
                    </span>
                </p>
                <h1 className="mb-0 bread">Diet plan</h1>
                </div>
            </div>
            </div>
        </section>
        <div className="container my-5">
                    <div className="row">
                        <div className="col table-responsive">
                            <div className="d-flex justify-content-end">
                                <Link to={"/admin/subscription/add"} className="btn btn-outline-primary">Add New +</Link>
                            </div>
                            <h3>Manage Subscription</h3>
                            <table className="table table-hover table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscription?.map((el,index)=>{
                                        return( 
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{el?.title}</td>
                                                <td>{el?.type}</td>
                                                <td>{el?.price}</td>
                                                <td>{el?.description}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
        </>
    )
}