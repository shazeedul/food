"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function OfferItem() {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    // nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    // prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

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
          slidesToShow: 1,
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
    <section className="fp__offer_item mt_100 xs_mt_70 pt_95 xs_pt_65 pb_150 xs_pb_120">
      <div className="container">
        <div
          className="row wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
            <div className="fp__section_heading mb_50">
              <h4>daily offer</h4>
              <h2>up to 75% off for this day</h2>
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

        <div
          className="row offer_item_slider wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <Slider {...settings}>
            <div className="col-xl-4">
              <div className="fp__offer_item_single">
                <div className="img">
                  <Image
                    src="/images/slider_img_1.png"
                    alt="offer"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text">
                  <span>30% off</span>
                  <a className="title" href="menu_details.html">
                    Dal Makhani Paneer
                  </a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a
                        href="#"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-toggle="modal"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-target="#cartModal"
                      >
                        <i className="fas fa-shopping-basket"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="fp__offer_item_single">
                <div className="img">
                  <Image
                    src="/images/slider_img_2.png"
                    alt="offer"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text">
                  <span>40% off</span>
                  <a className="title" href="menu_details.html">
                    Hyderabadi biryani
                  </a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a
                        href="#"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-toggle="modal"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-target="#cartModal"
                      >
                        <i className="fas fa-shopping-basket"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="fp__offer_item_single">
                <div className="img">
                  <Image
                    src="/images/slider_img_3.png"
                    alt="offer"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text">
                  <span>55% off</span>
                  <a className="title" href="menu_details.html">
                    Beef Masala Salad
                  </a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a
                        href="#"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-toggle="modal"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-target="#cartModal"
                      >
                        <i className="fas fa-shopping-basket"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="fp__offer_item_single">
                <div className="img">
                  <Image
                    src="/images/slider_img_2.png"
                    alt="offer"
                    className="img-fluid w-100"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text">
                  <span>45% off</span>
                  <a className="title" href="menu_details.html">
                    Indian cuisine Pakora
                  </a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a
                        href="#"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-toggle="modal"
                        // eslint-disable-next-line react/no-unknown-property
                        data-bs-target="#cartModal"
                      >
                        <i className="fas fa-shopping-basket"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-eye"></i>
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
