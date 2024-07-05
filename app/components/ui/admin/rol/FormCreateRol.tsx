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
import CheckBoxRoutes from "./CheckBoxRoutes";

export default function FromCreateRol() {
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row space-x-8 items-center">
                    <div className="flex flex-col items-center">
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
                    </div>
                    <div className="flex flex-col space-y-2">
                        <CheckBoxRoutes text="Dashboard" name="dashboard" />
                        <CheckBoxRoutes text="POS" name="pos" />
                        <CheckBoxRoutes text="Inventario" name="inventario" />
                        <CheckBoxRoutes text="Administracion" name="administracion" />
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
                        text="Si los campos estan completos, puedes crear tu rol al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}