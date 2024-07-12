import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";
import SelectItems from "~/components/ui/admin/SelectItems";

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
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el codigo de barras de tus productos"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="name" className=" w-96 m-3 " placeholder="Nombre del producto" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa el nombre del product a crear."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="stock" className=" w-96 m-3 " placeholder="Cantidad" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa la cantidad de productos a ingresar."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="price" className=" w-96 m-3 " placeholder="Ingresa el precio" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el precio al que daras el producto."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Input name="cost" className=" w-96 m-3 " placeholder="Ingresa el costo" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa lo que te costo comprar dicho producto a tu proveedor."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <Textarea name="description" className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa una descripcion que haga referencia al producto que desees crear."
                    />
                </div>
                
                <div className="flex flex-row items-center">
                    <SelectItems name="category" placeHolder="Categorias" data={categoryData}/>
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui seleccionas la categoria a la que debe pertenecer el producto."
                    />
                </div>
                <div className="flex flex-row space-x-3 m-3 items-center">
                    <TooltipInfo
                        element={
                            <Link to="/admin/products">
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