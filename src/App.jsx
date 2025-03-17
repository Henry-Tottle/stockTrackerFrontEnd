
import './App.css'
import Header1 from "./Components/Header1/index.jsx";
import Table from "./Components/Table/index.jsx";
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);
    const apiUrl = "http://localhost:3008"
    const productTableHeaders = ["Product Name",
        "Stock Quantity",
        "Low Stock Threshold",
        "Supplier Name",
        "Unit Cost £",
        "Last Updated"];

    const getProducts = async (apiUrl) => {
        const url = apiUrl + "/products";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        getProducts(apiUrl);
    }, [])


  return (
    <>
        <Header1 headerText="Stock Tracker" />
        <BrowserRouter>
            <Link to='/products'>Products</Link>
        <Routes>
            <Route path='/products' element={
            <Table tableHeaders={productTableHeaders} tableBody={products} />}
                   />

        </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
