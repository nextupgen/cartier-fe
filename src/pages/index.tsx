import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientPage from "./ClientPage";
import LoginPage from "./Admin/Login";
import ProtectedRoute from "~/routes/ProtectedRoute";
import CategoriesPage from "./Admin/Categoires";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
