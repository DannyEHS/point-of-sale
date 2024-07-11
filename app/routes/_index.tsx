import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { GiClick } from "react-icons/gi";
import { Fragment } from "react/jsx-runtime";
import MainLayout from "~/components/ui/Layouts/mainLayout";
import CardChart from "~/components/ui/dashboard/cardChart"
import { CiBoxes } from "react-icons/ci";
import { BarChartComponent } from "~/components/ui/dashboard/barChart";
import {ScatterChartComponent } from "~/components/ui/dashboard/scatterChart";
import {LineChartComponent } from "~/components/ui/dashboard/lineChart";
import {ScrollAreaDemo} from "~/components/ui/dashboard/scroll";
import { ScrollArea } from "~/components/ui/dashboard/scrollArea";
import TableCard from "~/components/ui/dashboard/tableCard";
import {Table} from "~/components/ui/dashboard/users.json";
import {Productos} from "~/components/ui/dashboard/productos.json";
import {Inventory} from "~/components/ui/dashboard/inventory.json";
import LinkTo from "~/components/ui/general/Link";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

//Aquí sería hacer un request de la data de la base de datos, por ahora solo es un array de objetos
const chartData = [
  { month: "January", desktop: 100 },
  { month: "February", desktop: 150 },
  { month: "March", desktop: 125 },
  { month: "April", desktop: 145 },
  { month: "May", desktop: 110 },
  { month: "June", desktop: 75 },
]
const chartData2 = [
  { month: "January", desktop: 50 , mobile: 60},
  { month: "February", desktop: 145, mobile: 50 },
  { month: "March", desktop: 75, mobile: 180 },
  { month: "April", desktop: 150, mobile: 80 },
  { month: "May", desktop: 30, mobile: 90 },
  { month: "June", desktop: 160 , mobile: 200},
]
const chartData3 = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305},
  { month: "March", desktop: 237},
  { month: "April", desktop: 73},
  { month: "May", desktop: 209},
  { month: "June", desktop: 214 },
]


export default function Index() {

  return (


    <Fragment>
      <MainLayout className="flex flex-col bg-[#f6f6f6] dark:bg-[#252525]" as="main" Header={<div>Dashboard</div>}>
        <h1 className="text-[#3d3d3d] dark:text-white">Welcome to the Hell</h1>
        <Button className="mt-2 text-white dark:text-[#3d3d3d] bg-[#5d5d5d] dark:bg-[#f6f6f6]"
          variant={"outline"}
        >
          <h2>prueba commit</h2>
          <h2>prueba commit erik</h2>
          <GiClick />
          Apachurrame
        </Button>
        <div className="grid w-full grid-cols-3 gap-12 p-10">
          <CardChart textTitle="Total Sales" textDescription="$12,345 in the last 30 days" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent="" children={<LineChartComponent chartData={chartData3}/>} />
          <CardChart textTitle="Inventory Value" textDescription="$12,345 worh of stock on hand" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent="" children={<BarChartComponent chartData={chartData}/>} />
          <CardChart textTitle="New Customers" textDescription="123 new customers in the last 30 days" iconContent={<CiBoxes className="mr-3" />} textFooter="" texContent=""  children={<ScatterChartComponent chartData={chartData2}/>} />
          <CardChart textTitle="User Management" textDescription="Manage employee roles and permissions" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Check" link="/admin/users"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Table}/>
			      </ScrollArea>}  />
          <CardChart textTitle="Product Management" textDescription="Add and edit products on your inventory" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Check" link="/admin/products"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Productos}/>
			      </ScrollArea>}/>
          <CardChart textTitle="Inventory Tracking" textDescription="Monitor stock levels and get low inventory alerts" iconContent={<CiBoxes className="mr-3" />} textFooter={<LinkTo text="Check" link="/inventory"/>} texContent="" children={
            <ScrollArea className="h-40 w-full">
              <TableCard data={Inventory}/>
			      </ScrollArea>}/>
        </div>
      </MainLayout>
    </Fragment>

  );
}
