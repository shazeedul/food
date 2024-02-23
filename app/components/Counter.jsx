export default function Counter() {
  return (
    <section
      className="fp__counter"
      style={{ backgroundImage: `url(/images/counter_bg2.jpg)` }}
    >
      <div className="fp__counter_overlay pt_100 xs_pt_70 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_counter">
                <i className="fas fa-burger-soda"></i>
                <div className="text">
                  <h2 className="counter">85,000</h2>
                  <p>customer serve</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_counter">
                <i className="fal fa-hat-chef"></i>
                <div className="text">
                  <h2 className="counter">120</h2>
                  <p>experience chef</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_counter">
                <i className="far fa-handshake"></i>
                <div className="text">
                  <h2 className="counter">72,000</h2>
                  <p>happy customer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp"
              // eslint-disable-next-line react/no-unknown-property
              data-wow-duration="1s"
            >
              <div className="fp__single_counter">
                <i className="far fa-trophy"></i>
                <div className="text">
                  <h2 className="counter">30</h2>
                  <p>winning award</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
