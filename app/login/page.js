import Link from "next/link";

export const metadata = {
  title: "FoodPark || Login ",
};

export default function Home() {
  return (
    <>
      <section
        class="fp__breadcrumb"
        style={{ backgroundImage: `url('/images/counter_bg.jpg')` }}
      >
        <div class="fp__breadcrumb_overlay">
          <div class="container">
            <div class="fp__breadcrumb_text">
              <h1>login</h1>
              <ul>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <a href="#">login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        class="fp__signin"
        style={{ backgroundImage: `url('/images/login_bg.jpg')` }}
      >
        <div class="fp__signin_overlay pt_125 xs_pt_95 pb_100 xs_pb_70">
          <div class="container">
            <div class="row wow fadeInUp" data-wow-duration="1s">
              <div class="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
                <div class="fp__login_area">
                  <h2>Welcome back!</h2>
                  <p>login to continue</p>
                  <form>
                    <div class="row">
                      <div class="col-xl-12">
                        <div class="fp__login_imput">
                          <label>email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="fp__login_imput">
                          <label>password</label>
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="fp__login_imput fp__login_check_area">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Remember Me
                            </label>
                          </div>
                          <a href="#">Forgot Password ?</a>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="fp__login_imput">
                          <button type="submit" class="common_btn">
                            login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p class="or">
                    <span>or</span>
                  </p>
                  <ul class="d-flex">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                  <p class="create_account">
                    {`Don't have an aceount ?`}
                    {` `}
                    <Link href="/register">create account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
