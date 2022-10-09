import { Route, Routes } from "react-router-dom";

import Register from "../page/Register";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;
