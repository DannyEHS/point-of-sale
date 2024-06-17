import { Form, Link, useLoaderData } from "@remix-run/react";
import InputUpdate from "../../general/InputUpdate";
import TextAreaUpdate from "../../general/TextAreaUpdate";
import { Button } from "~/components/ui/button"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";

type Props = {
    data: any
    nameInput: string
    nameTextArea: string
}

export default function FromEditRol({ data, nameInput, nameTextArea } : Props) {

    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput} value={data?.name} className=" w-96 m-3 " placeholder="Nombre para el rol" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el nombre del rol administrativo que tenga tu organizacion"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <TextAreaUpdate name={nameTextArea} value={data?.description} className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa una descripcion que haga referencia al rol que desees crear."
                    />
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
                            <Button type="submit">Editar</Button>
                        }
                        text="Si los campos estan completos, puedes crear tu usuario al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}