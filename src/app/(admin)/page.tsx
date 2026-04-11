import type { Metadata } from "next";
import React from "react";
import { CrmMetrics } from "@/components/crm/CrmMetrics";
import PipelineChart from "@/components/crm/PipelineChart";
import RevenueChart from "@/components/crm/RevenueChart";
import WinLossChart from "@/components/crm/WinLossChart";
import ActivityFeed from "@/components/crm/ActivityFeed";
import RecentDeals from "@/components/crm/RecentDeals";

export const metadata: Metadata = {
  title: "Solaris CRM — Pipeline & Revenue",
  description:
    "Solaris CRM dashboard: contacts, deals, pipeline, and revenue at a glance.",
};

export default function CrmDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-8">
        <CrmMetrics />
        <RevenueChart />
        <PipelineChart />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-4">
        <WinLossChart />
        <ActivityFeed />
      </div>

      <div className="col-span-12">
        <RecentDeals />
      </div>
    </div>
  );
}
