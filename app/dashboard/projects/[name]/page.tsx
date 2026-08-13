import Sidebar from "../../../components/Sidebar";

const fakeLogs = [
  { time: "12:41:03", message: "Build started" },
  { time: "12:41:05", message: "Installing dependencies..." },
  { time: "12:41:22", message: "Dependencies installed" },
  { time: "12:41:23", message: "Running build" },
  { time: "12:41:40", message: "Build completed successfully" },
  { time: "12:41:41", message: "Deployment live" },
];

export default function ProjectDetails({ params }: { params: { name: string } }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar active="Projects" />

      <main className="flex-1 p-8">
        <a href="/dashboard/projects" className="text-sm text-zinc-500 hover:underline">&larr; Back to Projects</a>

        <h1 className="text-2xl font-semibold text-black dark:text-white mt-2 mb-1">{params.name}</h1>
        <p className="text-sm text-green-600 dark:text-green-400 mb-6">● Live</p>

        <h2 className="text-lg font-medium text-black dark:text-white mb-3">Latest Deployment</h2>

        <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          {fakeLogs.map((log, index) => (
            <div key={index} className="mb-1">
              <span className="text-zinc-500">[{log.time}]</span> {log.message}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}