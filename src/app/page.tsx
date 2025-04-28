import Header from ".././shared/components/Header";
import Footer from ".././shared/components/Footer";
import Content from "../app/home/page";

import { mockData } from '@/mock/mockData';
import "../styles/globals.css";

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