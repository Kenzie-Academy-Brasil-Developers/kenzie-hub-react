import { Navigate, Route, Routes } from "react-router-dom";

import Register from "../page/Register";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Navigate  to="/" />} />
  </Routes>
);

export default RoutesMain;
