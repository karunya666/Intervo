import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { getDifficultyBadgeClass } from "../lib/utils";
import { SearchIcon, CheckCircle2Icon } from "lucide-react";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;

  const filtered = problems.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty === "All" || p.difficulty === difficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Practice Problems</h1>
          <p className="text-base-content/50 text-sm">
            {problems.length} problems •{" "}
            <span className="text-success">{easyCount} Easy</span> •{" "}
            <span className="text-warning">{mediumCount} Medium</span> •{" "}
            <span className="text-error">{hardCount} Hard</span>
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {/* Search */}
          <label className="input input-sm flex items-center gap-2 flex-1 bg-base-100">
            <SearchIcon className="size-4 text-base-content/40" />
            <input
              type="text"
              placeholder="Search problems..."
              className="grow"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          {/* Difficulty Filter */}
          <div className="flex gap-2">
            {["All", "Easy", "Medium", "Hard"].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`btn btn-sm ${
                  difficulty === d
                    ? d === "Easy"
                      ? "btn-success"
                      : d === "Medium"
                      ? "btn-warning"
                      : d === "Hard"
                      ? "btn-error"
                      : "btn-primary"
                    : "btn-ghost"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-base-100 rounded-xl overflow-hidden border border-base-300">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-4 py-3 text-xs font-semibold text-base-content/40 uppercase tracking-wider border-b border-base-300">
            <div className="col-span-1">#</div>
            <div className="col-span-6">Title</div>
            <div className="col-span-3">Tags</div>
            <div className="col-span-2">Difficulty</div>
          </div>

          {/* Rows */}
          {filtered.length === 0 ? (
            <div className="px-4 py-12 text-center text-base-content/40">
              No problems found matching your search.
            </div>
          ) : (
            filtered.map((problem, idx) => (
              <Link
                key={problem.id}
                to={`/problem/${problem.id}`}
                className={`grid grid-cols-12 px-4 py-3.5 items-center hover:bg-base-200 transition-colors ${
                  idx !== filtered.length - 1 ? "border-b border-base-300/50" : ""
                }`}
              >
                {/* Index */}
                <div className="col-span-1 text-sm text-base-content/30 font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <div className="col-span-6 font-medium text-sm hover:text-primary transition-colors">
                  {problem.title}
                </div>

                {/* Tags */}
                <div className="col-span-3 flex flex-wrap gap-1">
                  {problem.category.split(" • ").map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-base-300 text-base-content/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Difficulty */}
                <div className="col-span-2">
                  <span
                    className={`text-xs font-semibold ${
                      problem.difficulty === "Easy"
                        ? "text-success"
                        : problem.difficulty === "Medium"
                        ? "text-warning"
                        : "text-error"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer count */}
        <p className="text-xs text-base-content/30 mt-3 text-right">
          Showing {filtered.length} of {problems.length} problems
        </p>
      </div>
    </div>
  );
}

export default ProblemsPage;