"use client";
import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart/chart";

interface DataPoint {
  name: string;
  value: number;
  fill: string;
}

export function Component() {
  const [chartData, setChartData] = React.useState<DataPoint[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const categoryCounts: Record<string, number> = {};

        data.products.forEach((product: any) => {
          const category = product.category;
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });

        const processedData = Object.keys(categoryCounts).map(
          (category, index) => ({
            name: category,
            value: categoryCounts[category],
            fill: `hsl(${(index * 60) % 360}, 70%, 50%)`,
          })
        );

        setChartData(processedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const totalCount = React.useMemo(() => {
    return chartData.reduce((sum, curr) => sum + curr.value, 0);
  }, [chartData]);

  const chartConfig = {
    value: {
      label: "Products",
    },
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>Product Categories (DummyJSON)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Products
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Data fetched from DummyJSON API
        </div>
      </CardFooter>
    </Card>
  );
}
