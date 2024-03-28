import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import JobPage from "./pages/JobPage";
import JobCreationForm from "./pages/JobCreationForm";
import JobDetailsPage from "./pages/JobDetailPage";
import DashboardPage from "./pages/DeptStaffpages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import RequireAuth from "./components/Auth/RequireAuth";
import NotRequireAuth from "./components/Auth/NotRequireAuth";
import { Toaster } from "react-hot-toast";
import VerifyAccount from "./pages/User/Verification";
import EmailNotificationPage from "./pages/EmailNotificationPage";
import { useSelector } from "react-redux";
import Denied from "./pages/Denied";
function App() {
  const loggedInUser = useSelector((state) => state?.auth?.data);
  return (
    <Router>
      <Navbar />
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify/:verificationToken" element={<VerifyAccount />} />
        <Route
          path="/email-notification/:emailPrefix"
          element={<EmailNotificationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
        <Route path="/dashboardDS" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/job_details/:jobId" element={<JobDetailsPage />} />
        <Route
          path="/dashboard/create-job"
          element={<JobCreationForm />}
        />{" "}
        //Define route for job creation form
        <Route element={<RequireAuth allowedRoles={["USER","DS"]} />}>
          <Route
            path="/profile"
            element={<ProfilePage user={loggedInUser} />}
          />
        </Route>
        <Route element={<RequireAuth allowedRoles={["DS"]} />}></Route>
        <Route element={<RequireAuth allowedRoles={["TACM"]} />}></Route>
        <Route element={<RequireAuth allowedRoles={["INS"]} />}></Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}></Route>
        <Route element={<NotRequireAuth />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
