export default function Register(){
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
                        Register <i className="ion-ios-arrow-forward" />
                      </span>
                    </p>
                    <h1 className="mb-0 bread">Register</h1>
                  </div>
                </div>
              </div>
          </section>
            <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Register</h3>
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
                                    <label className="label" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="email">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="subject">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label className="label" htmlFor="subject">
                                        Contact
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        placeholder="Contact"
                                        minLength={10}
                                        maxLength={10}
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
        </>
    )
}