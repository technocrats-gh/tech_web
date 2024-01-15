import React from "react";
import Features from "./pages/Features";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import OurExperts from "./pages/OurExperts";
import Testimonials from "./pages/Testimonials";
import Drawer from "./components/Drawer";
import DrawerNavItem from "./components/DrawerNavItem";
import DrawerFooter from "./components/DrawerFooter";
import { UserGroupIcon, Home, Adjustments, InformationCircle, Chat} from "./components/Icons";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" bg-zinc-900">
      
      <Header setIsOpen={setIsOpen} />

      <Hero />

      <Features />

      <OurExperts/>

      <Testimonials/>

      <Footer/>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawerNavItem path={"home"} label={"Home"} icon={Home} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"services"} label={"What We Specialize In"} icon={Adjustments} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"team"} label={"Our Experts"} icon={UserGroupIcon} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"testimonials"} label={"What Clients Say"} icon={InformationCircle} setIsOpen={setIsOpen} />
        <DrawerNavItem path={"footer"} label={"Contact Us"} icon={Chat} setIsOpen={setIsOpen} />
        <DrawerFooter />
      </Drawer>
    </div>
  );
}

export default App;