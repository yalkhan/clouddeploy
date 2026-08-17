"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../../../components/Sidebar";
import { createClient } from "../../../../lib/supabase";

type Project = {
  id: string;
  name: string;
  status: string;
  branch: string;
  created_at: string;
};

export default function ProjectDetails() {
  const params = useParams();
  const name = params?.name as string;

  const supabase = createClient();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
  if (!name) return;

  async function loadProject() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("name", name)
      .single();

    if (!error && data) {
      setProject(data);
    }
    setLoading(false);
  }
  loadProject();
}, [name]);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Projects" />

      <main className="flex-1 p-8">
        <a href="/dashboard/projects" className="text-sm text-zinc-500 hover:underline">&larr; Back to Projects</a>
        

        {loading && <p className="text-zinc-500 mt-4">Loading...</p>}

        {!loading && !project && (
          <p className="text-zinc-500 mt-4">Project not found.</p>
        )}

        {project && (
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white mt-2 mb-1">{project.name}</h1>
            <p className={"text-sm mb-6 " + (project.status === "Live" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
              ● {project.status}
            </p>

            <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-lg p-6 max-w-md">
              <div className="flex justify-between py-2 border-b border-black/5 dark:border-white/5">
                <span className="text-zinc-500 text-sm">Branch</span>
                <span className="text-black dark:text-white text-sm font-medium">{project.branch}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-zinc-500 text-sm">Created</span>
                <span className="text-black dark:text-white text-sm font-medium">
                  {new Date(project.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}