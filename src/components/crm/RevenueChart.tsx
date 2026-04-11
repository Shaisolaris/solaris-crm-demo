"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RevenueChart() {
  const options: ApexOptions = {
    colors: ["#6366f1", "#a5b4fc"],
    chart: {
      type: "area",
      height: 310,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "13px",
      markers: { strokeWidth: 0 },
      itemMargin: { horizontal: 10 },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#6B7280", fontSize: "12px" },
        formatter: (val: number) => `$${val}K`,
      },
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 4 },
    tooltip: {
      y: { formatter: (val: number) => `$${val}K` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Revenue by Month
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Closed-won deal revenue, last 12 months
          </p>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$1.84M</span>
          <span className="text-theme-sm font-semibold text-emerald-600">+18.2%</span>
        </div>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[
            {
              name: "2026",
              data: [82, 96, 104, 118, 132, 148, 162, 174, 158, 186, 204, 220],
            },
            {
              name: "2025",
              data: [60, 72, 80, 88, 92, 110, 124, 138, 130, 142, 156, 168],
            },
          ]}
          type="area"
          height={310}
        />
      </div>
    </div>
  );
}
