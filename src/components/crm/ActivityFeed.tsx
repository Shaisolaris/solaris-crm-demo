import React from "react";

type Activity = {
  id: number;
  who: string;
  initials: string;
  action: string;
  target: string;
  time: string;
  kind: "deal" | "call" | "email" | "note";
};

const activities: Activity[] = [
  {
    id: 1,
    who: "Sara Patel",
    initials: "SP",
    action: "moved",
    target: "Acme Robotics → Closed Won",
    time: "12 min ago",
    kind: "deal",
  },
  {
    id: 2,
    who: "Jordan Kim",
    initials: "JK",
    action: "logged a call with",
    target: "Daniel Okafor (Northwind Labs)",
    time: "48 min ago",
    kind: "call",
  },
  {
    id: 3,
    who: "Alex Brooks",
    initials: "AB",
    action: "sent a proposal to",
    target: "Helio Foods",
    time: "2h ago",
    kind: "email",
  },
  {
    id: 4,
    who: "Mia Park",
    initials: "MP",
    action: "added a note on",
    target: "Cobalt Studio",
    time: "4h ago",
    kind: "note",
  },
  {
    id: 5,
    who: "Sara Patel",
    initials: "SP",
    action: "created a deal with",
    target: "Atlas Capital — $92K",
    time: "Yesterday",
    kind: "deal",
  },
];

const dotColor = (k: Activity["kind"]) =>
  k === "deal"
    ? "bg-emerald-500"
    : k === "call"
    ? "bg-indigo-500"
    : k === "email"
    ? "bg-violet-500"
    : "bg-amber-500";

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Activity Feed
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            What your team has been up to today
          </p>
        </div>
      </div>
      <ul className="mt-5 flex flex-col gap-5">
        {activities.map((a) => (
          <li key={a.id} className="flex gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-semibold text-white">
                {a.initials}
              </div>
              <span
                className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900 ${dotColor(
                  a.kind
                )}`}
              />
            </div>
            <div className="flex-1">
              <p className="text-theme-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {a.who}
                </span>{" "}
                {a.action}{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {a.target}
                </span>
              </p>
              <span className="text-theme-xs text-gray-500 dark:text-gray-500">
                {a.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
