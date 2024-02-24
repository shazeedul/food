"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1,
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
    <section className="fp__testimonial pt_95 xs_pt_66 mb_50 xs_mb_120">
      <div className="container">
        <div
          className="row wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
            <div className="fp__section_heading mb_40">
              <h4>testimonial</h4>
              <h2>our customar feedbacks</h2>
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

        <div className="row testi_slider">
          <Slider {...settings}>
            <div
              className="col-xl-4 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_testimonial">
                <div className="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div className="img">
                    <Image
                      src="/images/comment_img_1.png"
                      alt="clients"
                      className="img-fluid w-100"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>isita islam</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div className="fp__single_testimonial_body">
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    accusamus praesentium quaerat nihil magnam a porro eaque
                    numquam
                  </p>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_testimonial">
                <div className="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div className="img">
                    <Image
                      src="/images/comment_img_2.png"
                      alt="clients"
                      className="img-fluid w-100"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>sumon mahmud</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div className="fp__single_testimonial_body">
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    accusamus praesentium quaerat nihil magnam a porro eaque
                    numquam
                  </p>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_testimonial">
                <div className="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div className="img">
                    <Image
                      src="/images/client_img_1.jpg"
                      alt="clients"
                      className="img-fluid w-100"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>israt jahan</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div className="fp__single_testimonial_body">
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    accusamus praesentium quaerat nihil magnam a porro eaque
                    numquam
                  </p>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_testimonial">
                <div className="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div className="img">
                    <Image
                      src="/images/client_img_3.jpg"
                      alt="clients"
                      className="img-fluid w-100"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text">
                    <h4>payel sarkar</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div className="fp__single_testimonial_body">
                  <p className="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    accusamus praesentium quaerat nihil magnam a porro eaque
                    numquam
                  </p>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
