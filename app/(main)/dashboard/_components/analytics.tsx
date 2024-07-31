"use client";

import React from "react";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Rectangle,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book } from "@prisma/client";

interface AnalyticsProp {
  totals: {
    bookings: Book[] | null;
    completed: Book[] | null;
    pending: Book[] | null;
  };
}

export const Analytics = ({ totals }: AnalyticsProp) => {
  const totalSales = totals.completed?.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const chartConfig = {
    booked: {
      label: "Booked",
      color: "hsl(var(--chart-1))",
    },
    pending: {
      label: "Pending",
      color: "hsl(var(--chart-2))",
    },
    completed: {
      label: "Completed",
      color: "hsl(var(--chart-4))",
    },
    totalSales: {
      label: "Total Sales",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const dashboard = [
    {
      name: "Booked",
      total: totals.bookings?.length,
      fill: "var(--color-booked)",
    },
    {
      name: "Pending",
      total: totals.pending?.length,
      fill: "var(--color-pending)",
    },
    {
      name: "Completed",
      total: totals.completed?.length,
      fill: "var(--color-completed)",
    },
    {
      name: "Total Sales",
      total: totalSales,
      fill: "var(--color-totalSales)",
    },
  ];

  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold mb-10">Analytics</h1>

      <div className="grid grid-cols-2 gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
            <CardDescription>Booked, Pending and Completed</CardDescription>
          </CardHeader>

          <CardContent>
            <ChartContainer config={chartConfig} className=" w-full">
              <BarChart accessibilityLayer data={dashboard}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="total"
                  fill="var(--color-desktop)"
                  radius={8}
                  activeIndex={2}
                  activeBar={({ ...props }) => {
                    return (
                      <Rectangle
                        {...props}
                        fillOpacity={0.8}
                        stroke={props.payload.fill}
                      />
                    );
                  }}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="leading-none text-muted-foreground">
              Showing totals of Booked, Pending and Completed
            </div>
          </CardFooter>
        </Card>

        <Card className="flex flex-col ">
          <CardHeader className="items-center pb-0">
            <CardTitle>Pie Chart - Label</CardTitle>
            <CardDescription>Booked, Pending and Completed</CardDescription>
          </CardHeader>
          <CardContent className="mt-10 flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={dashboard} dataKey="total" label nameKey="name" />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="leading-none text-muted-foreground">
              Showing totals of Booked, Pending and Completed
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
