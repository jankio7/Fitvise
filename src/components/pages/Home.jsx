export default function Home(){
    return(
       <>
          <div className="wrap">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col d-flex align-items-center">
                  <p className="mb-0 phone">
                    <span className="mailus">Phone no:</span>{" "}
                    <a href="#">+00 1234 567</a> or{" "}
                    <span className="mailus">email us:</span>{" "}
                    <a href="#">emailsample@email.com</a>
                  </p>
                </div>
                <div className="col d-flex justify-content-end">
                  <div className="social-media">
                    <p className="mb-0 d-flex">
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook">
                          <i className="sr-only">Facebook</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter">
                          <i className="sr-only">Twitter</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram">
                          <i className="sr-only">Instagram</i>
                        </span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-dribbble">
                          <i className="sr-only">Dribbble</i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
          >
            <div className="container">
              <a className="navbar-brand" href="index.html">
                Health
                <span>
                  coach
                  <i className="fa fa-leaf" />
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars" /> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a href="index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="coach.html" className="nav-link">
                      Coach
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pricing.html" className="nav-link">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="services.html" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="success-stories.html" className="nav-link">
                      Stories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* END nav */}
          <div className="hero-wrap js-fullheight">
            <div className="home-slider owl-carousel js-fullheight">
              <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(/assets/images/bg_1.jpg)" }}
              >
                <div className="overlay" />
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-7 ftco-animate">
                      <div className="text w-100">
                        <h2>Welcome to Health Coach</h2>
                        <h1 className="mb-4">
                          Get in shape faster, live your happy life
                        </h1>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Learn more
                          </a>{" "}
                          <a href="#" className="btn btn-white">
                            Contact us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(/assets/images/bg_2.jpg)" }}
              >
                <div className="overlay" />
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center">
                    <div className="col-md-7 ftco-animate">
                      <div className="text w-100">
                        <h2>A Fresh approach to healthy life</h2>
                        <h1 className="mb-4 color-white">
                          Unlock your potential with good nutrition
                        </h1>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Learn more
                          </a>{" "}
                          <a href="#" className="btn btn-white">
                            Contact us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slider-item js-fullheight"
                style={{ backgroundImage: "url(/assets/images/bg_3.jpg)" }}
              >
                <div className="overlay" />
                <div className="container">
                  <div className="row no-gutters slider-text align-items-center justify-content-end">
                    <div className="col-md-6 ftco-animate">
                      <div className="text w-100">
                        <h2>Welcome Health Coach</h2>
                        <h1 className="mb-4">
                          You can transform health through habit change
                        </h1>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Learn more
                          </a>{" "}
                          <a href="#" className="btn btn-white">
                            Contact us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-section ftco-services">
            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block services-wrap text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(/assets/images/services-1.jpg)" }}
                    />
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Exercise Program</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary btn-outline-primary">
                          Read more
                        </a>
                      </p>
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
                      <h3 className="heading">Nutrition Plans</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary btn-outline-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block services-wrap text-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(/assets/images/services-3.jpg)" }}
                    />
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Diet Program</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary btn-outline-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
            <div className="container">
              <div className="row no-gutters">
                <div
                  className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0"
                  style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
                ></div>
                <div className="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                  <div className="heading-section mb-5">
                    <div className="pl-md-5">
                      <span className="subheading mb-2">Welcome to Healthcare</span>
                      <h2 className="mb-2">
                        Hello! Health Care is a natural way of improving your health
                      </h2>
                    </div>
                  </div>
                  <div className="pl-md-5">
                    <p>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic country, in
                      which roasted parts of sentences fly into your mouth. Even the
                      all-powerful Pointing has no control about the blind texts it is
                      an almost unorthographic life One day however a small line of
                      blind text by the name of Lorem Ipsum decided to leave for the far
                      World of Grammar.
                    </p>
                    <p>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic country, in
                      which roasted parts of sentences fly into your mouth.
                    </p>
                    <div className="founder d-flex align-items-center mt-5">
                      <div
                        className="img"
                        style={{ backgroundImage: "url(/assets/images/coach-1.jpg)" }}
                      />
                      <div className="text pl-3">
                        <h3 className="mb-0">Cythia Hunter</h3>
                        <span className="position">Personal Dietitian</span>
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
                    <h3 className="mb-4">Healthcare Services</h3>
                    <p>A small river named Duden flows by their place and supplies</p>
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
                    <p>A small river named Duden flows by their place and supplies</p>
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
                          style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                        ></div>
                        <div className="text pl-4">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left" />
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <p className="name">Racky Henderson</p>
                          <span className="position">Father</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{ backgroundImage: "url(/assets/images/person_2.jpg)" }}
                        ></div>
                        <div className="text pl-4">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left" />
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <p className="name">Henry Dee</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{ backgroundImage: "url(/assets/images/person_3.jpg)" }}
                        ></div>
                        <div className="text pl-4">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left" />
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <p className="name">Mark Huff</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{ backgroundImage: "url(/assets/images/person_4.jpg)" }}
                        ></div>
                        <div className="text pl-4">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left" />
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <p className="name">Rodel Golez</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap d-flex">
                        <div
                          className="user-img"
                          style={{ backgroundImage: "url(/assets/images/person_1.jpg)" }}
                        ></div>
                        <div className="text pl-4">
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="fa fa-quote-left" />
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind
                            texts.
                          </p>
                          <p className="name">Ken Bosh</p>
                          <span className="position">Businesswoman</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading mb-3">Other Services</span>
                  <h2>How it works?</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-diet" />
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Follow the program</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-workout" />
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Work for result</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-diet-1" />
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Eat healthy food</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex services align-self-stretch px-4 ftco-animate">
                  <div className="d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-first" />
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Enjoy your life</h3>
                      <p>
                        Even the all-powerful Pointing has no control about the blind
                        texts it is an almost unorthographic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pb bg-light">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading mb-3">Stories</span>
                  <h2>Successfull Stories</h2>
                </div>
              </div>
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-stories owl-carousel">
                    <div className="item">
                      <div className="row justify-content-center">
                        <div className="col-md-11">
                          <div className="stories-wrap d-md-flex">
                            <div
                              className="img"
                              style={{ backgroundImage: "url(/assets/images/person-1.jpg)" }}
                            />
                            <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                              <div className="desc w-100">
                                <p>
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <p className="mb-5">
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <div className="pt-4">
                                  <p className="name mb-0">Joy Smith</p>
                                  <span className="position">Client/Manager</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row justify-content-center">
                        <div className="col-md-11">
                          <div className="stories-wrap d-md-flex">
                            <div
                              className="img"
                              style={{ backgroundImage: "url(/assets/images/person-2.jpg)" }}
                            />
                            <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                              <div className="desc w-100">
                                <p>
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <p className="mb-5">
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <div className="pt-4">
                                  <p className="name mb-0">Rony Smith</p>
                                  <span className="position">Client/Messenger</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row justify-content-center">
                        <div className="col-md-11">
                          <div className="stories-wrap d-md-flex">
                            <div
                              className="img"
                              style={{ backgroundImage: "url(/assets/images/person-3.jpg)" }}
                            />
                            <div className="text p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                              <div className="desc w-100">
                                <p>
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <p className="mb-5">
                                  A small river named Duden flows by their place and
                                  supplies it with the necessary regelialia. It is a
                                  paradisematic country, in which roasted parts of
                                  sentences fly into your mouth.
                                </p>
                                <div className="pt-4">
                                  <p className="name mb-0">John Doe</p>
                                  <span className="position">Client</span>
                                </div>
                              </div>
                            </div>
                          </div>
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
            style={{ backgroundImage: "url(/assets/images/bg_1.jpg)" }}
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
        {/* <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">Other Services</span>
            <h2>How it works</h2>
          </div>
        </div>
              <div class="row d-flex no-gutters">
                <div class="col-md-6 d-flex">
                  <div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end mb-4 mb-sm-0" style="background-image:url(images/about.jpg);">
                  </div>
                </div>
                <div class="col-md-6 pl-md-5 py-md-5">
                  <div class="services-2 w-100 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-account"></span></div>
                    <div class="text pl-4">
                      <h4>Follow the program</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                  </div>
                  <div class="services-2 w-100 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-skills"></span></div>
                    <div class="text pl-4">
                      <h4>Work for result</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                  </div>
                  <div class="services-2 w-100 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-performance"></span></div>
                    <div class="text pl-4">
                      <h4>Eat healthy Food</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                  </div>
                  <div class="services-2 w-100 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-event"></span></div>
                    <div class="text pl-4">
                      <h4>Enjoy your life</h4>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="ftco-section bg-light">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading mb-3">Price &amp; Plans</span>
                  <h2>Choose Your Perfect Plans</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="block-7">
                    <div className="text-center">
                      <h4 className="heading-2">Starter</h4>
                      <span className="excerpt d-block">A Beautiful Healthcare</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">49</span>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />
                          20 Workouts
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Meal plans in mobile
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          One Coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          -50% Group coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          24/7 Customer support
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary px-4 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="block-7">
                    <div className="text-center">
                      <h4 className="heading-2">Standard</h4>
                      <span className="excerpt d-block">A Beautiful Healthcare</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">79</span>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />
                          20 Workouts
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Meal plans in mobile
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          One Coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          -50% Group coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          24/7 Customer support
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary px-4 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="block-7">
                    <div className="text-center">
                      <h4 className="heading-2">Premium</h4>
                      <span className="excerpt d-block">A Beautiful Healthcare</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">109</span>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />
                          20 Workouts
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Meal plans in mobile
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          One Coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          -50% Group coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          24/7 Customer support
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary px-4 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                  <div className="block-7">
                    <div className="text-center">
                      <h4 className="heading-2">Platinum</h4>
                      <span className="excerpt d-block">A Beautiful Healthcare</span>
                      <span className="price">
                        <sup>$</sup> <span className="number">159</span>
                      </span>
                      <ul className="pricing-text mb-5">
                        <li>
                          <span className="fa fa-check mr-2" />
                          20 Workouts
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          Meal plans in mobile
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          One Coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          -50% Group coaching
                        </li>
                        <li>
                          <span className="fa fa-check mr-2" />
                          24/7 Customer support
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary px-4 py-3">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center pb-5 mb-3">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <h2>Latest news from our blog</h2>
                  <span className="subheading">News &amp; Blog</span>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_1.jpg")' }}
                    ></a>
                    <div className="text mt-3">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">January 30, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
                    ></a>
                    <div className="text mt-3">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">January 30, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded"
                      style={{ backgroundImage: 'url("/assets/images/image_3.jpg")' }}
                    ></a>
                    <div className="text mt-3">
                      <div className="meta mb-2">
                        <div>
                          <a href="#">January 30, 2020</a>
                        </div>
                        <div>
                          <a href="#">Admin</a>
                        </div>
                        <div>
                          <a href="#" className="meta-chat">
                            <span className="fa fa-comment" /> 3
                          </a>
                        </div>
                      </div>
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control about the blind
                          texts
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section class="ftco-section ftco-no-pb ftco-no-pt">
            <div class="container">
              <div class="row">
                      <div class="col-md-12">
                        <div class="bg-secondary w-100 rounded p-4">
                          <div class="row">
                            <div class="col-md-7 d-flex align-items-center">
                              <h2 class="mb-3 mb-sm-0" style="color:black; font-size: 18px;">Subcribe for our weekly tips</h2>
                            </div>
                            <div class="col-md-5 d-flex align-items-center">
                              <form action="#" class="subscribe-form">
                                <div class="form-group d-flex">
                                  <input type="text" class="form-control" placeholder="Enter email address">
                                  <input type="submit" value="Subscribe" class="submit px-3">
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          </section> */}
          <footer className="footer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-lg-6">
                  <div className="subscribe mb-5">
                    <form action="#" className="subscribe-form">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control rounded-left"
                          placeholder="Enter email address"
                        />
                        <input
                          type="submit"
                          defaultValue="Subscribe"
                          className="form-control submit px-3"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-5">
                  <div className="row">
                    <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                      <h2 className="footer-heading">
                        <a href="#" className="logo">
                          Health<span>care</span>
                        </a>
                      </h2>
                      <p>
                        A small river named Duden flows by their place and supplies it
                        with the necessary regelialia.
                      </p>
                      <a href="#">
                        read more <span className="ion-ios-arrow-round-forward" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-7">
                  <div className="row">
                    <div className="col-md-3 mb-md-0 mb-4 border-left">
                      <h2 className="footer-heading">Services</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-1 d-block">
                            Balance Body
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Physical Activity
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Fitness Program
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Healthy Food
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-4 border-left">
                      <h2 className="footer-heading">About</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-1 d-block">
                            Staff
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-4 border-left">
                      <h2 className="footer-heading">Resources</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-1 d-block">
                            Security
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Global
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Charts
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-4 border-left">
                      <h2 className="footer-heading">Social</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-1 d-block">
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 d-block">
                            Google
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 col-lg-8">
                  <p className="copyright">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib.com
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 text-md-right">
                  <p className="mb-0 list-unstyled">
                    <a className="mr-md-3" href="#">
                      Terms
                    </a>
                    <a className="mr-md-3" href="#">
                      Privacy
                    </a>
                    <a className="mr-md-3" href="#">
                      Compliances
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
 
    )
}