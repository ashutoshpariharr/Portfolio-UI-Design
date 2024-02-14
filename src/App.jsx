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

import LoadingBar from "react-top-loading-bar";
import GetSingleUser from "./pages/GetSingleUser";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, []);

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

        <LoadingBar height={4}
          color="#d5c455"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div>
          {!isMobile && <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<About setProgress={setProgress} />}
            />
            <Route
              path="/contact"
              element={<Contact setProgress={setProgress} />}
            />
            <Route
              path="/service"
              element={<Service setProgress={setProgress} />}
            />
            <Route
              path="/register"
              element={<Register setProgress={setProgress} />}
            />
            <Route
              path="/login"
              element={<Login setProgress={setProgress} />}
            />
            <Route
              path="/logout"
              element={<Logout setProgress={setProgress} />}
            />
            <Route
              path="/social"
              element={<Social setProgress={setProgress} />}
            />
            <Route
              path="*"
              element={<PageNotFound setProgress={setProgress} />}
            />

            {/* Nested Route */}
            <Route
              path="/admin"
              element={<AdminLayout setProgress={setProgress} />}
            >
              <Route
                path="users"
                element={<AdminUsers setProgress={setProgress} />}
              />
              <Route
                path="contacts"
                element={<AdminContacts setProgress={setProgress} />}
              />
              <Route path="/admin/user/:id/edit" element={<GetSingleUser />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
