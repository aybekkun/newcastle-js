import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import AddCoursePage from "../pages/admin/AddCoursePage";
import BillingPage from "../pages/admin/BillingPage";
import GeneralPage from "../pages/admin/GeneralPage";
import SettingsPage from "../pages/admin/SettingsPage";
import StatistikaPage from "../pages/admin/StatistikaPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";
import PopularPage from "../pages/PopularPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses" element={<PopularPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Route>
        <Route path="/signin" element={<RegisterLayout />}>
          <Route index element={<SignIn />} />
        </Route>
        <Route path="/signup" element={<RegisterLayout />}>
          <Route index element={<SignUp />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<GeneralPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="statistika" element={<StatistikaPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="addcourse" element={<AddCoursePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
