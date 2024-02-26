import Link from "next/link";

export const metadata = {
  title: "FoodPark || Forgot Password",
};

export default function Home() {
  return (
    <>
      <section
        class="fp__breadcrumb"
        style={{ background: `url('/images/counter_bg.jpg')` }}
      >
        <div class="fp__breadcrumb_overlay">
          <div class="container">
            <div class="fp__breadcrumb_text">
              <h1>forgot password</h1>
              <ul>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <a href="#">forgot password</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        class="fp__signin"
        style={{ background: `url('/images/login_bg.jpg')` }}
      >
        <div class="fp__signin_overlay pt_125 xs_pt_95 pb_100 xs_pb_70">
          <div class="container">
            <div class="row wow fadeInUp" data-wow-duration="1s">
              <div class="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
                <div class="fp__login_area">
                  <h2>Welcome back!</h2>
                  <p>forgot password</p>
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
                          <button type="submit" class="common_btn">
                            verify mail
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p class="create_account d-flex justify-content-between">
                    <Link href="/login">login</Link>
                    <Link href="/register">Create Account</Link>
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
