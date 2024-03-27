import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import JobPage from "./pages/JobPage";
import JobCreationForm from './pages/JobCreationForm'
import JobDetailsPage from "./pages/JobDetailPage";
import DashboardPage from "./pages/DeptStaffpages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import { IoMdAdd } from "react-icons/io";
import RequireAuth from './components/Auth/RequireAuth'
import NotRequireAuth from './components/Auth/NotRequireAuth'
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Navbar />
      <div><Toaster position="top-right" reverseOrder={false} /></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/job_details/:jobId" element={<JobDetailsPage />} />
        <Route path="/dashboard/create-job" element={<JobCreationForm />} /> //Define route for job creation form
      </Routes>

      <Routes element={<RequireAuth allowedRoles={['USER', 'DS', 'TACM', 'INS', , 'ADMIN']} />}>

      </Routes>


      <Routes element={<NotRequireAuth />}>

      </Routes>


      <Footer />
    </Router >
  );
}

export default App;
