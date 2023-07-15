import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CityList from "./pages/citylist/CityList"; 
import TypeList from "./pages/typelist/TypeList";
import FeatList from "./pages/featlist/FeatList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/chotels" element={<CityList/>}/>
        <Route path="/thotels" element={<TypeList/>}/>
        <Route path="/fhotels" element={<FeatList/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
