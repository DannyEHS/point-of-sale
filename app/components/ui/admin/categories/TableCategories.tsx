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
                <TableRow>
                    <TableHead className="font-medium w-10">ID</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="w-96">Descripcion</TableHead>
                    <TableHead>Accion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((rol: any) => (
                    <TableRow key={rol.id}>
                        <TableCell className="font-medium">{rol.id.substring(0, 10)}</TableCell>
                        <TableCell>{rol.name}</TableCell>
                        <TableCell>{rol.description}</TableCell>
                        <TableCell className="flex flex-row space-x-2">
                            <TooltipInfo
                                element={<EditButton route={`/editRol/${rol.id}`} />}
                                text="Editar categoria"
                            />
                            <TooltipInfo
                                element={
                                    <Form method="post">
                                        <DeleteButton catchId={rol.id} />
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