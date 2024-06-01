import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { GiClick } from "react-icons/gi";
import { Fragment } from "react/jsx-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (


      <Fragment>
        <h1 className="text-[#3d3d3d] dark:text-white">Welcome to the Hell</h1>
        <Button className="mt-2 text-white dark:text-[#3d3d3d] bg-[#5d5d5d] dark:bg-[#f6f6f6]"
          variant={"outline"}
        >
          <h2>prueba commit</h2>
          <h2>prueba commit erik</h2>
          <GiClick />
          Apachurrame
        </Button>
      </Fragment>
    
  );
}
