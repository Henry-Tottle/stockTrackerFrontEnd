
import './App.css'
import Header1 from "./Components/Header1/index.jsx";
import ProductsTable from "./Components/ProductsTable/index.jsx";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SuppliersTable from "./Components/SuppliersTable/index.jsx";

function App() {
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([])
    const apiUrl = "http://localhost:3008"

    const productTableHeaders = ["Product Name",
        "Stock Quantity",
        "Low Stock Threshold",
        "Supplier Name",
        "Unit Cost £",
        "Last Updated"];

    const supplierTableHeaders = ["Supplier Name","Contact"]

    const getProducts = async (apiUrl) => {
        const url = apiUrl + "/products";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    const getSuppliers = async (apiUrl) => {
        const url = apiUrl + "/suppliers";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSuppliers(data);
    }

    useEffect(() => {
        getProducts(apiUrl);
        getSuppliers(apiUrl);
    }, [])


  return (
    <>
        <Header1 headerText="Stock Tracker" />
        <BrowserRouter>
            <Link to='/products'>Products</Link>
            <Link to='/suppliers'>Suppliers</Link>
        <Routes>
            <Route path='/products' element={
            <ProductsTable tableHeaders={productTableHeaders} tableBody={products} />}
                   />
            <Route path='/suppliers' element={
                <SuppliersTable tableHeaders={supplierTableHeaders} tableBody={suppliers} />}
            />
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
