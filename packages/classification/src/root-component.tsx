import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ClassificationComponent from "./components/ClassificationComponent";
import CreateClassification from "./components/CreateClassification";
import { Classification } from "./pages";


export default function Root() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>Hi!</h1>} />
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
