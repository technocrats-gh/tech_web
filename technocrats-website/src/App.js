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
import DrawerNavItem from "./components/DrawerNavItem";
import DrawerFooter from "./components/DrawerFooter";
import { UserGroupIcon } from "./components/Icons";

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
        <DrawerNavItem path={"home"} label={"Home"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"services"} label={"What We Specialize In"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"team"} label={"Our Experts"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"testimonials"} label={"What Clients Say"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"contactUs"} label={"Contact Us"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerFooter />
      </Drawer>
    </div>
  );
}

export default App;
