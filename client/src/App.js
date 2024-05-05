import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import NasaData from "./components/NasaAPI/nasaData.js";
import MarsDataPage from "./Page/Nasa.js";
import Destination from "./components/destination.js";
import Crew from "./components/crew.js";
import Technology from "./components/technology.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginscreen from "./components/User/Loginscreen.js";
import Registerscreen from "./components/User/Registerscreen.js";
import { useSelector } from "react-redux";
import ImageDisplay from "./components/Mars/ImageDisplay.js";
import BaseLayout from "./components/Mars/BaseLayout.js";
import GetImageForm from "./components/Mars/GetImageForm.js";

function App(props) {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  // Define isLoggedIn function
  const isLoggedIn = () => {
    if (!currentUser) {
      return false;
    }
    return true;
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/nasa-apod" element={<MarsDataPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        {/* Use isLoggedIn function to conditionally render NasaData route */}
        <Route
          path="/nasa-photo"
          element={isLoggedIn() ? <NasaData /> : <Loginscreen />}
        />
        <Route
          path="/mars"
          element={isLoggedIn() ? <GetImageForm /> : <Loginscreen />}
        />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;
