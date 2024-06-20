import FromCreateCategory from "~/components/ui/admin/categories/FormCreateCategory"

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