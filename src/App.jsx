import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/All/HomePage";
import LoginPage from "./pages/All/LoginPage";
import SignupPage from "./pages/All/SignupPage";
// import ProfilePage from "./pages/All/ProfilePage";
import ProfilePage from "./pages/All/ProfilePage";
import UpdateProfilePage from "./pages/All/UpdateProfilePage";
import ContactPage from "./pages/All/ContactPage";
import AboutPage from "./pages/All/AboutPage";
import JobPage from "./pages/JobPages/JobPage";
import JobCreationForm from "./pages/DeptStaffPages/JobCreationForm";
import JobDetailsPage from "./pages/JobPages/JobDetailPage";
import DashboardPage from "./pages/DeptStaffPages/DashboardPage";
import RequireAuth from "./components/Auth/RequireAuth";
import NotRequireAuth from "./components/Auth/NotRequireAuth";
import { Toaster } from "react-hot-toast";
import VerifyAccount from "./pages/User/Verification";
import EmailNotificationPage from "./pages/All/EmailNotificationPage";
import { useSelector } from "react-redux";
import Denied from "./pages/All/Denied";
import ApplicationsPage from "./pages/TApages/ApplicationsPage";
import ForgetPassword from "./pages/All/ForgetPassword";
import ResetPassword from "./pages/All/ResetPassword";
import SetPassword from "./pages/All/SetPassword";

function App() {
  const loggedInUser = useSelector((state) => state?.auth?.data);
  return (
    <Router>

      <Navbar />

      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/verify/:verificationToken" element={<VerifyAccount />} />
        <Route path="/email-notification/:emailPrefix" element={<EmailNotificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
        <Route path="/dashboardDS" element={<DashboardPage />} />
        <Route path="/job_details/:jobId" element={<JobDetailsPage />} />
        <Route path="/profile" element={<ProfilePage user={loggedInUser} />} />
        <Route
          path="/update-profile"
          element={<UpdateProfilePage user={loggedInUser} />}
        />
        <Route path="/dashboard/create-job" element={<JobCreationForm />} />{" "}
        //Define route for job creation form
        <Route element={<RequireAuth allowedRoles={["USER", "DS"]} />}>
          {/*<Route
            path="/profile"
            element={<ProfilePage user={loggedInUser} />}
  />*/}

          <Route path="/applications" element={<ApplicationsPage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["USER"]} />}></Route>
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
