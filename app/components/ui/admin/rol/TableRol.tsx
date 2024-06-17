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
    data: string | any
}

export default function TableRol({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Roles.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Accion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((rol: any) => (
                    <TableRow key={rol.id}>
                        <TableCell className="font-medium">{rol.id}</TableCell>
                        <TableCell>{rol.name}</TableCell>
                        <TableCell>{rol.description}</TableCell>
                        <TableCell className="flex flex-row space-x-2">
                            <TooltipInfo
                                element={<EditButton route={`/editRol/${rol.id}`} />}
                                text="Editar rol"
                            />
                            <TooltipInfo
                                element={
                                    <Form method="post">
                                        <DeleteButton catchId={rol.id} />
                                    </Form>
                                    
                                }
                                text="Eliminar rol"
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