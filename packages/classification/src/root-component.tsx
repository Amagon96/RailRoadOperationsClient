import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Classification } from "./pages";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

export default function Root() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>{t("welcome")}</h1>} />
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
    </>
  );
}
