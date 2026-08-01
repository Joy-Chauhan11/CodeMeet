import { Activity, Clock, History } from "lucide-react";

export default function StatsCards({
  activeSessionsCount,
  recentSessionsCount,
}) {
  const cards = [
    {
      title: "Active Sessions",
      value: activeSessionsCount,
      icon: Activity,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Recent Sessions",
      value: recentSessionsCount,
      icon: History,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Coding Time",
      value: "0 hour",
      icon: Clock,
      color: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  return (
    <div className="lg:col-span-1">
      <div className="grid gap-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-base-content/60">
                      {card.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-1">
                      {card.value}
                    </h2>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.bg}`}
                  >
                    <Icon className={`w-7 h-7 ${card.color}`} />
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}