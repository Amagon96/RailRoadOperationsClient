import ClassificationComponent from "./components/ClassificationComponent";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Destinations from "./components/Destinations";

export default function Root(props) {
  console.log("Hi!");
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hi!</h1>} />
      <Route path="destinations" element={<Destinations></Destinations>}/>
      <Route path="receivers" element={<ClassificationComponent type="RECEIVER"/>}/>
    </Routes>
  </BrowserRouter>
  );
}
