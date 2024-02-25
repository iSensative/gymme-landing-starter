import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Workouts from "./components/Workouts";
import Pricing from "./components/Pricing";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Faq from "../src/components/Faq";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { VoleyPage } from "./pages/VoleyPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  // aos initialization

  Aos.init({
    duration: 2500,
    delay: 400,
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:'/register',
      element:<RegisterPage/>
    },
    {
      path:'/login',
      element:<LoginPage/>
    },
  ]);

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden">
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
