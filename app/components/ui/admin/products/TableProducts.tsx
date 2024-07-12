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

import DeleteButton from "../../general/DeleteButton";
import EditButton from "../../general/EditButton";
import TooltipInfo from "../../general/TooltipInfo"
import { Form } from "@remix-run/react";

type Props = {
    data?: string | any
}

export default function TableProducts({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Productos.</TableCaption>
            <TableHeader>
                <TableRow>
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
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.barCode}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category?.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.cost}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell className="flex flex-row space-x-2">
                            <TooltipInfo
                                element={<EditButton route={`/editProduct/${product.id}`} />}
                                text="Editar producto"
                            />
                            <TooltipInfo
                                element={
                                    <Form method="post">
                                        <DeleteButton catchId={product.id} />
                                    </Form>
                                    
                                }
                                text="Eliminar producto"
                            />
                        </TableCell>
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