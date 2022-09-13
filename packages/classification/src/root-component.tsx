import ClassificationComponent from "./components/ClassificationComponent";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateClassification from "./components/CreateClassification";


export default function Root(props) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>Hi!</h1>} />
          <Route path="/dashboard/destinations" element={<CreateClassification type="DESTINATION"/>}/>
          <Route path="/dashboard/receivers" element={<CreateClassification type="RECEIVER"/>}/>
        </Routes>
      </BrowserRouter>
  );
}