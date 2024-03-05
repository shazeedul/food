import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import OfferItem from "./components/OfferItem";
import CartPopUp from "./components/CartPopUp";
import MenuItem from "./components/MenuItem";
import SlideBar from "./components/SlideBar";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Counter from "./components/Counter";
import BlogHome from "./components/BlogHome";
import Script from "next/script";

export default function Home() {
  return (
    <>
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
      <Script src="/js/isotop.js" />
    </>
  );
}
