import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import SelectItems from "~/components/ui/admin/SelectItems"
import { Label } from "~/components/ui/label"

import { IoMdHelpCircleOutline } from "react-icons/io";
import TooltipInfo from "~/components/ui/general/TooltipInfo";

import { RiAddLine, RiCornerDownLeftFill } from "react-icons/ri";


type Props = {
    rolData: {
        id: string;
        name: string;
    }[];
}

export default function FormCreateUser({ rolData }: Props) {
    // Verifica los imports
    console.log("IoMdHelpCircleOutline:", IoMdHelpCircleOutline);
    console.log("RiAddLine:", RiAddLine);
    console.log("RiCornerDownLeftFill:", RiCornerDownLeftFill);
    console.log("TooltipInfo:", TooltipInfo);
    console.log("Button:", Button);
    console.log("Input:", Input);
    console.log("Label:", Label);
    console.log("SelectItems:", SelectItems);
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Nombre del usuario</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input name="name" className=" w-56" placeholder="Nombre" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas el nombre del usuario/empleado"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="lastName">Apellidos</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input name="lastName" className=" w-56 " placeholder="Apellidos" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas los apellidos del usuario/empleado"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Telefono</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input name="phone" className=" w-56 " placeholder="Telefono" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas el numero de telefono del usuario/empleado"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Rol del usuario</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <SelectItems className="w-56" name="rol" placeHolder="Roles" data={rolData} />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui seleccionas el rol que tendra tu usuario/empleado dentro de la organizacion."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Clave</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input name="password" type="password" className=" w-56 " placeholder="Clave" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas la clave de acceso del usuario/empleado"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Confirmar clave</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input name="confirmPassword" type="password" className=" w-56 " placeholder="Confirmar clave" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Confirma aqui la clave de acceso del usuario/empleado"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">

                    <TooltipInfo
                        element={
                            <Link to="/admin/users">
                                <Button className="bg-[#5a6e8a] hover:bg-[#4d5f7c]" type="submit">
                                    <RiCornerDownLeftFill className="w-5 h-5 mr-1" />
                                    Regresar
                                </Button>
                            </Link>}
                        text="Presiona el boton para regresar al listado de usuarios."
                    />

                    <TooltipInfo
                        element={
                            <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]" type="submit">
                                <RiAddLine className="w-5 h-5 mr-1" />
                                Crear usuario
                            </Button>}
                        text="Si los campos estan completos, puedes crear tu usuario al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}