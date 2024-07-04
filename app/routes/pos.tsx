import type { MetaFunction } from "@remix-run/node";
import { Input } from "~/components/ui/input";

import TableProductsReceivable from "~/components/ui/pos/TableProductsReceivable";
import AmountButton from "~/components/ui/pos/AmountButton";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="items-center justify-start h-screen w-full">
      <div className="m-3 space-y-4">
        <div className="flex flex-col ">
          <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">Punto de Venta</h1>
          <Input className="max-w-screen-sm" placeholder="Ingresa codigo de barras o el nombre del producto" />
        </div>
        <div className="flex flex-row space-x-40 ">
          <div className="flex flex-col space-y-4">
            <div className="h-72">
              <TableProductsReceivable />
            </div>
            <div className="flex flex-row space-x-5">
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
          <div className="flex flex-col">
            dere
          </div>
        </div>
      </div>
    </div>
  );
}
