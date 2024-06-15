import FormCreateRol from '~/components/ui/admin/rol/FormCreateRol'

import { createRol } from "~/models/createRol"

export const action = async ({ request }: ActionArgs) => {

    const formData = await request.formData();
    const name = await formData.get("name")
    const description = await formData.get("description")

    if(!name) throw new Error("Ingresa el nombre del rol.")
    if(!description) throw new Error("Ingresa una descripcion para el rol.")

    const newRol = await createRol({
        name,
        description
    })

    console.log("Data del rol: ", newRol);

    return null;
}

export default function Users() {
    return (
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Crear Rol
            </h1>
            <FormCreateRol />
        </div>
    );
}