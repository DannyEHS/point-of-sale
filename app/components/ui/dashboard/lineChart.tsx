"use client"

import { Line, CartesianGrid, LineChart, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer,   ChartTooltip, ChartTooltipContent, } from "~/components/ui/dashboard/chart"



const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig


type Props = {
  chartData: any,

}

export function LineChartComponent({ chartData }: Readonly<Props>) {
    return (
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <LineChart accessibilityLayer data={chartData} >
          <CartesianGrid vertical={false} className="min-h-[100px] w-full" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          {/* <YAxis tickMargin={10} tickLine={false} axisLine={false} /> */}
          <ChartTooltip content={<ChartTooltipContent hideLabel/>} />
          
          <Line dataKey="desktop" type="natural" fill="var(--color-desktop)" strokeWidth={2} radius={6} dot={false}/>
        </LineChart>
      </ChartContainer>
    )
  }
