import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import DeleteButton from "../../general/DeleteButton";
import EditButton from "../../general/EditButton";
import TooltipInfo from "../../general/TooltipInfo";
import { Form } from "@remix-run/react";

type Props = {
    data: any[];
};

export default function TableRol({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Roles.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-medium w-10">ID</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Rutas</TableHead>
                    <TableHead>Acción</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((rol) => (
                    <TableRow key={rol.id}>
                        <TableCell className="font-medium w-10">{rol.id.substring(0, 10)}</TableCell>
                        <TableCell>{rol.name}</TableCell>
                        <TableCell>{rol.description}</TableCell>
                        <TableCell>
                            {rol.routes.split(', ').map((route: string, index: number) => (
                                <span key={index}> {route.trim()} </span>
                            ))}
                        </TableCell>
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
                {data.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center">
                            No hay roles que coincidan con la búsqueda.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
