import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { GiClick } from "react-icons/gi";


export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" flex flex-col items-center justify-center text-6xl w-screen h-screen bg-[#f6f6f6] dark:bg-[#252525]">
      <h1 className="texttext-[#3d3d3d] dark:text-white">Welcome to the Hell</h1>
      <Button className="mt-2 text-white dark:text-[#3d3d3d] bg-[#5d5d5d] dark:bg-[#f6f6f6]"
        variant={"outline"}
      >
        <h2>prueba commit</h2>
        <GiClick />
        Apachurrame
      </Button>
    </div>
  );
}
