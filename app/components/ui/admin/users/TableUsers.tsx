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

const usersData = [
    {
        id: "000001",
        name: "Jesus Alejandro",
        fatherLastName: "Hernandez",
        motherLastName: "Castro",
        email: "blabla@gmail.com",
        password: "**********",
        rol: "Cajero",
    },
    {
        id: "000002",
        name: "Alejandro",
        fatherLastName: "Ramires",
        motherLastName: "Vonghdu",
        email: "blabla@gmail.com",
        password: "**********",
        rol: "Administrador",
    },
    {
        id: "000003",
        name: "Clara de Huevo",
        fatherLastName: "Sanchez",
        motherLastName: "Castro",
        email: "blabla@gmail.com",
        password: "**********",
        rol: "Cajera",
    },
]

export default function TableUsers() {
    return (
        <Table>
            <TableCaption>Lista de tus Usuarios.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Apellido Paterno</TableHead>
                    <TableHead>Apellido Materno</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Clave</TableHead>
                    <TableHead>Rol</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {usersData.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.fatherLastName}</TableCell>
                        <TableCell>{user.motherLastName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.rol}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}