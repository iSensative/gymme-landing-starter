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
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminPage} from "./AdminPages/AdminPage";

const App = () => {
  // aos initialization

  Aos.init({
    duration: 2500,
    delay: 400,
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
        <Header/>
        <Home />
      </>
      )
    },
    {
      path:'/register',
      element:(
        <>
        <Header />
        <RegisterPage />
        </>
      )
    },
    {
      path:'/login',
      element:(
        <>
        <Header/>
        <LoginPage />
      </>
      )
    },
    {
      path:'/admin',
      element:(
        <>
        <Header/>
        <AdminPage/>
        </>
      )
    },
  ]);

  return (
    <div className="max-w-[1440px] mx-auto bg-[#f4f4f4] overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
