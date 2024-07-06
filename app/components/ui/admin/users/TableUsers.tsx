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
import TooltipInfo from "../../general/TooltipInfo"
import EditButton from "../../general/EditButton"
import DeleteButton from "../../general/DeleteButton"
import { Form } from "@remix-run/react"

type Props = {
    data?: string | any
}

export default function TableUsers({ data }: Props) {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Usuarios.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-medium w-10">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Apellidos</TableHead>
                    <TableHead>Telefono</TableHead>
                    <TableHead>Clave</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Accion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium w-10">{user.id.substring(0, 10)}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.rol?.name}</TableCell>
                        <TableCell className="flex flex-row space-x-2">
                            <TooltipInfo
                                element={<EditButton route={`/editUser/${user.id}`} />}
                                text="Editar usuario"
                            />
                            <TooltipInfo
                                element={
                                    <Form method="post">
                                        <DeleteButton catchId={user.id} />
                                    </Form>

                                }
                                text="Eliminar usuario"
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