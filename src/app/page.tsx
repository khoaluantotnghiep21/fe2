import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./home";

import { mockData } from '@/mock/mockData';
import './globals.css';

export default function Home() {
  if (!mockData?.carousel || !Array.isArray(mockData.carousel)) {
    return <div>Error: Carousel data not available</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Content />
      </main>
      <Footer />
    </div>
  );
}