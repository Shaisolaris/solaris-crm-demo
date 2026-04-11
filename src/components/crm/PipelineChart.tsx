"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PipelineChart() {
  const stages = [
    { name: "Lead", value: 184, deals: 184 },
    { name: "Qualified", value: 127, deals: 127 },
    { name: "Proposal", value: 84, deals: 84 },
    { name: "Negotiation", value: 46, deals: 46 },
    { name: "Closed Won", value: 31, deals: 31 },
  ];

  const options: ApexOptions = {
    colors: ["#6366f1"],
    chart: {
      type: "bar",
      height: 280,
      toolbar: { show: false },
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: "65%",
        distributed: false,
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 28,
      style: { fontSize: "12px", fontWeight: 600, colors: ["#6366f1"] },
      formatter: (val: number) => `${val} deals`,
    },
    xaxis: {
      categories: stages.map((s) => s.name),
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
      yaxis: { lines: { show: false } },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val} deals` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-3 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Deal Pipeline
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            472 active deals across all stages
          </p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
          This quarter
        </span>
      </div>
      <div className="mt-4 -ml-2">
        <ReactApexChart
          options={options}
          series={[{ name: "Deals", data: stages.map((s) => s.value) }]}
          type="bar"
          height={280}
        />
      </div>
    </div>
  );
}
