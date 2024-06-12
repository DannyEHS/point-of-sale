import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import SelectItems from "~/components/ui/admin/SelectItems"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip"
import { IoMdHelpCircleOutline } from "react-icons/io";


export default function FromCreateUser() {
    return (
        <>
            <Form className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Nombre completo" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresas el nombre del Usuario</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Apellido Paterno" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresas el apellido paterno del usuario</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Apellido Materno" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresas el apellido materno del usuario.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="ejemplo@gmail.com" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui debes ingresas el correo electronico del usuario.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Password" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>El nuevo usuario debe ingresar su clave, debe ser secreta.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Confirmar Password" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>La clave debe ser identica al campo anterior para poder validarla.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <SelectItems itemsText="xxxxxxxxxx" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Selecciona el rol que tendra el usuario dentro de la organizacion.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row space-x-3 m-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to="/admin/users">
                                    <Button type="submit">Regresar</Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Presiona el boton para regresar al listado de Usuarios.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button type="submit">Crear</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Si los campos estan completos, puedes crear tu usuario al presionar este boton.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </Form>
        </>
    )
}