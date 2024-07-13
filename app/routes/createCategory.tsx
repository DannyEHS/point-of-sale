import FromCreateCategory from "~/components/ui/admin/categories/FormCreateCategory"

import { createCategory } from "~/models/categories/createCategory"

import { RiAddCircleLine } from "react-icons/ri";

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
            <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                <RiAddCircleLine className="text-[#5a6e8a] mr-1 w-8 h-8"/>
                Crear Categoria
            </h1>
            <FromCreateCategory/>
        </div>
    )
}