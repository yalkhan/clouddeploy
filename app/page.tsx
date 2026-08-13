export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
          Deploy your code.
          <br />
          Skip the DevOps.
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
          Connect your GitHub repository and CloudDeploy takes care of building, containerizing, and running your application automatically.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/signup" className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition">
            Get Started
          </a>
          <a href="/login" className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-black dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}