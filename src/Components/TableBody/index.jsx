function TableBody({tableBody}) {
    if (tableBody.data && tableBody.data.length > 0) {
        console.log(tableBody.data)
        return (
            <tbody>
            {
                tableBody.data.map((row, index) => {
                    const dateConversion = (new Date(row.updated_at)).toDateString();
                    console.log(dateConversion)

                    return (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.stock_quantity}</td>
                            <td>{row.low_stock_threshold}</td>
                            <td>{row.supplier_name}</td>
                            <td>{row.item_cost}</td>
                            <td>{dateConversion}</td>
                        </tr>
                    )}
                )
            }
            </tbody>
        )
    } else {
        return (
            <tbody>
                <tr>
                    <td colSpan={6}>Loading data</td>
                </tr>
            </tbody>
        )
    }

}

export default TableBody;