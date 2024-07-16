import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Textarea } from "~/components/ui/textarea"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import TooltipInfo from "~/components/ui/general/TooltipInfo"
import { IoMdHelpCircleOutline } from "react-icons/io";
import SelectItems from "~/components/ui/admin/SelectItems";

import { RiAddLine } from "react-icons/ri";
import { RiCornerDownLeftFill } from "react-icons/ri";
import { useState } from "react";

type Props = {
    categoryData: {
        id: string;
        name: string;
    }[];
}

export default function FromCreateProduct({ categoryData }: Props) {
    console.log(categoryData);

    return (
        <>
            <Form method="post" className="flex flex-col items-center bg-[#fafbfb] dark:bg-[#252525] w-9/12">
                <div className="flex-col">
                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="barCode">Codigo de Barras</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input id="barCode" name="barCode" className=" w-56" placeholder="ejem. 59012341234567" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas el codigo de barras de tus productos"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="model">Modelo</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input id="model" name="model" className=" w-56" placeholder="MKG-345" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas el modelo de tus productos"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Nombre del producto</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input id="name" name="name" className=" w-56" placeholder="Nombre del producto" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresa el nombre del product a crear."
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label>Categoria del producto</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <SelectItems name="category" className="w-56" placeHolder="Categorias" data={categoryData} />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui seleccionas la categoria a la que debe pertenecer el producto."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-start space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="cost">Costo del producto</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input id="cost" name="cost" className=" w-56" placeholder="Ingresa el costo por pieza" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresa lo que te costo comprar dicho producto a tu proveedor."
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="price">Precio del producto</Label>
                            <div className="flex flex-row items-center space-x-3">
                                <Input id="price" name="price" className=" w-56" placeholder="Ingresa el precio por pieza" />
                                <TooltipInfo
                                    element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                                    text="Aqui ingresas el precio al que daras el producto."
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="stock">Cantidad del producto</Label>
                    <div className="flex flex-row items-center space-x-3">
                        <Input id="stock" name="stock" className=" w-96" placeholder="Cantidad por pieza" />
                        <TooltipInfo
                            element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                            text="Aqui ingresa la cantidad de productos a ingresar."
                        />
                    </div>
                    <Label htmlFor="description">Descripcion</Label>
                    <Textarea id="description" name="description" className=" w-96" placeholder="Ingresa un breve descripcion" />
                    <TooltipInfo
                        element={<IoMdHelpCircleOutline className="text-[#5a6e8a] w-5 h-5" />}
                        text="Aqui ingresa una descripcion que haga referencia al producto que desees crear."
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
                                <RiAddLine className="w-5 h-5 mr-1" />
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