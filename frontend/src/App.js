import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import UserHome from "./components/user/UserHome";
import AdminHome from "./components/admin/AdminHome";
import UserAppointments from "./components/user/UserAppointments";

function App() {
  const userLoggedIn = !!localStorage.getItem("userData");

  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            {userLoggedIn ? (
              <>
                <Route path="/adminhome" element={<AdminHome />} />
                <Route path="/userhome" element={<UserHome />} />
                <Route
                  path="/userhome/userappointments/:doctorId"
                  element={<UserAppointments />}
                />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </div>
        <footer className="bg-primary text-center text-light text-lg-start">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">MedicAid</h5>
        <p>Your trusted healthcare booking platform.</p>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-light">Home</a></li>
          <li><a href="/about" className="text-light">About Us</a></li>
          <li><a href="/contact" className="text-light">Contact</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Follow Us</h5>
        <ul className="list-unstyled d-flex ">
          <li><a href="https://facebook.com" className="text-light me-3">Facebook</a></li>
          <li><a href="https://twitter.com" className="text-light me-3">Twitter</a></li>
          <li><a href="https://linkedin.com" className="text-light">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3">
    © 2024 Copyright: <span className="fw-bold">MedicAid</span>
  </div>
</footer>
      </Router>
    </div>
  );
}

export default App;
