export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar */}
      <aside className="w-60 border-r border-black/10 dark:border-white/10 p-6 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-black dark:text-white mb-6">CloudDeploy</h2>

        <a href="/dashboard" className="px-3 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white font-medium">
          Dashboard
        </a>
        <a href="/dashboard/projects" className="px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10">
          Projects
        </a>
        <a href="/dashboard/settings" className="px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10">
          Settings
        </a>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-black dark:text-white mb-2">
          Welcome back 👋
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Here&apos;s what&apos;s happening with your projects.
        </p>
      </main>
    </div>
  );
}