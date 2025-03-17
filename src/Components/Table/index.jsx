import TableHeader from "../TableHeader/index.jsx";
import TableBody from "../TableBody/index.jsx";

function Table({tableHeaders, tableBody}) {
    return (
        <table>
            <TableHeader tableHeaders={tableHeaders}/>
            <TableBody tableBody={tableBody}/>
        </table>
    )
}

export default Table