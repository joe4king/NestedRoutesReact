import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import HomeSub1 from "./pages/Home/HomeSub1";
import HomeSub2 from "./pages/Home/HomeSub2";

import About from "./pages/About/About";
import AboutTeam from "./pages/About/AboutTeam";
import AboutHistory from "./pages/About/AboutHistory";

import Contact from "./pages/Contact/Contact";
import ContactEmail from "./pages/Contact/ContactEmail";
import ContactPhone from "./pages/Contact/ContactPhone";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// ... existing imports

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<div><h2>Welcome Home</h2></div>} />
            <Route path="sub1" element={<HomeSub1 />} />
            <Route path="sub2" element={<HomeSub2 />} />
          </Route>

          <Route path="about" element={<About />}>
            <Route index element={<div><h2>About Us</h2></div>} />
            <Route path="team" element={<AboutTeam />} />
            <Route path="history" element={<AboutHistory />} />
          </Route>

          {/* 🔒 Only logged-in users can open Contact */}
          <Route
            path="contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          >
            <Route index element={<div><h2>Contact Info</h2></div>} />
            <Route path="email" element={<ContactEmail />} />
            <Route path="phone" element={<ContactPhone />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
