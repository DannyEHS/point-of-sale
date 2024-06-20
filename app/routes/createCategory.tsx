import FromCreateCategory from "~/components/ui/admin/categories/FormCreateCategory"

import { createCategory } from "~/models/categories/createCategory"

export const action = async ({ request } : ActionArgs) => {
    const formData = await request.formData();
    const name = await formData.get("name")
    const description = await formData.get("description")

    if(!name) throw new Error("Ingresa el nombre de la categoria.")
    if(!description) throw new Error("Ingresa una descripcion para la categoria.")
    
    const newCategory = await createCategory({
        name,
        description,
    })
    console.log("Data de la categoria: ", newCategory);
    return null;
}

export default function CreateCategory(){
    return(
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Crear Categoria
            </h1>
            <FromCreateCategory/>
        </div>
    )
}