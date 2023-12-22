import React from "react";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import OurExperts from "./components/OurExperts";
// import Blogs from "./components/Blogs";
// import PriceTable from "./components/PriceTable";
import Testimonials from "./components/Testimonials";
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
