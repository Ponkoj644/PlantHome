import "./App.css";

// import component
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

// import Routes & Route
import { Route, Routes } from "react-router-dom";

// import Pages
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";
import PlantsPage from "./Pages/PlantsPage/PlantsPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Plants" element={<PlantsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
