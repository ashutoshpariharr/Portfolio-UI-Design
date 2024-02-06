import "./App.css";

import Lenis from "@studio-freight/lenis";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";
import { Logout } from "./pages/Logout";
import AdminLayout from "./layouts/Admin-layout";
import AdminUsers from "./pages/Admin-users";
import AdminContacts from "./pages/Admin-contacts";
import { useEffect, useState } from "react";
import AnimationNav from "./Navbar-animation/AnimationNav";
import Social from "./components/social/Social";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleResize = () => {
      // const newWidth = window.innerWidth;
      // console.log("Window width:", newWidth);
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* Render either AnimationNav or Navbar based on isMobile */}
        {isMobile ? <AnimationNav /> : null}

        <div>
          {!isMobile && <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/social" element={<Social />} />
            <Route path="*" element={<PageNotFound />} />

            {/* Nested Route */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
