import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { FadeLoader } from "react-spinners"
export default function ManageSubscribe(){
    const [subscribe, setSubscribe]=useState([])
    const [load, setLoad]=useState(true)
        const fetchData=()=>{
            let q= query(collection(db,"subscribe"))
        onSnapshot(q,(subscribeCol)=>{
            setSubscribe(subscribeCol.docs?.map((el)=>{
                return {...el.data(), id:el.id};
            }))
            setLoad(false)
        })
        }
        useEffect(()=>{
            fetchData()
        },[])
        const deleteSubscribe=async(SubscribeId)=>{
            Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                    }).then(async (result) => {
                      if (result.isConfirmed) {
                        await deleteDoc(doc(db,"subscribelans", SubscribeId))
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your subscription has been deleted.",
                          icon: "success"
                        });
                      }
                    });
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
                    <Link to={"/users"}>
                        Home <i className="ion-ios-arrow-forward" />
                    </Link>
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
        <div className="container my-5">
            {load ?
            <FadeLoader color="#069ad4ff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
                    <div className="row">
                        <div className="col table-responsive">
                            <div className="d-flex justify-content-end">
                                <Link to={"/users/subscribe/add"} className="btn btn-outline-primary">Add New+</Link>
                            </div>
                            <h3>Manage Subscription</h3>
                            <table className="table table-hover table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Goals</th>
                                        <th>Date</th>
                                        <th>Restrictions</th>
                                        <th>Diet type</th>
                                        <th>Cuisines</th>
                                        <th>Health condition</th>
                                        <th>Special request</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribe?.map((el,index)=>{
                                        return( 
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{el?.goals}</td>
                                                <td>{el?.date}</td>
                                                <td>{el?.restrictions}</td>
                                                <td>{el?.type}</td>
                                                <td>{el?.cuisines}</td>             
                                                <td>{el?.health}</td>
                                                <td>{el?.request}</td>                               
                                                <td><Link to={`/users/subscribe/update/${el.id}`} className="btn btn-primary"><i className="fa fa-edit"></i></Link>
                                                    <button className="btn btn-outline-danger mx-2" onClick={()=>{
                                                    deleteSubscribe(el.id)
                                                }}><i className="fa fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
        </div>
        </>
    )
}