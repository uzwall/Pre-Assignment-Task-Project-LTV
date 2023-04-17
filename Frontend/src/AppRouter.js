import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddProduct from "./components/AddProduct";
import Edit from "./components/Edit";
import Delete from "./components/Delete";


function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/update/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
