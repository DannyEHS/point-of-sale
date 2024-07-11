"use client"

import { Bar, CartesianGrid, XAxis, YAxis, ScatterChart, Scatter, Legend } from "recharts"

import { ChartConfig, ChartContainer,   ChartTooltip, ChartTooltipContent, } from "~/components/ui/dashboard/chart"

type Props = {
    chartData: any,
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#e11d48",
  },
} satisfies ChartConfig

export function ScatterChartComponent({chartData}: Readonly<Props>) {
    return (
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <ScatterChart width={500}
            height={200}
             data={chartData}
             margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
            <CartesianGrid vertical={true} />
            <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={2} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={2} />
            <YAxis tickLine={false} axisLine={false}/>
            {/* <Legend /> */}
            <Scatter type="monotone" dataKey="desktop" stroke="#2563eb" fill="#2563eb" line />
            <Scatter type="monotone" dataKey="mobile" stroke="#e11d48" fill="#e11d48" line />
        </ScatterChart> 
      </ChartContainer>
    )
  }
