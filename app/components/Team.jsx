"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function Team() {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="fp__team pt_95 xs_pt_65 pb_75">
      <div className="container">
        <div
          className="row wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
            <div className="fp__section_heading mb_25">
              <h4>our team</h4>
              <h2>meet our expert chefs</h2>
              <span>
                <Image
                  src="/images/heading_shapes.png"
                  alt="shapes"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </span>
              <p>
                Objectively pontificate quality models before intuitive
                information. Dramatically recaptiualize multifunctional
                materials.
              </p>
            </div>
          </div>
        </div>

        <div className="row team_slider">
          <Slider {...settings}>
            <div
              className="col-xl-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_team">
                <div className="fp__single_team_img">
                  <Image
                    src="/images/chef_1.jpg"
                    alt="team"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="fp__single_team_text">
                  <h4>ismat joha</h4>
                  <p>senior chef</p>
                  <ul className="d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_team">
                <div className="fp__single_team_img">
                  <Image
                    src="/images/chef_2.jpg"
                    alt="team"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="fp__single_team_text">
                  <h4>arun chandra</h4>
                  <p>senior chef</p>
                  <ul className="d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_team">
                <div className="fp__single_team_img">
                  <Image
                    src="/images/chef_3.jpg"
                    alt="team"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="fp__single_team_text">
                  <h4>isita rahman</h4>
                  <p>senior chef</p>
                  <ul className="d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_team">
                <div className="fp__single_team_img">
                  <Image
                    src="/images/chef_4.jpg"
                    alt="team"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="fp__single_team_text">
                  <h4>khandakar rashed</h4>
                  <p>senior chef</p>
                  <ul className="d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_team">
                <div className="fp__single_team_img">
                  <Image
                    src="/images/chef_5.jpg"
                    alt="team"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="fp__single_team_text">
                  <h4>naurin nipu</h4>
                  <p>senior chef</p>
                  <ul className="d-flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
