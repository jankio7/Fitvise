import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
export default function ManageUsers(){
    const [users, setUsers]=useState([])
            const fetchData=()=>{
                let q= query(collection(db,"users"))
            onSnapshot(q,(usersCol)=>{
                setUsers(usersCol.docs?.map((el)=>{
                    return {...el.data(), id:el.id};
                }))
            })
            }
            useEffect(()=>{
                fetchData()
            },[])
            const DeleteUsers=async(UsersId)=>{
                await deleteDoc(doc(db,"users", UsersId))
                toast.success("User deleted successfully")
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
                    Users <i className="ion-ios-arrow-forward" />
                    </span>
                </p>
                <h1 className="mb-0 bread">Users</h1>
                </div>
            </div>
            </div>
        </section>
        <div className="container my-5">
                    <div className="row">
                        <div className="col table-responsive">
                            <div className="d-flex justify-content-end">
                                <Link to={"/admin/users/add"} className="btn btn-outline-primary">Add New +</Link>
                            </div>
                            <h3>Manage Users</h3>
                            <table className="table table-hover table-striped">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Goals</th>
                                        <th>Actions</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.map((el,index)=>{
                                        return( 
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{el?.name}</td>
                                                <td>{el?.email}</td>
                                                <td>{el?.contact}</td>
                                                <td>{el?.goals}</td>
                                                <td>{el?.actions}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{
                                                    DeleteUsers(el.id)
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