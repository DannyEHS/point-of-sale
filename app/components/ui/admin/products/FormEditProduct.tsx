import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";
import SelectItems from "~/components/ui/admin/SelectItems";
import InputUpdate from "../../general/InputUpdate";
import TextAreaUpdate from "../../general/TextAreaUpdate";
import SelectItemUpdate from "../../general/SelectItemUpdate";

type Props = {
    categoryData?: {
        id: string;
        name: string;
    }[];
    data?: any;
    nameInput: {
        barCode: string;
        name: string;
        stock: string;
        price: string;
        cost: string;
      };
    nameTextArea: string;
    nameSelect: string;
}

export default function FromEditProduct({ nameSelect ,categoryData, data, nameInput, nameTextArea } : Props) {
    console.log("Data FormEditProduct:",data.category.name);
    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.barCode} value={data?.barCode} className=" w-96 m-3 " placeholder="Codigo de barras" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el codigo de barras de tus productos"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.name} value={data?.name} className=" w-96 m-3 " placeholder="Nombre del producto" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa el nombre del product a crear."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.stock} value={data?.stock} className=" w-96 m-3 " placeholder="Cantidad" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa la cantidad de productos a ingresar."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.price} value={data?.price} className=" w-96 m-3 " placeholder="Ingresa el precio" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresas el precio al que daras el producto."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <InputUpdate name={nameInput.cost} value={data?.cost} className=" w-96 m-3 " placeholder="Ingresa el costo" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa lo que te costo comprar dicho producto a tu proveedor."
                    />
                </div>
                <div className="flex flex-row items-center">
                    <TextAreaUpdate name={nameTextArea} value={data?.description} className=" w-96 m-3 " placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline />}
                        text="Aqui ingresa una descripcion que haga referencia al producto que desees crear."
                    />
                </div>
                
                <div className="flex flex-row items-center">
                <SelectItemUpdate name={nameSelect} value={data.category?.id} data={categoryData} placeholder="Categorias" />
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
                        text="Presiona el boton para regresar al listado de productos."
                    />
                    <TooltipInfo
                        element={
                            <Button type="submit">Editar</Button>
                        }
                        text="Si los campos estan completos, puedes editar tu producto al presionar este boton."
                    />
                </div>
            </Form>
        </>
    )
}