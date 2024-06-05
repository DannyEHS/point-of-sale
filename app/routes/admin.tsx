import type { MetaFunction } from "@remix-run/node";
import { Fragment } from "react/jsx-runtime";
import MainLayout from "~/components/ui/Layouts/mainLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Fragment>
      <MainLayout className="text-6xl w-full h-full bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<div>Administration</div>}>
        <h1 className="text-[#3d3d3d] dark:text-white">Welcome to administration</h1>
      </MainLayout>
    </Fragment>
  );
}
