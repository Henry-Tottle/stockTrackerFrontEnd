function TableHeader({tableHeaders}) {
    return (
        <thead>
            <tr>
                {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader