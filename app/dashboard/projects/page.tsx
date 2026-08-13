import Sidebar from "../../components/Sidebar";

const fakeProjects = [
  { name: "portfolio", status: "Live", branch: "main", updated: "2h ago" },
  { name: "ecommerce-store", status: "Live", branch: "main", updated: "1d ago" },
  { name: "task-manager", status: "Failed", branch: "dev", updated: "3d ago" },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Projects" />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-black dark:text-white">Projects</h1>
          <button className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition">+ New Project</button>
        </div>

        <div className="flex flex-col gap-3">
          {fakeProjects.map((project) => {
            const badgeClass = project.status === "Live"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            return (
              <a key={project.name} href={"/dashboard/projects/" + project.name} className="flex items-center justify-between p-4 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 hover:border-black/30 dark:hover:border-white/30 transition">
                <div>
                  <p className="font-medium text-black dark:text-white">{project.name}</p>
                  <p className="text-sm text-zinc-500">{project.branch} • {project.updated}</p>
                </div>
                <span className={"text-sm px-3 py-1 rounded-full font-medium " + badgeClass}>
                  {project.status}
                </span>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}