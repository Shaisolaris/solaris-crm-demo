import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

type DealStatus = "Won" | "Lost" | "In Progress" | "Negotiation";

interface Deal {
  id: number;
  company: string;
  contact: string;
  owner: string;
  value: string;
  stage: string;
  status: DealStatus;
}

const deals: Deal[] = [
  {
    id: 1,
    company: "Acme Robotics",
    contact: "Maya Chen",
    owner: "S. Patel",
    value: "$48,200",
    stage: "Closed Won",
    status: "Won",
  },
  {
    id: 2,
    company: "Northwind Labs",
    contact: "Daniel Okafor",
    owner: "J. Kim",
    value: "$36,750",
    stage: "Negotiation",
    status: "Negotiation",
  },
  {
    id: 3,
    company: "Helio Foods",
    contact: "Priya Iyer",
    owner: "A. Brooks",
    value: "$22,400",
    stage: "Proposal",
    status: "In Progress",
  },
  {
    id: 4,
    company: "Vertex Logistics",
    contact: "Sam Whittaker",
    owner: "S. Patel",
    value: "$58,900",
    stage: "Closed Lost",
    status: "Lost",
  },
  {
    id: 5,
    company: "Cobalt Studio",
    contact: "Lia Romero",
    owner: "M. Park",
    value: "$15,600",
    stage: "Qualified",
    status: "In Progress",
  },
  {
    id: 6,
    company: "Atlas Capital",
    contact: "Ben Grossman",
    owner: "J. Kim",
    value: "$92,300",
    stage: "Negotiation",
    status: "Negotiation",
  },
];

const statusColor = (s: DealStatus) =>
  s === "Won" ? "success" : s === "Lost" ? "error" : s === "Negotiation" ? "warning" : "info";

export default function RecentDeals() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Deals
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Your team's pipeline activity, last 30 days
          </p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
          View all deals
        </button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Company</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Owner</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Stage</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Value</TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {deals.map((d) => (
              <TableRow key={d.id}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-semibold text-white">
                      {d.company.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{d.company}</p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">{d.contact}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{d.owner}</TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{d.stage}</TableCell>
                <TableCell className="py-3 font-semibold text-gray-800 text-theme-sm dark:text-white/90">{d.value}</TableCell>
                <TableCell className="py-3">
                  <Badge size="sm" color={statusColor(d.status)}>{d.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
