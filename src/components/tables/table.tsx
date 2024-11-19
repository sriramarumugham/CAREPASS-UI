import {
    useReactTable,
    ColumnDef,
    flexRender,
    getCoreRowModel,
} from "@tanstack/react-table";

interface SharedValue {
    value: string;
    columnId: string;
    startRow: number;
    rowSpan: number;
    className?: string; // Allow custom class for styling
}

interface TableProps<T> {
    data: T[];
    columns: ColumnDef<T, any>[];
    sharedValues?: SharedValue[]; // Shared value with span configuration
    rowStyles?: (index: number) => string; // Row styling callback
    headerStyles?: string; // Header styling
    footerStyles?: string; // Footer styling
}

export const ReusableTable = <T,>({
    data,
    columns,
    sharedValues,
    rowStyles,
    headerStyles = "bg-deepPurple text-white",
    footerStyles = "bg-gray-800 text-white",
}: TableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                {/* Table Header */}
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className={headerStyles}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="p-3 border-b border-gray-300 text-start"
                                    style={{ width: header.getSize() }}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/* Table Body */}
                <tbody>
                    {table.getRowModel().rows.map((row, rowIndex) => (
                        <tr
                            key={row.id}
                            className={rowStyles ? rowStyles(rowIndex) : "bg-white"}
                        >
                            {row.getVisibleCells().map((cell) => {
                                // Check if this cell is a shared value
                                const sharedValue = sharedValues?.find(
                                    (value) =>
                                        value.columnId === cell.column.id &&
                                        rowIndex >= value.startRow &&
                                        rowIndex < value.startRow + value.rowSpan
                                );

                                if (sharedValue) {
                                    // Render shared value only on the starting row
                                    if (rowIndex === sharedValue.startRow) {
                                        return (
                                            <td
                                                key={cell.id}
                                                className={`p-3 text-center border-x border-gray-300 ${sharedValue.className || "bg-purple-100 font-bold"}`}
                                                rowSpan={sharedValue.rowSpan}
                                            >
                                                {sharedValue.value}
                                            </td>
                                        );
                                    } else {
                                        // Skip rendering for rows under the shared value
                                        return null;
                                    }
                                }

                                return (
                                    <td key={cell.id} className="p-3 border-x border-gray-300">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>

                {/* Table Footer */}
                {table.getFooterGroups().length > 0 && (
                    <tfoot>
                        {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id} className={footerStyles}>
                                {footerGroup.headers.map((footer) => (
                                    <td
                                        key={footer.id}
                                        className="p-3 border-t border-gray-300"
                                        style={{ width: footer.getSize() }}
                                    >
                                        {flexRender(
                                            footer.column.columnDef.footer,
                                            footer.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                )}
            </table>
        </div>
    );
};

export const TableExample = () => {
    const data = [
        { plan: "CarePass Tax Saver", benefits: "Preventive Health check", pay: "₹10,000", worth: "₹8000" },
        { plan: "CarePass Tax Saver", benefits: "Unlimited Tele-consultation", pay: "₹10,000", worth: "₹2400" },
        { plan: "CarePass Silver Plan", benefits: "App Access", pay: "₹10,000", worth: "₹2000" },
        { plan: "CarePass Silver Plan", benefits: "", pay: "₹10,000", worth: "₹10,000" },
        { plan: "CarePass Gold Plan", benefits: "", pay: "₹10,000", worth: "₹250000" },
        { plan: "Health Insurance Coverage", benefits: "Tax Benefits Under 80D", pay: "₹10,000", worth: "₹15000" },
    ];
    const columns: ColumnDef<typeof data[number]>[] = [
        {
            accessorKey: "plan",
            header: "Plan",
            cell: (info) => info.getValue(),
            footer: () => "Total Plan", // Add a footer for the 'plan' column
        },
        {
            accessorKey: "benefits",
            header: "Benefits",
            cell: (info) => info.getValue(),
            footer: () => "Total Benefits", // Add a footer for the 'benefits' column
        },
        {
            accessorKey: "pay",
            header: "You Pay",
            cell: (info) => info.getValue(),
            footer: () => "", // Example total for 'You Pay' column
        },
        {
            accessorKey: "worth",
            header: "Worth",
            cell: (info) => info.getValue(),
            footer: () => "₹100,000", // Example total for 'Worth' column
        },
    ];

    const sharedValues: SharedValue[] = [
        { value: "₹10,000", columnId: "pay", startRow: 0, rowSpan: 6, className: "bg-blue-100 text-center font-bold" },
        { value: "₹8000", columnId: "worth", startRow: 0, rowSpan: 2, className: "bg-green-100 text-center font-semibold" },
        { value: "CarePass Tax Saver", columnId: "plan", startRow: 0, rowSpan: 2, className: "bg-yellow-100 text-start font-medium" },
    ];

    return (
        <div className="p-4">
            <ReusableTable
                data={data}
                columns={columns}
                sharedValues={sharedValues}
                headerStyles="bg-deepPurple text-white"
                footerStyles="bg-deepPurple text-white"
            />
        </div>
    );
};


