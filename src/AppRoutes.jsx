import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./features/layout/Header";
import Content from "./features/layout/Content";
import Footer from "./features/layout/Footer";

import Login from "./features/auth/login";
import Register from "./features/auth/registro";
import ForgotPassword from "./features/auth/forgotPassword";
import Api from "./shared/apiRyC";

import Dashboard from "./features/auth/components/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/api" element={<Api />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}