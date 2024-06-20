import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
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
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <Input name="name" className=" w-96 m-3 " placeholder="Nombre para el rol" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el nombre del rol administrativo que tenga tu organizacion"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa una descripcion que haga referencia al rol que desees crear."
                    />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <h1 className="text-2xl">Prioridad del Nivel</h1>
                        <Button className="ml-80">Agregar Nivel</Button>
                    </div>                    
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipInfo
                        element={
                            <Link to="/admin/rol">
                                <Button type="submit">Regresar</Button>
                            </Link>
                        }
                        text="Presiona el boton para regresar al listado de Roles."
                    />
                    <TooltipInfo
                        element={
                            <Button type="submit">Crear</Button>
                        }
                        text="Si los campos estan completos, puedes crear tu usuario al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}