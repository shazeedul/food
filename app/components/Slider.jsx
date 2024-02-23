export default function Slider() {
  return (
    <section className="fp__add_slider mt_100 xs_mt_70 pt_100 xs_pt_70 pb_100 xs_pb_70">
      <div className="container">
        <div
          className="row add_slider wow fadeInUp"
          // eslint-disable-next-line react/no-unknown-property
          data-wow-duration="1s"
        >
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
        </div>
      </div>
    </section>
  );
}
