import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";
import ProtectedRouteContext from "../context/ProtectedRouteContext";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/" />} />

    <Route element={<ProtectedRouteContext />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default RoutesMain;
