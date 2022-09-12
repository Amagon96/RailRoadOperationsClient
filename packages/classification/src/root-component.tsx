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
    <Route path="/destinations" element={<Destinations></Destinations>}/>
  </BrowserRouter>
  );
}
