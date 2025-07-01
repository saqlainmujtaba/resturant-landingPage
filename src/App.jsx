import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddToBucket from "./pages/addToBucket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="addtobucket" element={<AddToBucket/>}/>
      </Routes>
    </>
  );
}

export default App;
