import { addDoc, collection, Timestamp} from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { FadeLoader } from "react-spinners"

export default function AddDietdetails(){
    const [diet, setDiet]=useState("")
    const [day, setDay]=useState("")
    const [meal, setMeal]=useState("")
    const [time, setTime]=useState("")
    const [item, setItem]=useState("")
    const [quantity, setQuantity]=useState("")
    const [calorie, setCalorie]=useState("")
    const [recipe, setRecipe]=useState("")
    const [protein, setProtein]=useState("") 
    const [carbohydrates, setCarbohydrates]=useState("")
    const [fats, setFats]=useState("")
    const [fibre, setFibre]=useState("")
    const [sugar, setSugar]=useState("")
    const [imageName, setImageName]=useState("")
    const [image, setImage]=useState({})
    //const [load, setLoad]=useState(false)
    const handleForm=async (event)=>{
        event.preventDefault()
        //setLoad(true)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images"); 

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dglyvyyc8/image/upload`,
                formData
            );
            setUrl(response.data.secure_url);
            saveData()
        } catch (error) {
            toast.error("Error uploading image:", error.message);
        }
    }
        const saveData=async (url)=>{
                try{ 
                    let data={
                        diet,
                        day,
                        meal,
                        time,
                        item,
                        quantity,
                        calorie,
                        recipe,
                        protein,
                        carbohydrates,
                        fats,
                        fibre,
                        sugar,
                        image:url,
                        status:true,
                        createdAt:Timestamp.now()
                    }
                    await addDoc(collection(db, "dietdetails"),data)
                    toast.success("Details added successfully")
                    setDiet("")
                    setDay("")
                    setMeal("")
                    setTime("")
                    setItem("")
                    setQuantity("")
                    setCalorie("")
                    setRecipe("")
                    setProtein("")
                    setCarbohydrates("")
                    setFats("")
                    setFibre("")
                    setSugar("")
                    setImage({})
                    setImageName("")
                    setUrl("")
                }
                catch(error){
                    toast.error(error.message)
                }
                // finally{
                //     setLoad(false)
                // }
            }
            const changeImage=(event)=>{
                setImageName(event.target.value)
                setImage(event.target.files[0])
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
                        Diet details <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Diet details</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    {/* {load ? 
                    <FadeLoader color="#069ad4ff" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                    : */}
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4"> Add details</h3>
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
                                                            <label className="label" htmlFor="diet">
                                                                Diet
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="diet"
                                                                id="diet"
                                                                placeholder="Diet"
                                                                value={diet}
                                                                onChange={(event)=>{
                                                                    setDiet(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="day">
                                                                Day
                                                            </label>
                                                            <input
                                                                type="text"
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
                                                            <label className="label" htmlFor="meal">
                                                            Meal  
                                                            </label>
                                                            <select value={meal}
                                                                onChange={(event)=>{
                                                                setMeal(event.target.value)
                                                            }}className="form-control">
                                                                <option value={""} disabled selected>Select</option>
                                                                <option>Breakfast</option>
                                                                <option>Lunch</option>
                                                                <option>Snacks</option>
                                                                <option>Dinner</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="time">
                                                                time
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="time"
                                                                id="time"
                                                                placeholder="Time"
                                                                value={time}
                                                                onChange={(event)=>{
                                                                    setTime(event.target.value)
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
                                                            <label className="label" htmlFor="quantity">
                                                                Quantity
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="quantity"
                                                                id="quantity"
                                                                placeholder="Quantity"
                                                                value={quantity}
                                                                onChange={(event)=>{
                                                                    setQuantity(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="calorie">
                                                                Calorie
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="calorie"
                                                                id="calorie"
                                                                placeholder="Calorie"
                                                                value={calorie}
                                                                onChange={(event)=>{
                                                                    setCalorie(event.target.value)
                                                            }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="recipe">
                                                                Recipe
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="recipe"
                                                                id="recipe"
                                                                placeholder="Recipe"
                                                                value={recipe}
                                                                onChange={(event)=>{
                                                                    setRecipe(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="protein">
                                                                Protein
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="protein"
                                                                id="protein"
                                                                placeholder="Protein"
                                                                value={protein}
                                                                onChange={(event)=>{
                                                                    setProtein(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="carbohydrates">
                                                                Carbohydrates
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="carbohydrates"
                                                                id="carbohydrates"
                                                                placeholder="Carbohydrates"
                                                                value={carbohydrates}
                                                                onChange={(event)=>{
                                                                    setCarbohydrates(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="fats">
                                                                Fats
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="fats"
                                                                id="fats"
                                                                placeholder="Fats"
                                                                value={fats}
                                                                onChange={(event)=>{
                                                                    setFats(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="fibre">
                                                                Fibre
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="fibre"
                                                                id="fibre"
                                                                placeholder="Fibre"
                                                                value={fibre}
                                                                onChange={(event)=>{
                                                                    setFibre(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="sugar">
                                                                Sugar
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="sugar"
                                                                id="sugar"
                                                                placeholder="Sugar"
                                                                value={sugar}
                                                                onChange={(event)=>{
                                                                    setSugar(event.target.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="Image">
                                                                  Image
                                                                </label>
                                                                <input
                                                                  type="file"
                                                                  className="form-control"
                                                                  name="image"
                                                                  id="image"
                                                                  placeholder="Image"
                                                                  value={imageName}
                                                                  onChange={changeImage}
                                                                />
                                                            </div>
                                                        </div>
                                                    <div className="col-md-6">
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
                {/* }  */}
                </div>
            </section>
        </>
    )
}