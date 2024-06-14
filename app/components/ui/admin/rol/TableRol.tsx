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

const rolData = [
    {
        id: "000001",
        name: "Administrador",
        descripcion: "Control total",
        nivel: "1",
    },
    {
        id: "000002",
        name: "Encargado de Tienda",
        descripcion: "Control Sobre permisos, reportes, blablabla",
        nivel: "2",
    },
    {
        id: "000003",
        name: "Cajero",
        descripcion: "blablabla",
        nivel: "5",
    },
]

export default function TableRol() {
    return (
        <Table className="border border-[#d1d1d1]">
            <TableCaption>Lista de tus Usuarios.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Nivel</TableHead>
                    <TableHead>Accion</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rolData.map((rol) => (
                    <TableRow key={rol.id}>
                        <TableCell className="font-medium">{rol.id}</TableCell>
                        <TableCell>{rol.name}</TableCell>
                        <TableCell>{rol.descripcion}</TableCell>
                        <TableCell>{rol.nivel}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}