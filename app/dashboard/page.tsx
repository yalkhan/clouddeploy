import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Dashboard" />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-black dark:text-white mb-2">Welcome back 👋</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Here&apos;s what&apos;s happening with your projects.</p>
      </main>
    </div>
  );
}