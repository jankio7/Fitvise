import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
export default function ManageDietdetails(){
    const [dietdetails, setDietdetails]=useState([])
    const fetchData=()=>{
        let q= query(collection(db,"dietdetails"))
    onSnapshot(q,(dietdetailsCol)=>{
        setDietdetails(dietdetailsCol.docs?.map((el)=>{
            return {...el.data(), id:el.id};
        }))
    })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const DeleteDietdetails= async(DietdetailsId)=>{
        await deleteDoc(doc(db,"dietdetails", DietdetailsId))
        toast.success("Diet details deleted")
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
                        Diet details <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Diet details</h1>
                    </div>
                </div>
                </div>
        </section>
        <div className="container my-5">
            <div className="row">
                <div className="col table-responsive">
                    <div className="d-flex justify-content-end">
                        <Link to={"/admin/dietdetails/add"} className="btn btn-outline-primary">Add New +</Link>
                    </div>
                    <h3>Manage Diet plans</h3>
                    {/* <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Sr No.</th>
                                <th>Diet</th>
                                <th>Day</th>
                                <th>Meal</th>
                                <th>Time</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Calorie</th>
                                <th>Recipe</th>
                                <th>Protein</th>
                                <th>Carbohydrates</th>
                                <th>Fats</th>
                                <th>Fibre</th>
                                <th>Sugar</th>
                                <th>Image</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dietdetails?.map((el,index)=>{
                                return( 
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{el?.diet}</td>
                                        <td>{el?.day}</td>
                                        <td>{el?.meal}</td>
                                        <td>{el?.time}</td>
                                        <td>{el?.item}</td>
                                        <td>{el?.quantity}</td>
                                        <td>{el?.calorie}</td>
                                        <td>{el?.recipe}</td>
                                        <td>{el?.protein}</td>
                                        <td>{el?.carbohydrates}</td>
                                        <td>{el?.fats}</td>
                                        <td>{el?.fibre}</td>
                                        <td>{el?.sugar}</td>
                                        <td>{el?.image}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{
                                            DeleteDietdetails(el.id)
                                        }}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> */}
                <div className="row">
                    {
                        dietdetails.map((el)=>{
                            return(
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img className="card-img-top" src={el.image} alt="Card image cap" />
                                    <div className="card-body">
                                      <h5 className="card-title">{el.diet}</h5>
                                      <p className="card-text">
                                        {el.type}
                                      </p>
                                      <button onClick={()=>{
                                        DeleteDietdetails(el.id)
                                      }}className="btn btn-danger">
                                        Delete
                                      </button>
                                    </div>
                                </div>

                            </div>)
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    </>
    )
}