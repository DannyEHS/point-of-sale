import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
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
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <Input name="name" className=" w-96 m-3 " placeholder="Nombre para el rol" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresas el nombre del rol administrativo que tenga tu organizacion</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row items-center">
                    <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p>
                                    <IoMdHelpCircleOutline />
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Aqui ingresa una descripcion que haga referencia al rol que desees crear.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to="/admin/rol">
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