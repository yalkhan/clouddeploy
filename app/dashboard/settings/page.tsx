import Sidebar from "../../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Settings" />

      <main className="flex-1 p-8 max-w-xl">
        <h1 className="text-2xl font-semibold text-black dark:text-white mb-6">Settings</h1>

        <div className="flex flex-col gap-4 mb-8">
          <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Full Name</label>
          <input type="text" defaultValue="Faryal" className="px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white" />

          <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email</label>
          <input type="email" defaultValue="faryal@example.com" className="px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white" />

          <button className="self-start px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition">Save Changes</button>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-6">
          <h2 className="text-lg font-medium text-black dark:text-white mb-2">Danger Zone</h2>
          <button className="px-4 py-2 rounded-lg border border-red-300 text-red-600 dark:border-red-900 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition">Delete Account</button>
        </div>
      </main>
    </div>
  );
}