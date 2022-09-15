import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Classification } from "./pages";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

export default function Root() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<Loader />}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>{t("Welcome to RailRoad")}</h1>} />
          <Route
            path="/dashboard/destinations"
            element={<Classification type="DESTINATION" />}
          />
          <Route
            path="/dashboard/receivers"
            element={<Classification type="RECEIVER" />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
