function Blog(){
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
                  <li className="nav-item">
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
                  <li className="nav-item active">
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
                      Blog <i className="ion-ios-arrow-forward" />
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Blog</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 ftco-animate">
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
                      style={{ backgroundImage: 'url("/assets/images/image_4.jpg")' }}
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
                      style={{ backgroundImage: 'url("/assets/images/image_5.jpg")' }}
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="blog-entry align-self-stretch">
                    <a
                      href="blog-single.html"
                      className="block-20 rounded img-2"
                      style={{ backgroundImage: 'url("/assets/images/image_6.jpg")' }}
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
                      <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col text-center">
                      <div className="block-27">
                        <ul>
                          <li>
                            <a href="#">&lt;</a>
                          </li>
                          <li className="active">
                            <span>1</span>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li>
                            <a href="#">5</a>
                          </li>
                          <li>
                            <a href="#">&gt;</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* .col-md-8 */}
                <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
                  <div className="sidebar-box">
                    <form action="#" className="search-form">
                      <div className="form-group">
                        <span className="fa fa-search" />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a keyword and hit enter"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <div className="categories">
                      <h3>Services</h3>
                      <li>
                        <a href="#">
                          Balance Body <span className="ion-ios-arrow-forward" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Physical Activity <span className="ion-ios-arrow-forward" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Fitness Program <span className="ion-ios-arrow-forward" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Healthy Food <span className="ion-ios-arrow-forward" />
                        </a>
                      </li>
                    </div>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <h3>Recent Blog</h3>
                    <div className="block-21 mb-4 d-flex">
                      <a
                        className="blog-img mr-4"
                        style={{ backgroundImage: 'url("/assets/images/image_1.jpg")' }}
                      />
                      <div className="text">
                        <h3 className="heading">
                          <a href="#">
                            Even the all-powerful Pointing has no control about the
                            blind texts
                          </a>
                        </h3>
                        <div className="meta">
                          <div>
                            <a href="#">
                              <span className="icon-calendar" /> Jan. 30, 2020
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-person" /> Admin
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-chat" /> 19
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                      <a
                        className="blog-img mr-4"
                        style={{ backgroundImage: 'url("/assets/images/image_2.jpg")' }}
                      />
                      <div className="text">
                        <h3 className="heading">
                          <a href="#">
                            Even the all-powerful Pointing has no control about the
                            blind texts
                          </a>
                        </h3>
                        <div className="meta">
                          <div>
                            <a href="#">
                              <span className="icon-calendar" /> Jan. 30, 2020
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-person" /> Admin
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-chat" /> 19
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-21 mb-4 d-flex">
                      <a
                        className="blog-img mr-4"
                        style={{ backgroundImage: 'url("/assets/images/image_3.jpg")' }}
                      />
                      <div className="text">
                        <h3 className="heading">
                          <a href="#">
                            Even the all-powerful Pointing has no control about the
                            blind texts
                          </a>
                        </h3>
                        <div className="meta">
                          <div>
                            <a href="#">
                              <span className="icon-calendar" /> Jan. 30, 2020
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-person" /> Admin
                            </a>
                          </div>
                          <div>
                            <a href="#">
                              <span className="icon-chat" /> 19
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <h3>Tag Cloud</h3>
                    <div className="tagcloud">
                      <a href="#" className="tag-cloud-link">
                        food
                      </a>
                      <a href="#" className="tag-cloud-link">
                        life
                      </a>
                      <a href="#" className="tag-cloud-link">
                        coach
                      </a>
                      <a href="#" className="tag-cloud-link">
                        healthy
                      </a>
                      <a href="#" className="tag-cloud-link">
                        lifestyle
                      </a>
                      <a href="#" className="tag-cloud-link">
                        green
                      </a>
                      <a href="#" className="tag-cloud-link">
                        exercise
                      </a>
                      <a href="#" className="tag-cloud-link">
                        dietitian
                      </a>
                    </div>
                  </div>
                  <div className="sidebar-box ftco-animate">
                    <h3>Paragraph</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                      itaque, autem necessitatibus voluptate quod mollitia delectus aut,
                      sunt placeat nam vero culpa sapiente consectetur similique,
                      inventore eos fugit cupiditate numquam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* .section */}
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
export default Blog;