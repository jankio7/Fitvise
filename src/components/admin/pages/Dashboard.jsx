import { collection, getCountFromServer } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { Link } from "react-router-dom"

export default function Dashboard(){
    const [dietplans, setDietplans]=useState(0)
    const [users, setUsers]=useState(0)
    useEffect(()=>{
        fetchDietplansCount()
        fetchUsersCount()
    },[])
    const fetchDietplansCount= async ()=>{
        let dietplansCount = await getCountFromServer(collection(db,"dietplans"))
        setDietplans(dietplansCount.data().count)
    }
    const fetchUsersCount= async ()=>{
        let usersCount = await getCountFromServer(collection(db,"users"))
        setUsers(usersCount.data().count)
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
                            <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                         <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"></h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section ftco-services">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                    <div className="d-block services-wrap text-center">
                        <div
                        className="img"
                        style={{ backgroundImage: "url(/assets/images/services-3.jpg)" }}
                        />
                        <div className="media-body p-2 mt-3">
                        <h3 className="heading">Diet plans</h3>
                        <h1>{dietplans}</h1>
                        
                        <Link to={"/admin/dietplans/manage"} className="btn btn-primary btn-outline-primary">
                          Read more
                        </Link>
                    
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                    <div className="d-block services-wrap text-center">
                        <div
                        className="img"
                        style={{ backgroundImage: "url(/assets/images/services-2.jpg)" }}
                        />
                        <div className="media-body p-2 mt-3">
                        <h3 className="heading">Users</h3>
                        <h1>{users}</h1>
                        <Link to={"/admin/users/manage"} className="btn btn-primary btn-outline-primary">
                          Read more
                        </Link>
                      
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                    <div className="d-block services-wrap text-center">
                        <div
                        className="img"
                        style={{ backgroundImage: 'url("/assets/images/services-1.jpg")' }}
                        />
                        <div className="media-body p-2 mt-3">
                        <h3 className="heading">Subscription</h3>
                        <h1>100</h1>
                        
                        <Link to={"/admin/subscription/manage"} className="btn btn-primary btn-outline-primary">
                          Read more
                        </Link>
                      
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        
        </>
    )
}