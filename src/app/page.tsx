import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselCustom from "./components/CarouselCustom";
import Content from "./home";
import './globals.css'


export default function Home() {
  return (
    <div className="">
      <Header />
      <CarouselCustom />
      <Content />
      <Footer/>
    </div>
  );
}
