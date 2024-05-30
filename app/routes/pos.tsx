import type { MetaFunction } from "@remix-run/node";
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
      <h1 className="text-[#3d3d3d] dark:text-white">Welcome point of sale</h1>
    </Fragment>

    
  );
}
