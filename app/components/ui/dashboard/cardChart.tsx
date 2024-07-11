"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer,   ChartTooltip, ChartTooltipContent, } from "~/components/ui/dashboard/chart"
import { string } from "zod"



const chartConfig = {
  desktop: {
    label: "Stock",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

type Props = {
  textTitle: string,
  textDescription: string,
  texContent: string,
  textFooter: string | React.ReactNode,
  iconContent: React.ReactElement,
  children?: React.ReactNode,
}

export default function CardChart({ textTitle, textDescription, textFooter, iconContent, children}: Readonly<Props>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="pt-5 pb-3">{textTitle}</CardTitle>
        <CardDescription className="pb-5">{textDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        {children}
      </CardContent>
      <CardFooter>
        <p>{textFooter}</p>
      </CardFooter>
    </Card>
  )
}