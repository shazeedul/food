import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <Image
              src="/images/logo.png"
              alt="FoodPark"
              className="img-fluid"
              width={200}
              height={100}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="far fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  chefs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  pages <i className="far fa-angle-down"></i>
                </a>
                <ul className="droap_menu">
                  <li>
                    <a href="#">menu details</a>
                  </li>
                  <li>
                    <a href="#">blog details</a>
                  </li>
                  <li>
                    <a href="#">cart view</a>
                  </li>
                  <li>
                    <a href="#">checkout</a>
                  </li>
                  <li>
                    <a href="#">payment</a>
                  </li>
                  <li>
                    <a href="#">testimonial</a>
                  </li>
                  <li>
                    <a href="#">search result</a>
                  </li>
                  <li>
                    <a href="#">404/Error</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">sign in</a>
                  </li>
                  <li>
                    <a href="#">sign up</a>
                  </li>
                  <li>
                    <a href="#">forgot password</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                  <li>
                    <a href="#">terms and condition</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blogs.html">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  contact
                </a>
              </li>
            </ul>
            <ul className="menu_icon d-flex flex-wrap">
              <li>
                <a href="#" className="menu_search">
                  <i className="far fa-search"></i>
                </a>
                <div className="fp__search_form">
                  <form>
                    <span className="close_search">
                      <i className="far fa-times"></i>
                    </span>
                    <input type="text" placeholder="Search . . ." />
                    <button type="submit">search</button>
                  </form>
                </div>
              </li>
              <li>
                <a className="cart_icon">
                  <i className="fas fa-shopping-basket"></i> <span>5</span>
                </a>
              </li>
              <li>
                <a href="dashboard.html">
                  <i className="fas fa-user"></i>
                </a>
              </li>
              <li>
                <a
                  className="common_btn"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  reservation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="fp__menu_cart_area">
        <div className="fp__menu_cart_boody">
          <div className="fp__menu_cart_header">
            <h5>total item (05)</h5>
            <span className="close_cart">
              <i className="fal fa-times"></i>
            </span>
          </div>
          <ul>
            <li>
              <div className="menu_cart_img">
                <Image
                  src="/images/menu8.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="menu_cart_text">
                <a className="title" href="#">
                  Hyderabadi Biryani{" "}
                </a>
                <p className="size">small</p>
                <span className="extra">coca-cola</span>
                <span className="extra">7up</span>
                <p className="price">
                  $99.00 <del>$110.00</del>
                </p>
              </div>
              <span className="del_icon">
                <i className="fal fa-times"></i>
              </span>
            </li>
            <li>
              <div className="menu_cart_img">
                <Image
                  src="/images/menu4.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="menu_cart_text">
                <a className="title" href="#">
                  Chicken Masalas
                </a>
                <p className="size">medium</p>
                <span className="extra">7up</span>
                <p className="price">$70.00</p>
              </div>
              <span className="del_icon">
                <i className="fal fa-times"></i>
              </span>
            </li>
            <li>
              <div className="menu_cart_img">
                <Image
                  src="/images/menu5.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="menu_cart_text">
                <a className="title" href="#">
                  Competently Supply Customized Initiatives
                </a>
                <p className="size">large</p>
                <span className="extra">coca-cola</span>
                <span className="extra">7up</span>
                <p className="price">
                  $120.00 <del>$150.00</del>
                </p>
              </div>
              <span className="del_icon">
                <i className="fal fa-times"></i>
              </span>
            </li>
            <li>
              <div className="menu_cart_img">
                <Image
                  src="/images/menu6.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="menu_cart_text">
                <a className="title" href="#">
                  Hyderabadi Biryani
                </a>
                <p className="size">small</p>
                <span className="extra">7up</span>
                <p className="price">$59.00</p>
              </div>
              <span className="del_icon">
                <i className="fal fa-times"></i>
              </span>
            </li>
            <li>
              <div className="menu_cart_img">
                <Image
                  src="/images/menu1.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="menu_cart_text">
                <a className="title" href="#">
                  Competently Supply
                </a>
                <p className="size">medium</p>
                <span className="extra">coca-cola</span>
                <span className="extra">7up</span>
                <p className="price">
                  $99.00 <del>$110.00</del>
                </p>
              </div>
              <span className="del_icon">
                <i className="fal fa-times"></i>
              </span>
            </li>
          </ul>
          <p className="subtotal">
            sub total <span>$1220.00</span>
          </p>
          <a className="cart_view" href="cart_view.html">
            {" "}
            view cart
          </a>
          <a className="checkout" href="check_out.html">
            checkout
          </a>
        </div>
      </div>

      <div className="fp__reservation">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Book a Table
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="fp__reservation_form">
                  <input
                    className="reservation_input"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="reservation_input"
                    type="text"
                    placeholder="Phone"
                  />
                  <input className="reservation_input" type="date" />
                  <select className="reservation_input" id="select_js">
                    <option value="">select time</option>
                    <option value="">08.00 am to 09.00 am</option>
                    <option value="">10.00 am to 11.00 am</option>
                    <option value="">12.00 pm to 01.00 pm</option>
                    <option value="">02.00 pm to 03.00 pm</option>
                    <option value="">04.00 pm to 05.00 pm</option>
                  </select>
                  <select className="reservation_input" id="select_js2">
                    <option value="">select person</option>
                    <option value="">1 person</option>
                    <option value="">2 person</option>
                    <option value="">3 person</option>
                    <option value="">4 person</option>
                    <option value="">5 person</option>
                  </select>
                  <button type="submit">book table</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
