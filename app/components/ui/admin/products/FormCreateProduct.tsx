import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";
import SelectItems from "~/components/ui/admin/SelectItems";

import { RiAddLine } from "react-icons/ri";
import { RiCornerDownLeftFill } from "react-icons/ri";

type Props = {
    categoryData: {
        id: string;
        name: string;
    }[];
}

export default function FromCreateProduct({ categoryData } : Props) {
    console.log(categoryData);
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <Input name="barCode" className=" w-96 m-3 " placeholder="Codigo de barras" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresas el codigo de barras de tus productos"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="name" className=" w-96 m-3 " placeholder="Nombre del producto" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresa el nombre del product a crear."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="stock" className=" w-96 m-3 " placeholder="Cantidad" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresa la cantidad de productos a ingresar."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="price" className=" w-96 m-3 " placeholder="Ingresa el precio" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresas el precio al que daras el producto."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="cost" className=" w-96 m-3 " placeholder="Ingresa el costo" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresa lo que te costo comprar dicho producto a tu proveedor."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui ingresa una descripcion que haga referencia al producto que desees crear."
                    />
                </div>
                
                <div className="flex flex-row items-center">
                    <SelectItems name="category" placeHolder="Categorias" data={categoryData}/>
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5"/>}
                        text="Aqui seleccionas la categoria a la que debe pertenecer el producto."
                    />
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipInfo
                        element={
                            <Link to="/admin/products">
                                <Button className="bg-[#5a6e8a] hover:bg-[#4d5f7c]">
                                    <RiCornerDownLeftFill className="w-5 h-5 mr-1" />
                                    Regresar
                                </Button>
                            </Link>
                        }
                        text="Presiona el boton para regresar al listado de categorias."
                    />
                    <TooltipInfo
                        element={
                            <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]" type="submit">
                                <RiAddLine className="w-5 h-5 mr-1"/>
                                Crear Producto
                            </Button>
                        }
                        text="Si los campos estan completos, puedes crear tu categoria al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}