import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import { FadeLoader } from "react-spinners"
import Swal from "sweetalert2"
import Switch from "react-switch"
export default function ManageUsers(){
    const [users, setUsers]=useState([])
    const [load, setLoad]=useState(true)
    const fetchData=()=>{
        let q= query(collection(db,"users"))
    onSnapshot(q,(usersCol)=>{
        setUsers(usersCol.docs?.map((el)=>{
            return {...el.data(), id:el.id};
        }))
        setLoad(false)
    })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const changeStatus=(userId, status)=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${status?"Block":"Un-block"}!`
        }).then(async (result) => {
          if (result.isConfirmed) {
            let data={
                status:!status
            }
            await updateDoc(doc(db,"users", userId),data)
            Swal.fire({
              title: `${status?"Blocked":"Un-blocked"}!`,
              //text: "Your file has been deleted.",
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
            {load ?
                <FadeLoader color="#069ad4ff" size={30} cssOverride={{display:"block",margin:"0 auto"}} loading={load}/>
            :
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
                                <th>Status</th>
                                <th>Actions</th>
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
                                        <td>
                                            {el?.status?"Active":"In-active"}</td>
                                        <td> 
                                        <button className="btn btn mx-2">
                                             <Switch checked={el.status} onChange={()=>{
                                                changeStatus(el.id, el.status)
                                             }}/> </button>
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