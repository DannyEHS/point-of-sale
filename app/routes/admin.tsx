import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { GiClick } from "react-icons/gi";
import Sidebar from '~/components/ui/Navigation/sideBar'
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
      <h1 className="texttext-[#3d3d3d] dark:text-white">Welcome to administration</h1>
    </Fragment>

    
  );
}
