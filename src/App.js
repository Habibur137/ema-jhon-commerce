import "./App.css";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
