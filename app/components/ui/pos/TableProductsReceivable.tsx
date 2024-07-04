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

export default function TableProductsReceivable({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Productos a cobrar.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>x</TableHead>
                    <TableHead className="w-20">Cod. Barras</TableHead>
                    <TableHead className="w-52">Producto</TableHead>
                    <TableHead>Cantidad</TableHead>
                    <TableHead>Precio unitario</TableHead>
                    <TableHead>Acumulado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((product: any) => (
                    <TableRow key={product.id}>

                        <TableCell>{product.barCode }</TableCell>
                        <TableCell className="w-20">{product.name}</TableCell>
                        <TableCell className="w-52">{product.category?.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.cost}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        
                    </TableRow>
                ))}
                {
                    !data ? (
                        <TableRow >
                            <TableCell className="font-medium">Any</TableCell>
                            <TableCell>12345678910</TableCell>
                            <TableCell>Leche Lala 1Lt</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>$30</TableCell>
                            <TableCell>$6000</TableCell>
                        </TableRow>
                    ) : null
                }
            </TableBody>
        </Table>
    )
}