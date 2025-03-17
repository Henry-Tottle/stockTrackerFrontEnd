function TableBodySuppliers({tableBody}) {
    if (tableBody.data && tableBody.data.length > 0) {
        console.log(tableBody.data)

        return (
            <tbody>
            {
                tableBody.data.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.supplier_name}</td>
                                <td>{row.contact}</td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        )
    } else {
        return (
            <tbody>
                <tr>
                    <td colSpan='2'>Loading data...</td>
                </tr>
            </tbody>
        )
    }
}

export default TableBodySuppliers;