"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer,   ChartTooltip, ChartTooltipContent, } from "~/components/ui/dashboard/chart"



const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig


type Props = {
  chartData: any,

}

export function BarChartComponent({ chartData }: Readonly<Props>) {
    return (
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <BarChart accessibilityLayer data={chartData} >
          <CartesianGrid vertical={false} className="min-h-[100px] w-full" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          {/* <YAxis tickMargin={10} tickLine={false} axisLine={false} /> */}
          <ChartTooltip content={<ChartTooltipContent />} />
          
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={6}/>
        </BarChart>
      </ChartContainer>
    )
  }
