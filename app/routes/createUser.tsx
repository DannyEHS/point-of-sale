import FormCreateUser from '~/components/ui/admin/users/FormCreateUser'

import prisma from "../../prisma/prisma"
import { useLoaderData } from '@remix-run/react'
import { createUser } from '~/models/users/createUser'

export const loader = async () => {
    const roles = await prisma.rol.findMany()
    console.log(roles)
    return {
        roles
    }
}

export const action = async ({request}: ActionArgs) => {
    const formData = await request.formData();
    const name = await formData.get("name"); 
    const lastName = await formData.get("lastName");
    const phone = await formData.get("phone");
    const password = await formData.get("password");
    const confirmPassword = await formData.get("confirmPassword");
    const rol = await formData.get("rol")

    if(!name) throw new Error("Ingresa el nombre del usuario/empleado.")
    if(!lastName) throw new Error("Ingresa los apellidos del usuario/empleado.")
    if(!phone) throw new Error("Ingresa el numero de telefono del usuario/empleado.")
    if(!password) throw new Error("Ingresa la clave para usuario/empleado.")
    if(!confirmPassword) throw new Error("Ingresa la clave de confirmacion para el usuario/empleado.")
    if(!rol) throw new Error("Selecciona el Rol para el usuario/empleado.")
    
    const newUser = await createUser({
        name,
        lastName,
        phone,
        password,
        rol,
    })
    console.log(newUser)
    return null
}

export default function Users() {

    const { roles } = useLoaderData<typeof loader>();
    const rolesId = roles.map(rol => ({id: rol.id, name: rol.name}));
    console.log(rolesId)

    return (
        <div className="items-center justify-center h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                    Crear Usuarios
                </h1>
                <FormCreateUser rolData={rolesId}/>
            </div>

        </div>
    );
}