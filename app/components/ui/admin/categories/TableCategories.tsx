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

export default function TableCategories({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Categorias.</TableCaption>
            <TableHeader>
                <TableRow className="bg-[#d4dae3]">
                    <TableHead className="font-medium w-10">ID</TableHead>
                    <TableHead className="w-24">Categoria</TableHead>
                    <TableHead className="w-96">Descripcion</TableHead>
                    <TableHead className="w-16">Accion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((category: any) => (
                    <TableRow className="bg-[#ebeef3]" key={category.id}>
                        <TableCell className="font-medium">{category.id.substring(0, 10)}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell className="flex flex-row space-x-2">
                            <TooltipInfo
                                element={<EditButton route={`/editCategory/${category.id}`} />}
                                text="Editar categoria"
                            />
                            <TooltipInfo
                                element={
                                    <Form method="post">
                                        <DeleteButton catchId={category.id} />
                                    </Form>
                                    
                                }
                                text="Eliminar categoria"
                            />
                        </TableCell>
                    </TableRow>
                ))}
                {
                    !data ? (
                        <TableRow >
                            <TableCell className="font-medium">Any data</TableCell>
                            <TableCell>Any data</TableCell>
                            <TableCell>Any data</TableCell>
                            <TableCell>Any data</TableCell>
                        </TableRow>
                    ) : null
                }
            </TableBody>
        </Table>
    )
}