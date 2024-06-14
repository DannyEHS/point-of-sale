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


export default function FromCreateRol() {
    return (
        <>
            <Form className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Rol del empleado" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresas el nombre del Rol</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Descripcion" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Redacta una descripcion breve que hable sobre la funcion del rol dentro de la organizacion.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row">
                    <Input className=" w-96 m-3 " placeholder="Ingresa un valor para el rol" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>El valor que le des al rol dependera de cuantos roles quieras tener, el numero mas grande implica que tiene mas libertades en el manejo del sistema.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row space-x-3 m-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to="/admin/rol">
                                    <Button type="submit">Regresar</Button>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Presiona el boton para regresar al listado de Roles.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button type="submit">Crear</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Si los campos estan completos, puedes crear tu rol al presionar este boton.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </Form>
        </>
    )
}