import FormEditRol from '~/components/ui/admin/rol/FormEditRol'
import prisma from '../../prisma/prisma'
import { redirect, useLoaderData } from '@remix-run/react';
import { updateRol } from "~/models/updateRol"

type Params = {
    params: string | any;
}

export const loader = async ({ params } : Params) => {
    const { id } = params;

    const data = await prisma.rol.findUnique({
        where:{
            id
        }
    })
    console.log(id)
    console.log(data)
    return(
        data
    )
}

export const action = async ({ request, params } : ActionArgs) => {
    try {
        const formData = await request.formData();
        const name = await formData.get("name");
        const description = await formData.get("description");

        const id = params.id

        console.log(name)
        console.log(description)

        if(!name){
            throw new Error("Ingresa el nuevo nombre para el rol")
        }
        if(!description){
            throw new Error("Ingresa la nueva descripcion")
        }

        const updateData = await updateRol({
            id: id,
            name: name,
            description: description
        })

        console.log(updateData)
        return redirect("/admin/rol");
    } catch(error) {
        throw new Error("No se actualizo la informacion.")
    }
}

export default function EditRol() {

    const data = useLoaderData<typeof loader>();

    return (
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Editar Rol
            </h1>
            <FormEditRol data={data} nameInput='name' nameTextArea='description' />
        </div>
    );
}