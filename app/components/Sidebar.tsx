"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase";

export default function Sidebar({ active }: { active: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
  async function loadUser() {
    const { data, error } = await supabase.auth.getUser();
    console.log("Supabase user data:", data);
    console.log("Supabase error:", error);
    if (data?.user?.email) {
      setUserEmail(data.user.email);
    }
  }
  loadUser();
}, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/projects", label: "Projects" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <aside className="w-60 border-r border-black/10 dark:border-white/10 p-6 flex flex-col gap-2">
      <h2 className="text-xl font-bold text-black dark:text-white mb-6">CloudDeploy</h2>

      {links.map((link) => {
        const isActive = link.label === active;
        const activeClass = isActive
          ? "bg-black/5 dark:bg-white/10 text-black dark:text-white font-medium"
          : "text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10";

        return (
          <a key={link.href} href={link.href} className={"px-3 py-2 rounded-lg " + activeClass}>
            {link.label}
          </a>
        );
      })}

      <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10">
        {userEmail && (
          <p className="text-xs text-zinc-500 mb-2 truncate">{userEmail}</p>
        )}
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 dark:text-red-400 hover:underline"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
}