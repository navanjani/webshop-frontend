import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage, ShopPage, DetailPage, LoginPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
        <NavBar />

        <Route path="/" element={<HomePage />} />
        <Route path="/details/:product_id" element={<DetailPage />} />
        <Route path="/shop" element={<ShopPage />} />

    </div>
  );
}

export default App;
