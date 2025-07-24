import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
export default function ManageDietplan(){
    const [dietplans, setDietplans]=useState([])
    const fetchData=()=>{
        let q= query(collection(db,"dietplans"))
    onSnapshot(q,(dietplansCol)=>{
        setDietplans(dietplansCol.docs?.map((el)=>{
            return {...el.data(), id:el.id};
        }))
    })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const DeleteDietplans= async(DietplanId)=>{
        await deleteDoc(doc(db,"dietplans", DietplanId))
        toast.success("Diet plan deleted")
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
                        <Link to={"/admin"}>
                            Home <i className="ion-ios-arrow-forward" />
                        </Link>
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
        <div className="container my-5">
            <div className="row">
                <div className="col table-responsive">
                    <div className="d-flex justify-content-end">
                        <Link to={"/admin/dietplans/add"} className="btn btn-outline-primary">Add New +</Link>
                    </div>
                    <h3>Manage Diet plans</h3>
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Sr No.</th>
                                <th>Goals</th>
                                <th>Title</th>
                                <th>Actions</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dietplans?.map((el,index)=>{
                                return( 
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{el?.goals}</td>
                                        <td>{el?.title}</td>
                                        <td>{el?.actions}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{
                                            DeleteDietplans(el.id)
                                        }}>Delete</button></td>
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