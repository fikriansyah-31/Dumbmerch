import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/assets/style/style.css";
import { Route, Routes } from "react-router-dom";

//Component

// // Component Pages
// import Navbar from "./components/Navbar";
import  { HalamanLogin, HalamanRegister, Home, DetailProduct, ProfilePage, ListCategoryProduct, ProductList, EditCategory, EditProduct,
Complain, }  from '../src/pages';
import Private_Route from "../src/components/Private_Route";

// import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     

    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<HalamanLogin />} />
      <Route path="/register" element={<HalamanRegister />} />
      <Route path="/" element={<Home />} />
      
      

      <Route path="/" element={<Private_Route />}>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<HalamanLogin />} />
        <Route path="/register" element={<HalamanRegister />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/list-category" element={<ListCategoryProduct />} />
        <Route path="/list-product" element={<ProductList />} />
        <Route path="/complain" element={<Complain />} />
       
       

        <Route path="/Detailproduct/:id" element={<DetailProduct />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

       
      </Route>
    </Routes>
  </div>
  );
}

export default App;
