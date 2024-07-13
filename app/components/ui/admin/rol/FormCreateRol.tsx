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
import { RiAddLine, RiCornerDownLeftFill } from "react-icons/ri";

export default function FromCreateRol() {
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row space-x-8 items-center">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center">
                            <Input name="name" className=" w-96 m-3 " placeholder="Nombre para el rol" />
                            <TooltipInfo
                                element={<IoMdHelpCircleOutline className="text-[#5a6e8a]" />}
                                text="Aqui ingresas el nombre del rol administrativo que tenga tu organizacion"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                            <TooltipInfo
                                element={<IoMdHelpCircleOutline className="text-[#5a6e8a]" />}
                                text="Aqui ingresa una descripcion que haga referencia al rol que desees crear."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <TooltipInfo
                            element={
                                <CheckBoxRoutes text="Dashboard" name="dashboard" />

                            }
                            text="Delimita los alcances del rol dentro de la aplicacion (Apartado: Dashboard)"
                        />
                        <TooltipInfo
                            element={
                                <CheckBoxRoutes text="Punto de venta" name="pos" />

                            }
                            text="Delimita los alcances del rol dentro de la aplicacion (Apartado: Punto de venta)"
                        />
                        <TooltipInfo
                            element={
                                <CheckBoxRoutes text="Inventario" name="inventario" />

                            }
                            text="Delimita los alcances del rol dentro de la aplicacion (Apartado: Inventario)"
                        />
                        <TooltipInfo
                            element={
                                <CheckBoxRoutes text="Administracion" name="administracion" />

                            }
                            text="Delimita los alcances del rol dentro de la aplicacion (Apartado: Administracion)"
                        />
                    </div>

                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipInfo
                        element={
                            <Link to="/admin/rol">
                                <TooltipInfo
                                    element={
                                        <Link to="/admin/rol">
                                            <Button className="bg-[#5a6e8a] hover:bg-[#4d5f7c]">
                                                <RiCornerDownLeftFill className="w-5 h-5 mr-1" />
                                                Regresar
                                            </Button>
                                        </Link>
                                    }
                                    text="Presiona el boton para regresar al listado de categorias."
                                />
                            </Link>
                        }
                        text="Presiona el boton para regresar al listado de Roles."
                    />
                    <TooltipInfo
                        element={
                            <TooltipInfo
                                element={
                                    <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]" type="submit">
                                        <RiAddLine className="w-5 h-5 mr-1" />
                                        Crear rol
                                    </Button>
                                }
                                text="Si los campos estan completos, puedes crear tu categoria al presionar este boton."
                            />
                        }
                        text="Si los campos estan completos, puedes crear tu rol al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}