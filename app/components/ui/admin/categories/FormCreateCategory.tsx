import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function FromCreateCategory() {
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <Input name="name" className=" w-96 m-3 " placeholder="Nombre para la categoria" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el nombre de la categoria para tus productos"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa una descripcion que haga referencia a la categoria que desees crear."
                    />
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipInfo
                        element={
                            <Link to="/admin/categories">
                                <Button>Regresar</Button>
                            </Link>
                        }
                        text="Presiona el boton para regresar al listado de categorias."
                    />
                    <TooltipInfo
                        element={
                            <Button type="submit">Crear</Button>
                        }
                        text="Si los campos estan completos, puedes crear tu categoria al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}