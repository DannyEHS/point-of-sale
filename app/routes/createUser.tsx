import FormCreateUser from '~/components/ui/admin/users/FormCreateUser';

import prisma from "../../prisma/prisma";
import { useLoaderData } from '@remix-run/react';
import { createUser } from '~/models/users/createUser';


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
    const rol = await formData.get("rol")

    console.log(name)
    console.log(lastName)
    console.log(phone)
    console.log(password)
    console.log(rol)
    
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

export default function CreateUsers() {

    const { roles } = useLoaderData<typeof loader>();
    const rolesId = roles.map(rol => ({id: rol.id, name: rol.name}));
    console.log(rolesId)

    return (
        <div className="items-center justify-center h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                    Crear usuarios
                </h1>
                <FormCreateUser rolData={rolesId}/>
            </div>

        </div>
    );
}