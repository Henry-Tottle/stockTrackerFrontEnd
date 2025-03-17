import TableHeader from "../TableHeader/index.jsx";
import TableBody from "../TableBody/index.jsx";

function ProductsTable({tableHeaders, tableBody}) {
    return (
        <table>
            <TableHeader tableHeaders={tableHeaders}/>
            <TableBody tableBody={tableBody}/>
        </table>
    )
}

export default ProductsTable