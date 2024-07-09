import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/ui/button"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";
import InputUpdate from "../../general/InputUpdate";
import TextAreaUpdate from "../../general/TextAreaUpdate";

type Props = {
    data: any
    nameInput: string
    nameTextArea: string
}

export default function FormEditCategory({ data, nameInput, nameTextArea }: Props) {
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput} value={data?.name} className=" w-96 m-3 " placeholder="Nombre para la categoria" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas el nombre de la categoria para tus productos"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <TextAreaUpdate name={nameTextArea} value={data?.description} className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui actualizas la descripcion para la categoria."
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
                            <Button type="submit">Editar</Button>
                        }
                        text="Si los campos estan completos, puedes editar tu categoria al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}