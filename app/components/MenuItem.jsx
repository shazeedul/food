import Image from "next/image";

export default function MenuItem() {
  return (
    <section className="fp__menu mt_95 xs_mt_65">
      <div className="container">
        <div
          className="row wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <div className="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
            <div className="fp__section_heading mb_45">
              <h4>food Menu</h4>
              <h2>Our Popular Delicious Foods</h2>
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
          className="row wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
          <div className="col-12">
            <div className="menu_filter d-flex flex-wrap justify-content-center">
              <button className=" active" data-filter="*">
                all menu
              </button>
              <button
                // eslint-disable-next-line react/no-unknown-property
                data-filter=".burger"
              >
                burger
              </button>
              <button
                // eslint-disable-next-line react/no-unknown-property
                data-filter=".chicken"
              >
                chicken
              </button>
              <button
                // eslint-disable-next-line react/no-unknown-property
                data-filter=".pizza"
              >
                pizza
              </button>
              <button
                // eslint-disable-next-line react/no-unknown-property
                data-filter=".dresserts"
              >
                dresserts
              </button>
            </div>
          </div>
        </div>

        <div className="row grid">
          <div
            className="col-xl-3 col-sm-6 col-lg-4 burger pizza wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_1.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  Biryani
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>10</span>
                </p>
                <a className="title" href="menu_details.html">
                  Hyderabadi biryani
                </a>
                <h5 className="price">$70.00</h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  chicken dresserts wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_2.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  chicken
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>145</span>
                </p>
                <a className="title" href="menu_details.html">
                  chicken Masala
                </a>
                <h5 className="price">
                  $80.00 <del>90.00</del>
                </h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  chicken dresserts wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_3.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  grill
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>54</span>
                </p>
                <a className="title" href="menu_details.html">
                  daria shevtsova
                </a>
                <h5 className="price">$99.00</h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  burger pizza wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_4.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  chicken
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>74</span>
                </p>
                <a className="title" href="menu_details.html">
                  chicken Masala
                </a>
                <h5 className="price">
                  $80.00 <del>90.00</del>
                </h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  chicken dresserts wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_5.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  chicken
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>120</span>
                </p>
                <a className="title" href="menu_details.html">
                  chicken Masala
                </a>
                <h5 className="price">
                  $80.00 <del>90.00</del>
                </h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  burger pizza wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_6.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  Biryani
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>514</span>
                </p>
                <a className="title" href="menu_details.html">
                  Hyderabadi biryani
                </a>
                <h5 className="price">$70.00</h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  chicken dresserts wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_7.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  grill
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>25</span>
                </p>
                <a className="title" href="menu_details.html">
                  daria shevtsova
                </a>
                <h5 className="price">$99.00</h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
          <div
            className="col-xl-3 col-sm-6 col-lg-4  burger pizza wow fadeInUp"
            // eslint-disable-next-line react/no-unknown-property
            data-wow-duration="1s"
          >
            <div className="fp__menu_item">
              <div className="fp__menu_item_img">
                <Image
                  src="/images/menu2_img_8.jpg"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
                <a className="category" href="#">
                  chicken
                </a>
              </div>
              <div className="fp__menu_item_text">
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>324</span>
                </p>
                <a className="title" href="menu_details.html">
                  chicken Masala
                </a>
                <h5 className="price">
                  $80.00 <del>90.00</del>
                </h5>
                <ul className="d-flex flex-wrap justify-content-center">
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
        </div>
      </div>
    </section>
  );
}
