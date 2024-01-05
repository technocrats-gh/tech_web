import React from "react";
// import Benefits from "./components/Benefits";
import Features from "./pages/Features";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import OurExperts from "./pages/OurExperts";
// import Blogs from "./components/Blogs";
// import PriceTable from "./components/PriceTable";
import Testimonials from "./pages/Testimonials";
// import BottomCTA from "./components/BottomCTA";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" bg-zinc-900">
      
      <Header setIsOpen={setIsOpen} />

      <Hero />

      <Features />

      {/* <Benefits/> */}

      <OurExperts/>

      {/* <Blogs/> */}

      {/* <PriceTable/> */}

      <Testimonials/>

      {/* <BottomCTA/> */}

      <Footer/>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </div>
  );
}

export default App;
