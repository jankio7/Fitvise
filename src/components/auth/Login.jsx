import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>             
            <section className="ftco-section bg-light">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                    <div className="wrapper">
                        <div className="row no-gutters">
                        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4">Login</h3>
                                <div id="form-message-warning" className="mb-4" />
                            <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                            </div>
                            <form
                                method="POST"
                                id="contactForm"
                                name="contactForm"
                                className="contactForm"
                            >
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label className="label" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="subject">
                                    Password
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Password"
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Submit"
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
                                <div className="dbox w-100 d-flex align-items-start"
                                
                                style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
                            ></div>  
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <div id="map" className="map" />
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}