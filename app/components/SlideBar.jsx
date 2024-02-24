"use client";
import Slider from "react-slick";

export default function SlideBar() {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    // nextArrow: `<i class="far fa-long-arrow-right nextArrow"></i>`,
    // prevArrow: `<i class="far fa-long-arrow-left prevArrow"></i>`,
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
    <section className="fp__add_slider mt_100 xs_mt_70 pt_100 xs_pt_70 pb_100 xs_pb_70">
      <div className="container">
        <div
          className="row add_slider wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <Slider {...settings}>
            <div className="col-xl-4">
              <a
                href="#"
                className="fp__add_slider_single"
                style={{ backgroundImage: `url(/images/offer_slider_3.png)` }}
              >
                <div className="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
            <div className="col-xl-4">
              <a
                href="#"
                className="fp__add_slider_single"
                style={{ backgroundImage: `url(/images/offer_slider_2.png)` }}
              >
                <div className="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
            <div className="col-xl-4">
              <a
                href="#"
                className="fp__add_slider_single"
                style={{ backgroundImage: `url(/images/offer_slider_1.png)` }}
              >
                <div className="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
            <div className="col-xl-4">
              <a
                href="#"
                className="fp__add_slider_single"
                style={{ backgroundImage: `url(/images/offer_slider_4.png)` }}
              >
                <div className="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
