import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/ui/button"
import { IoMdHelpCircleOutline } from "react-icons/io";
import TooltipInfo from "../../general/TooltipInfo";
import InputUpdate from "../../general/InputUpdate";
import SelectItemUpdate from "../../general/SelectItemUpdate";

type Props = {
    rolData: {
        id: string;
        name: string;
    }[];
    data?: any;
    nameInput: {
        name: string;
        lastName: string;
        phone: string;
        password: string;
      };
    nameSelect: string;
}

export default function FromCreateRol({ data, rolData, nameInput, nameSelect }: Props) {
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.name} value={data.name} className=" w-96 m-3 " placeholder="Nombre" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas el nombre del usuario/empleado"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.lastName} value={data.lastName} className=" w-96 m-3 " placeholder="Apellidos" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas los apellidos del usuario/empleado"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.phone} value={data.phone} className=" w-96 m-3 " placeholder="Telefono" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas el numero de telefono del usuario/empleado"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate type="password" name={nameInput.password} value={data.password} className=" w-96 m-3 " placeholder="Clave" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas la clave de acceso del usuario/empleado"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name="confirmPassword" type="password" className=" w-96 m-3 " placeholder="Confirmar clave" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Confirma aqui la clave de acceso del usuario/empleado"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <SelectItemUpdate name={nameSelect} value={data.rol?.id} data={rolData} placeholder="Roles" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas el rol que tendra tu usuario/empleado dentro de la organizacion."
                    />
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">

                    <TooltipInfo
                        element={
                            <Link to="/admin/users">
                                <Button type="submit">Regresar</Button>
                            </Link>}
                        text="Presiona el boton para regresar al listado de usuarios."
                    />

                    <TooltipInfo
                        element={
                            <Button type="submit">Crear</Button>}
                        text="Si los campos estan completos, puedes actualizar tu usuario al presionar este boton."
                    />
                </div>

            </Form>
        </>
    )
}