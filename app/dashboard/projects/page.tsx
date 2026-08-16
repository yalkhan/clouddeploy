"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { createClient } from "../../../lib/supabase";

type Project = {
  id: string;
  name: string;
  status: string;
  branch: string;
};

export default function Projects() {
  const supabase = createClient();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    async function loadProjects() {
      const { data: userData } = await supabase.auth.getUser();
      setDebugInfo("Logged in as UID: " + (userData?.user?.id || "NONE"));

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setErrorMsg(JSON.stringify(error, null, 2));
      } else if (data) {
        setProjects(data);
      }
      setLoading(false);
    }
    loadProjects();
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Projects" />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-black dark:text-white">Projects</h1>
        </div>

        <p className="text-xs text-zinc-400 mb-4">{debugInfo}</p>

        {errorMsg && (
          <pre className="text-xs bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-4 overflow-x-auto">
            {errorMsg}
          </pre>
        )}

        {loading && <p className="text-zinc-500">Loading projects...</p>}

        {!loading && !errorMsg && projects.length === 0 && (
          <p className="text-zinc-500">No projects yet.</p>
        )}

        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div key={project.id} className="p-4 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
              <p className="font-medium text-black dark:text-white">{project.name}</p>
              <p className="text-sm text-zinc-500">{project.branch} — {project.status}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}