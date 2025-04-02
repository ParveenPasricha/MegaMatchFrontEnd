import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";
import Test from "./Components/Test";
import Reel from "./Components/Reel";
import IPL from "./Components/IPL";
import Hot from "./Components/Hot";
import Livematch from "./Components/Livematch";
import CricketGame from "./Components/CricketGame";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Cricket from "./Components/Cricket";
import SuperAdminLogin from "./SuperAdmin/SuperAdminLogin";
import ProtectedRoute from "./SuperAdmin/ProtectedRoute";
import SuperAdminDashboard from "./SuperAdmin/SuperAdminDashboard";
import LiveScore from "./Components/LiveScore";
import NotFound from "./Components/NotFound";  // Import the NotFound Component
import Casino from "./Components/Casino";
import { Sidebar } from "lucide-react";
import RightBar from "./Components/RightBar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      {/* <SideBar /> <><Sidebar /></> */}
      <Routes>
        <Route path="/" element={<Casino/>} />
        <Route path="/reel" element={<><SideBar /><Reel /></>} />
        <Route path="/ipl" element={<><SideBar /><IPL /></>} />
        <Route path="/hot" element={<><SideBar /><Hot /></>} />
        <Route path="/livematch" element={<><SideBar /><Livematch /></>} />
        <Route path="/cricketgame" element={<><SideBar /><CricketGame /></>} />
        <Route path="/login" element={<><SideBar /><Login /></>} />
        <Route path="/signup" element={<><SideBar /><Signup /></>} />
        <Route path="/cricket" element={<><SideBar /><Cricket /></>} />
        <Route path="/livescore" element={<><SideBar /><LiveScore /></>} />
        <Route path="/casino" element={<Casino/> } />

        {/* SuperAdmin Routes */}
        <Route path="/admin" element={<SuperAdminLogin />} />
        <Route
          path="/SuperAdminDashboard"
          element={
            <ProtectedRoute>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        <Route path="/404" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
