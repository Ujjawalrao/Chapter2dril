import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import "./App.css";
import Home from "./Pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TshirtNav from "./Pages/TshirtNav";
import ShirtNav from "./Pages/ShirtNav";
import Hoodies from "./Pages/Hoodies";
import Bottom from "./Pages/Bottom";
import Vests from "./Pages/Vests";
import Crops from "./Pages/Crops";
import { useEffect } from "react";
import Sidenav from "./components/Sidenav";
import { easeIn } from "framer-motion/dom";

const locomotiveScroll = new LocomotiveScroll();  

function App() {
  // page routing scroll to top .
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <motion.div
        animate={{
          y: -1700,
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="overflow-y-hidden h-screen w-screen absolute top-0 z-70 bg-white flex justify-center items-center "
      >
        <motion.h1
          animate={{
            y: 10,
          }}
          transition={{
            transition:easeIn,
            delay:1
          }}
          className="font-tactic-sans-bold font-bold text-[1.2rem] lg:text-[80px] tracking-widest uppercase transition-all  text-white mix-blend-difference absolute z-80"
        >
          Chapter2
          <sup className="font-thin text-[40px] font-serif ">&#8482;</sup>{" "}
        </motion.h1>
        <motion.div
          animate={{
            y: -1000,
          }}
          transition={{
            duration: 2,
          }}
          className="bg-black h-screen w-screen "
        ></motion.div>
      </motion.div>
      <Navbar />
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tshirts" element={<TshirtNav />}  />
        <Route path="/Shirts" element={<ShirtNav />} />
        <Route path="/HOODIES" element={<Hoodies />} />
        <Route path="/BOTTOMS" element={<Bottom />} />
        <Route path="/VESTS" element={<Vests />} />
        <Route path="/CROPS" element={<Crops />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
