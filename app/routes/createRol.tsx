import FormCreateRol from '~/components/ui/admin/rol/FormCreateRol'

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