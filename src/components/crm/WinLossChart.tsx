"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WinLossChart() {
  const won = 68;
  const lost = 21;
  const inProgress = 11;

  const options: ApexOptions = {
    colors: ["#6366f1", "#f87171", "#fbbf24"],
    chart: {
      type: "donut",
      height: 280,
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    },
    labels: ["Won", "Lost", "In Progress"],
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: { show: true, fontSize: "14px", color: "#6B7280", offsetY: -8 },
            value: {
              show: true,
              fontSize: "30px",
              fontWeight: 700,
              color: "#111827",
              offsetY: 8,
              formatter: (val: string) => `${val}%`,
            },
            total: {
              show: true,
              label: "Win Rate",
              fontSize: "14px",
              color: "#6B7280",
              formatter: () => `${won}%`,
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: {
      position: "bottom",
      fontSize: "13px",
      markers: { strokeWidth: 0 },
      itemMargin: { horizontal: 8, vertical: 4 },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val}%` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Win / Loss Ratio
        </h3>
        <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
          All deals closed in the last 90 days
        </p>
      </div>
      <div className="mt-2">
        <ReactApexChart
          options={options}
          series={[won, lost, inProgress]}
          type="donut"
          height={280}
        />
      </div>
    </div>
  );
}
