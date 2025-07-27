function About(){
    return (
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
                        About us <i className="ion-ios-arrow-forward" />
                      </span>
                    </p>
                    <h1 className="mb-0 bread">About Us</h1>
                  </div>
                </div>
              </div>
          </section>
          <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
              <div className="container">
                <div className="row no-gutters">
                  <div
                    className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0"
                    style={{ backgroundImage: 'url("/assets/images/coach-1.jpg")' }}
                  ></div>
                  <div className="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                    <div className="heading-section mb-5">
                      <div className="pl-md-5">
                        <span className="subheading mb-2">Welcome to Fit Vise</span>
                        <h2 className="mb-2">
                          Hello! Fit Vise is a natural way of improving your health
                        </h2>
                      </div>
                    </div>
                    <div className="pl-md-5">
                      <p>
                        The Fitvise is a health and wellness initiative aimed at promoting a balanced lifestyle through personalized fitness and nutrition guidance. Designed to support individuals of all ages and fitness levels. Fitvise combines expert advice, digital tools, and community support to help users set realistic health goals and track their progress. The project emphasizes holistic well-being by integrating physical activity, diet planning, mental health resources, and regular assessments. With a user-friendly platform and evidence-based strategies. Fitvise encourages sustainable habits, empowering people to take control of their health and achieve long-term fitnes outcomes.
                      </p>
                      <p>
                        Fitvise is a comprehensive fitness platform that provides personalized workout plans, nutrition advice, and progress tracking. It empowers users to achieve their health goals through data-driven insights, expert guidance, and a supportive fitness community.
                      </p>
                      <div className="founder d-flex align-items-center mt-5">
                        <div
                          className="img"
                          style={{ backgroundImage: 'url("/assets/images/coach-1.jpg")' }}
                        />
                        <div className="text pl-3">
                          <h3 className="mb-0">Fitvise</h3>
                          <span className="position">Fitness Platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section className="ftco-section ftco-no-pt ftco-no-pb">
              <div className="container-fluid px-md-0">
                <div className="row no-gutters">
                  <div className="col-md-3 d-flex align-items-stretch">
                    <div className="consultation w-100 text-center px-4 px-md-5">
                      <h3 className="mb-4">Fitvise Services</h3>
                      <p>Fitvise offers personalized fitness plans, tracking, and community support.</p>
                      <a href="#" className="btn-custom">
                        See Services
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="consultation consul w-100 px-4 px-md-5">
                      <div className="text-center">
                        <h3 className="mb-4">Free Consultation</h3>
                      </div>
                      <form action="#" className="appointment-form">
                        <div className="row">
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon">
                                    <span className="fa fa-chevron-down" />
                                  </div>
                                  <select name="" id="" className="form-control">
                                    <option value="">Services</option>
                                    <option value="">Services 1</option>
                                    <option value="">Services 2</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <div className="input-wrap">
                                <div className="icon">
                                  <span className="ion-md-calendar" />
                                </div>
                                <input
                                  type="text"
                                  className="form-control appointment_date"
                                  placeholder="Date"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <div className="input-wrap">
                                <div className="icon">
                                  <span className="ion-ios-clock" />
                                </div>
                                <input
                                  type="text"
                                  className="form-control appointment_time"
                                  placeholder="Time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="form-group">
                              <input
                                type="submit"
                                defaultValue="Appointment"
                                className="btn btn-white py-2 px-4"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-stretch">
                    <div className="consultation w-100 text-center px-4 px-md-5">
                      <h3 className="mb-4">Find A Health Expert</h3>
                      <p>Fitvise offers personalized fitness plans, tracking, and community support.</p>
                      <a href="#" className="btn-custom">
                        Meet our health coach
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section className="ftco-section testimony-section bg-light">
              <div className="container">
                <div className="row justify-content-center pb-5 mb-3">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                    <span className="subheading mb-3">Testimonies</span>
                    <h2>Happy Clients &amp; Feedbacks</h2>
                  </div>
                </div>
                <div className="row ftco-animate">
                  <div className="col-md-12">
                    <div className="carousel-testimony owl-carousel">
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img"
                            style={{ backgroundImage: 'url("/assets/images/person_1.jpg")' }}
                          ></div>
                          <div className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left" />
                            </span>
                            <p>
                              Fitvise offers personalized fitness plans, tracking, and community support.
                            </p>
                            <p className="name">Fitvise</p>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img"
                            style={{ backgroundImage: 'url("/assets/images/person_2.jpg")' }}
                          ></div>
                          <div className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left" />
                            </span>
                            <p>
                              Fitvise offers personalized fitness plans, tracking, and community support.
                            </p>
                            <p className="name">Fitvise</p>
                            <span className="position">Fitness Platform</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img"
                            style={{ backgroundImage: 'url("/assets/images/person_3.jpg")' }}
                          ></div>
                          <div className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left" />
                            </span>
                            <p>
                              Fitvise offers personalized fitness plans, tracking, and community support.
                            </p>
                            <p className="name">Fitvise</p>
                            <span className="position">Fitness Platform</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img"
                            style={{ backgroundImage: 'url("/assets/images/person_4.jpg")' }}
                          ></div>
                          <div className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left" />
                            </span>
                            <p>
                              Fitvise offers personalized fitness plans, tracking, and community support.
                            </p>
                            <p className="name">Fitvise</p>
                            <span className="position">Fitness Platform</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img"
                            style={{ backgroundImage: 'url("/assets/images/person_1.jpg")' }}
                          ></div>
                          <div className="text pl-4">
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="fa fa-quote-left" />
                            </span>
                            <p>
                              Fitvise offers personalized fitness plans, tracking, and community support.
                            </p>
                            <p className="name">Fitvise</p>
                            <span className="position">Fitness Platform</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section
              className="ftco-intro"
              style={{ backgroundImage: 'url("/assets/images/bg_1.jpg")' }}
              data-stellar-background-ratio="0.5"
            >
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <h2>We Provide Free Health Care Consultation</h2>
                    <p className="mb-0">
                      Your Health is Our Top Priority with Comprehensive, Affordable
                      Health.
                    </p>
                    <p />
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className="mb-0">
                      <a href="#" className="btn btn-white px-4 py-3">
                        Free Consutation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
          </section>
          <section className="ftco-section ftco-counter" id="section-counter">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={50}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Years of Experienced</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={8500}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Successful Entrepreneurs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={378}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Companies Founded</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={1200}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Book, DVD's and Podcasts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        </>

    )
}
export default About;