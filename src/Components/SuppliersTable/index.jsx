import TableHeader from "../TableHeader/index.jsx";
import TableBodySuppliers from "../TableBodySuppliers/index.jsx";

function SuppliersTable({tableHeaders, tableBody}) {
    return (
        <table>
            <TableHeader tableHeaders={tableHeaders}/>
            <TableBodySuppliers tableBody={tableBody}/>
        </table>
    )
}

export default SuppliersTable