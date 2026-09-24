import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { RegistrationProvider } from "./context/RegistrationContext";
import { paths } from "./router/paths";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AfricanGastronomy from "./pages/AfricanGastronomy";
import ChefsSpeakers from "./pages/ChefsSpeakers";
import Programmes from "./pages/Programmes";
import Gallery from "./pages/Gallery";
import Partners from "./pages/Partners";
import Countries from "./pages/Countries";
import CalendarPage from "./pages/Calendar";
import DashboardPage from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import RegisterProgramme from "./pages/register/RegisterProgramme";
import RegisterDetails from "./pages/register/RegisterDetails";
import RegisterCategory from "./pages/register/RegisterCategory";
import RegisterSummary from "./pages/register/RegisterSummary";
import RegisterPayment from "./pages/register/RegisterPayment";
import RegisterConfirmation from "./pages/register/RegisterConfirmation";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RegistrationProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={paths.home} element={<Home />} />
              <Route path={paths.about} element={<AboutUs />} />
              <Route path={paths.gastronomy} element={<AfricanGastronomy />} />
              <Route path={paths.chefs} element={<ChefsSpeakers />} />
              <Route path={paths.programmes} element={<Programmes />} />
              <Route path={paths.gallery} element={<Gallery />} />
              <Route path={paths.partners} element={<Partners />} />
              <Route path={paths.countries} element={<Countries />} />
              <Route path={paths.calendar} element={<CalendarPage />} />
              <Route path={paths.dashboard} element={<DashboardPage />} />
              <Route path={paths.contact} element={<Contact />} />
  
              <Route path={paths.register} element={<RegisterProgramme />} />
              <Route path={paths.registerDetails} element={<RegisterDetails />} />
              <Route path={paths.registerCategory} element={<RegisterCategory />} />
              <Route path={paths.registerSummary} element={<RegisterSummary />} />
              <Route path={paths.registerPayment} element={<RegisterPayment />} />
              <Route path={paths.registerConfirmation} element={<RegisterConfirmation />} />
  
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RegistrationProvider>
    </MotionConfig>
  );
}
