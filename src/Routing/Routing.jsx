import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import ProtectedRoute from "./ProtectedRoute";

import Course from "../components/PublicComponents/Course";
import AboutPage from "../pages/AboutPage";
import AddCoursePage from "../pages/admin/AddCoursePage";
import BillingPage from "../pages/admin/BillingPage";
import GeneralPage from "../pages/admin/GeneralPage";
import LessonAddPage from "../pages/admin/LessonAddPage";
import SettingsPage from "../pages/admin/SettingsPage";
import StatistikaPage from "../pages/admin/StatistikaPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import PopularPage from "../pages/PopularPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
// const Course = lazy(() => import("../components/PublicComponents/Course"));
// const AddCoursePage = lazy(() => import("../pages/admin/AddCoursePage"));
// const AboutPage = lazy(() => import("../pages/AboutPage"));
// const BillingPage = lazy(() => import("../pages/admin/BillingPage"));
// const GeneralPage = lazy(() => import("../pages/admin/GeneralPage"));
// const LessonAddPage = lazy(() => import("../pages/admin/LessonAddPage"));
// const SettingsPage = lazy(() => import("../pages/admin/SettingsPage"));
// const StatistikaPage = lazy(() => import("../pages/admin/StatistikaPage"));
// const CoursePage = lazy(() => import("../pages/CoursePage"));
// const HomePage = lazy(() => import("../pages/HomePage"));
// const NotFound = lazy(() => import("../pages/NotFound"));
// const PopularPage = lazy(() => import("../pages/PopularPage"));
// const SignIn = lazy(() => import("../pages/SignIn"));
// const SignUp = lazy(() => import("../pages/SignUp"));

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses" element={<PopularPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course" element={<CoursePage />}>
            <Route path="/course/:id/:courseId" element={<Course />} />
          </Route>
        </Route>
        <Route path="/signup" element={<RegisterLayout />}>
          <Route index element={<SignUp />} />
        </Route>
        <Route path="/signin" element={<RegisterLayout />}>
          <Route index element={<SignIn />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<GeneralPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="statistika" element={<StatistikaPage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="addcourse" element={<AddCoursePage />} />
          <Route path="lesson" element={<LessonAddPage />}>
            <Route path=":id" element={<LessonAddPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
