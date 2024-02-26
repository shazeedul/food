import "./../public/css/style.css";
import "./../public/css/all.min.css";
import "./../public/css/animate.css";
import "./../public/css/responsive.css";
import "./../public/css/nice-select.css";
import "./../public/css/spacing.css";
import "./../public/css/venobox.min.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import OfferItem from "./components/OfferItem";
import CartPopUp from "./components/CartPopUp";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import MenuItem from "./components/MenuItem";
import SlideBar from "./components/SlideBar";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import BlogHome from "./components/BlogHome";

export default function Home() {
  return (
    <main className={``}>
      <TopBar />
      <NavBar />
      <Banner />
      <WhyChoose />
      <OfferItem />
      <CartPopUp />
      <MenuItem />
      <SlideBar />
      <Team />
      <Counter />
      <Testimonial />
      <BlogHome />
      <Footer />
      <ScrollTop />
    </main>
  );
}
