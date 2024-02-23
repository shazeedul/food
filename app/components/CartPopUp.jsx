import Image from "next/image";

export default function CartPopUp() {
  return (
    <div className="fp__cart_popup">
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                // eslint-disable-next-line react/no-unknown-property
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fal fa-times"></i>
              </button>
              <div className="fp__cart_popup_img">
                <Image
                  src="/images/menu1.png"
                  alt="menu"
                  className="img-fluid w-100"
                  width={100}
                  height={100}
                />
              </div>
              <div className="fp__cart_popup_text">
                <a href="#" className="title">
                  Maxican Pizza Test Better
                </a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>(201)</span>
                </p>
                <h4 className="price">
                  $320.00 <del>$350.00</del>{" "}
                </h4>

                <div className="details_size">
                  <h5>select size</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="large"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="large">
                      large <span>+ $350</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="medium"
                    />
                    <label className="form-check-label" htmlFor="medium">
                      medium <span>+ $250</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="small"
                    />
                    <label className="form-check-label" htmlFor="small">
                      small <span>+ $150</span>
                    </label>
                  </div>
                </div>

                <div className="details_extra_item">
                  <h5>
                    select option <span>(optional)</span>
                  </h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="coca-cola"
                    />
                    <label className="form-check-label" htmlFor="coca-cola">
                      coca-cola <span>+ $10</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="7up"
                    />
                    <label className="form-check-label" htmlFor="7up">
                      7up <span>+ $15</span>
                    </label>
                  </div>
                </div>

                <div className="details_quentity">
                  <h5>select quentity</h5>
                  <div className="quentity_btn_area d-flex flex-wrapa align-items-center">
                    <div className="quentity_btn">
                      <button className="btn btn-danger">
                        <i className="fal fa-minus"></i>
                      </button>
                      <input type="text" placeholder="1" />
                      <button className="btn btn-success">
                        <i className="fal fa-plus"></i>
                      </button>
                    </div>
                    <h3>$320.00</h3>
                  </div>
                </div>
                <ul className="details_button_area d-flex flex-wrap">
                  <li>
                    <a className="common_btn" href="#">
                      add to cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
