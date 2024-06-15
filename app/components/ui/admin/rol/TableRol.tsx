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
    data: string | any
}

export default function TableRol({ data } : Props) {
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
                        <TableCell></TableCell>
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