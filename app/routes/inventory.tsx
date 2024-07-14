import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import prisma from "prisma/prisma";
import { RiArchiveLine } from "react-icons/ri";
import TableProducts from "~/components/ui/inventory/TableProducts";
import { Input } from "~/components/ui/input";
import useFilterProducts from "~/hooks/products/useFilterProduct";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const categories = await prisma.category.findMany();
  const productsAndCategories = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  console.log(productsAndCategories)
  return {
    products: productsAndCategories
  }
}

export default function Index() {

  const { products } = useLoaderData<typeof loader>();
  const { searchTerm, setSearchTerm, filteredProducts } = useFilterProducts(products)

  return (
    <div className="m-3 items-center justify-start h-screen w-full">
      <div className="m-3 space-y-4">
        <h1 className="flex flex-row items-end mb-3 text-2xl text-[#3d3d3d] dark:text-white">
          <RiArchiveLine className="text-[#5a6e8a] mr-1 w-10 h-10" />
          Inventario
        </h1>
        <div className="flex flex-row w-full items-center space-x-2">
          <Input
            className="w-96"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <TableProducts data={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
