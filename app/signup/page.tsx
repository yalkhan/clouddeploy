export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-black px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
          Create your account
        </h1>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full name" className="px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white" />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white" />
          <input type="password" placeholder="Password" className="px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black dark:text-white" />
          <button type="submit" className="px-4 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-black dark:text-white underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}