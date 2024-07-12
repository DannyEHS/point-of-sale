import type { MetaFunction } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Fragment } from "react/jsx-runtime";
import TableProductsReceivable from "~/components/ui/pos/TableProductsReceivable";
import AmountButton from "~/components/ui/pos/AmountButton";
import { Button } from "~/components/ui/button";

import MainLayout from "~/components/ui/Layouts/mainLayout";
import CardPOS from "~/components/ui/pos/cardPos";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";
import TabsPos from "~/components/ui/pos/tabsPos";
import {ScrollArea} from "~/components/ui/general/scrollArea";
import { Separator } from "~/components/ui/general/separator"
import DialogPOS from "~/components/ui/pos/DialogPos";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainLayout className="flex flex-col bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<Fragment></Fragment>}>
      <div className="grid w-full grid-cols-3 gap-2.5 p-2.5">
        <CardPOS 
          className="col-span-2"
          textTitle="Punto de Venta" 
          textDescription="Realiza las ventas de tus productos aquí." 
          texContent="" 
          textFooter=""
          iconContent={<FiShoppingCart />}
          >
            <Input className="max-w-screen-sm" placeholder="Ingresa codigo de barras o el nombre del producto" />
            <div className="flex flex-row space-x-40 ">
              <div className="flex flex-col space-y-4">
                {/* Scroll area, podriamos cambiarla por la paginación */}
                <ScrollArea className="h-56 mt-5">
                  <TableProductsReceivable />
                </ScrollArea>
              </div>
            </div>
        </CardPOS>
        <div className="h-full">
          <CardPOS 
            className="mb-2.5"
            textTitle="Método de Pago"
            textDescription="Selecciona el método de pago." 
            texContent="" 
            textFooter=""
            iconContent={<MdOutlineAttachMoney />}
            >
              <TabsPos 
                option_1="Efectivo"
                option_2="Tarjeta"
                //Si funciona esta sección, pero aun no decido si dejarlo como tabs o como botones
                // content_1={<div></div>}
                // content_2={<div></div>}
                />
          </CardPOS>
          <CardPOS 
            className=""
            textTitle="Ticket"
            textDescription="Impresión o envío del ticket." 
            texContent="" 
            textFooter=""
            iconContent={<TfiTicket />}
            >
              <TabsPos 
                option_1="Físico"
                option_2="Digítal"
                //Igual que el de arriba
                // content_1={<div>
                //   {/* <Input className="w-full" placeholder="Nombre del cliente" /> */}
                // </div>}
                // content_2={<div>Enviando Ticket...</div>}
                />
                {/* Componentes para ticket */}
                <div className="grid w-full gap-2.5 pt-1.5">
                  <Separator />
                  <Input className="h-8" placeholder="Nombre del cliente" />
                  <Input className="h-8" placeholder="Teléfono del cliente" />
                  <div className="w-full flex flex-row space-x-3">
                    {/* Boton con el dialog para agregar un cliente nuevo, aquí meteriamos el backend :v */}
                    <DialogPOS textButton="Nuevo Cliente" titleDialog="Agregar nuevo Cliente" descriptionDialog="Introduce los datos del nuevo cliente" 
                    children={
                    <form className="grid grid-cols-4 items-center gap-4">
                      <p>Nombre </p>
                      <Input className="col-span-3" id="name" placeholder="Nombre del cliente" />
                      <p>Telefono </p>
                      <Input className="col-span-3" id="phone" placeholder="Teléfono del cliente" />
                    </form>}/>
                    {/* Botones para buscar cliente y enviar ticket */}
                    <Button variant={"secondary"} className="w-18">Buscar</Button>
                    <Button className="w-18" >Enviar</Button>
                  </div>
                </div>
          </CardPOS>
        </div>
        {/* Botones con cantidades */}
        <div className="col-span-2">
          <div className="grid w-full gap-2.5">
            <div className="flex flex-row space-x-3 ">
                <Input className="w-60" placeholder="Ingresa el el efectivo." />
                <AmountButton className="bg-[#469ECA] w-20">$ 20</AmountButton>
                <AmountButton className="bg-[#C8A5C7] w-20">$ 50</AmountButton>
                <AmountButton className="bg-[#B5423B] w-20">$ 100</AmountButton>
                <AmountButton className="bg-[#B5C15D] w-20">$ 200</AmountButton>
                <AmountButton className="bg-[#3A2A2C] w-20">$ 500</AmountButton>
            </div>
            <div className="flex flex-row space-x-6 ">
                <Button className="bg-[#B5423B] w-32">Borrar</Button>
                <Button className="bg-[#469ECA] w-32">Editar</Button>
                <Button className="bg-[#B5C15D] w-32">Finalizar</Button>
            </div>
          </div>
        </div>
        {/* Subtotal-impuesto-(podríamos agregar aquí los descuentos en caso de haber)-y total */}
        <div className="px-5">
          <Separator />
          <div className="flex justify-between pt-1.5">
            <p>Subtotal: </p>
            <p>$ 0.00 </p>
          </div>
          <div className="flex justify-between pb-1.5">
            <p>Impuesto: </p>
            <p>$ 0.00 </p>
          </div>
          <Separator />
          <div className="flex justify-between font-bold py-1.5">
            <p>Total: </p>
            <p>$ 0.00 </p>
          </div>
        </div>
      </div>
   </MainLayout> 
    
  );
}
