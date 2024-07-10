import FormEditUser from "~/components/ui/admin/users/FormEditUser";
import prisma from '../../prisma/prisma'
import { redirect, useLoaderData } from "@remix-run/react";
import { updateUser } from "~/models/users/updateUser";

type Params = {
    params: string | any;
}

export const loader = async ({ params }: Params) => {
    const { id } = params;

    const user = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
          rol: true
        }
    });

    const roles = await prisma.rol.findMany();

    return { user, roles };
}

export const action = async ({ request, params }: ActionArgs) => {
    try{
        const id = params.id;
        console.log(id)
        const formData = await request.formData();
        const name = await formData.get("name");
        const lastName = await formData.get("lastName");
        const phone = await formData.get("phone");
        const password = await formData.get("password");
        const rol = await formData.get("rol");

        const updateData = await updateUser({
            id: id,
            name: name,
            lastName: lastName,
            phone: phone,
            password: password,
            rol: rol,
        })
        console.log("Producto actualizado: ", updateData)
        return redirect("/admin/users");

    } catch(error) {
        throw new Error("No se actualizo la informacion.")
    }
}

export default function EditUser() {

    const { user, roles } = useLoaderData<typeof loader>();

    return(
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Editar Producto
            </h1>
            <FormEditUser 
                data={user} 
                rolData={roles} 
                nameInput={
                    {
                       name: "name",
                       lastName: "lastName",
                       phone: "phone",
                       password: "password",
                    }
                } 
                nameSelect="rol"
            />
        </div>
    )
}