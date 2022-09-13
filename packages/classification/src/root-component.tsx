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
          <Route path="/" element={<h1>Hi!</h1>} />
          <Route path="/destinations" element={<CreateClassification type="DESTINATION"/>}/>
          <Route path="/receivers" element={<CreateClassification type="RECEIVER"/>}/>
        </Routes>
      </BrowserRouter>
  );
}