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
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);

  async function loadProjects() {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;

    setCreating(true);

    const { data: userData } = await supabase.auth.getUser();
    const userId = userData?.user?.id;

    if (!userId) {
      setCreating(false);
      return;
    }

    await supabase.from("projects").insert({
      name: newName.trim(),
      status: "Live",
      branch: "main",
      user_id: userId,
    });

    setNewName("");
    setShowForm(false);
    setCreating(false);
    loadProjects();
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Projects" />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-black dark:text-white">Projects</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            + New Project
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleCreate} className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Project name (e.g. my-app)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white"
              required
            />
            <button
              type="submit"
              disabled={creating}
              className="px-4 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition disabled:opacity-50"
            >
              {creating ? "Creating..." : "Create"}
            </button>
          </form>
        )}

        {loading && <p className="text-zinc-500">Loading projects...</p>}

        {!loading && projects.length === 0 && (
          <p className="text-zinc-500">No projects yet. Create your first one.</p>
        )}

        <div className="flex flex-col gap-3">
          {projects.map((project) => {
            const badgeClass = project.status === "Live"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            return (
              <a key={project.id} href={"/dashboard/projects/" + project.name} className="flex items-center justify-between p-4 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 hover:border-black/30 dark:hover:border-white/30 transition">
                <div>
                  <p className="font-medium text-black dark:text-white">{project.name}</p>
                  <p className="text-sm text-zinc-500">{project.branch}</p>
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