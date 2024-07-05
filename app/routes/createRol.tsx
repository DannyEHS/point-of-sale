import FormCreateRol from '~/components/ui/admin/rol/FormCreateRol'

import { createRol } from "~/models/createRol"

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const routes = formData.getAll("routes"); // Obtener todos los valores de los checkboxes

    if (!name) throw new Error("Ingresa el nombre del rol.");
    if (!description) throw new Error("Ingresa una descripcion para el rol.");

    // Unir las rutas seleccionadas en un solo string
    const routesString = routes.join(',');

    const newRol = await createRol({
        name,
        description,
        routes: routesString,
    });

    console.log("Data del rol: ", newRol);

    return null;
}

export default function CreateRol() {
    return (
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Crear Rol
            </h1>
            <FormCreateRol />
        </div>
    );
}