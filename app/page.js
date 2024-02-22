import TopBar from "./components/TopBar";
import "./../public/css/style.css";
import "./../public/css/all.min.css";
import "./../public/css/animate.css";
import "./../public/css/responsive.css";
import "./../public/css/nice-select.css";
import "./../public/css/slick.css";
import "./../public/css/spacing.css";
import "./../public/css/venobox.min.css";
import "./../public/css/jquery.exzoom.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import OfferItem from "./components/OfferItem";
import CartPopUp from "./components/CartPopUp";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  return (
    <main className={``}>
      <TopBar />
      <NavBar />
      <Banner />
      <WhyChoose />
      <OfferItem />
      <CartPopUp />
      <Footer />
      <ScrollTop />
    </main>
  );
}
