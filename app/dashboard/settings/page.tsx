"use client";

import Sidebar from "../../components/Sidebar";
import { createClient } from "../../../lib/supabase";

export default function Settings() {
  const supabase = createClient();

  async function handleConnectGithub() {
  await supabase.auth.linkIdentity({
    provider: "github",
  });
}

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Settings" />

      <main className="flex-1 p-8 max-w-xl">
        <h1 className="text-2xl font-semibold text-black dark:text-white mb-6">Settings</h1>

        <div className="mb-8">
          <h2 className="text-lg font-medium text-black dark:text-white mb-3">Connected Accounts</h2>
          <button
            onClick={handleConnectGithub}
            className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 text-black dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            Connect GitHub
          </button>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-6">
          <h2 className="text-lg font-medium text-black dark:text-white mb-2">Danger Zone</h2>
          <button className="px-4 py-2 rounded-lg border border-red-300 text-red-600 dark:border-red-900 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition">
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
}