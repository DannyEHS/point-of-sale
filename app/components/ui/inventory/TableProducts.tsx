import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

type Props = {
    data?: string | any
}

export default function TableProducts({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Productos.</TableCaption>
            <TableHeader>
                <TableRow className="bg-[#d4dae3]">
                    <TableHead>Cod. Barras</TableHead>
                    <TableHead>Producto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Costo</TableHead>
                    <TableHead>Stock</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((product: any) => (
                    <TableRow className="bg-[#ebeef3]" key={product.id}>
                        <TableCell className="font-medium">{product.barCode}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category?.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.cost}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                    </TableRow>
                ))}
                {data.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={6} className="text-center">
                            No hay productos que coincidan con la búsqueda.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}