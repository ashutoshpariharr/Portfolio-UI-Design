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
import AdminLayout from './layouts/Admin-layout'
import AdminUsers from "./pages/Admin-users";
import AdminContacts from "./pages/Admin-contacts";
import { useEffect } from "react";
import Footer from "./pages/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Nested Route */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
