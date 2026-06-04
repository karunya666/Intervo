import { useState } from "react";
import { FileTextIcon, PlusIcon, Trash2Icon, SparklesIcon, DownloadIcon } from "lucide-react";
import Navbar from "../components/Navbar";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  summary: "",
  skills: "",
  experience: [{ company: "", role: "", duration: "", points: "" }],
  education: [{ institution: "", degree: "", year: "", gpa: "" }],
  projects: [{ name: "", tech: "", points: "" }],
};

const TABS = ["personal", "skills", "experience", "education", "projects", "output"];

function ResumeBuilder() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [latex, setLatex] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("personal");

  const set = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const setArr = (field, idx, key, value) =>
    setForm((p) => {
      const arr = [...p[field]];
      arr[idx] = { ...arr[idx], [key]: value };
      return { ...p, [field]: arr };
    });

  const addArr = (field, template) =>
    setForm((p) => ({ ...p, [field]: [...p[field], { ...template }] }));

  const removeArr = (field, idx) =>
    setForm((p) => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }));

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setLatex("");
    try {
      const res = await fetch("/api/resume/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Generation failed");
      setLatex(data.latex);
      setActiveTab("output");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadTex = () => {
    const blob = new Blob([latex], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${form.name.replace(/\s+/g, "_") || "resume"}.tex`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const inputCls = "input input-bordered w-full bg-base-100 focus:input-primary";
  const textareaCls = "textarea textarea-bordered w-full bg-base-100 focus:textarea-primary";
  const labelCls = "label-text text-base-content/70 font-medium";

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      {/* Page Header — same style as WelcomeSection */}
      <div className="bg-base-300 border-b border-base-content/10">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <FileTextIcon className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-base-content font-mono tracking-wide">
                AI Resume Builder
              </h1>
              <p className="text-sm text-base-content/50 mt-0.5">
                ATS-Optimized · LaTeX Output
              </p>
            </div>
          </div>

          {/* Generate button in header */}
          {activeTab !== "output" && (
            <button
              className="btn btn-primary gap-2 shadow-lg"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? (
                <><span className="loading loading-spinner loading-sm" /> Generating...</>
              ) : (
                <><SparklesIcon className="size-4" /> Generate Resume</>
              )}
            </button>
          )}

          {activeTab === "output" && latex && (
            <button className="btn btn-outline btn-primary gap-2" onClick={downloadTex}>
              <DownloadIcon className="size-4" /> Download .tex
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 pb-16">

        {/* Tabs */}
        <div className="tabs tabs-boxed bg-base-200 mb-6 w-fit gap-1 p-1 rounded-xl shadow">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab capitalize font-medium transition-all ${
                activeTab === tab ? "tab-active" : "text-base-content/50 hover:text-base-content"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="alert alert-error mb-6">
            <span>{error}</span>
          </div>
        )}

        {/* PERSONAL */}
        {activeTab === "personal" && (
          <div className="card bg-base-200 border border-base-content/10 shadow-xl">
            <div className="card-body gap-5">
              <h2 className="card-title text-base-content/80 text-sm uppercase tracking-widest font-bold">Personal Info</h2>
              <div className="form-control">
                <label className="label"><span className={labelCls}>Full Name</span></label>
                <input className={inputCls} placeholder="Jane Doe" value={form.name} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className={labelCls}>Email</span></label>
                  <input className={inputCls} placeholder="jane@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label"><span className={labelCls}>Phone</span></label>
                  <input className={inputCls} placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label"><span className={labelCls}>LinkedIn URL</span></label>
                  <input className={inputCls} placeholder="linkedin.com/in/janedoe" value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label"><span className={labelCls}>GitHub URL</span></label>
                  <input className={inputCls} placeholder="github.com/janedoe" value={form.github} onChange={(e) => set("github", e.target.value)} />
                </div>
              </div>
              <div className="form-control">
                <label className="label"><span className={labelCls}>Professional Summary</span></label>
                <textarea
                  className={`${textareaCls} h-28`}
                  placeholder="A brief 2-3 sentence summary highlighting your expertise and career goals..."
                  value={form.summary}
                  onChange={(e) => set("summary", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="card bg-base-200 border border-base-content/10 shadow-xl">
            <div className="card-body gap-4">
              <h2 className="card-title text-base-content/80 text-sm uppercase tracking-widest font-bold">Skills</h2>
              <p className="text-sm text-base-content/50">
                Enter skills separated by commas. Include exact keywords from job descriptions for best ATS matching.
              </p>
              <div className="form-control">
                <label className="label"><span className={labelCls}>Skills (comma-separated)</span></label>
                <textarea
                  className={`${textareaCls} h-36`}
                  placeholder="JavaScript, React, Node.js, MongoDB, Express, REST APIs, Git, Docker, Python, SQL"
                  value={form.skills}
                  onChange={(e) => set("skills", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="flex flex-col gap-4">
            {form.experience.map((exp, i) => (
              <div key={i} className="card bg-base-200 border border-base-content/10 shadow-xl">
                <div className="card-body gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title text-base-content/80 text-sm uppercase tracking-widest font-bold">
                      Experience #{i + 1}
                    </h2>
                    {form.experience.length > 1 && (
                      <button className="btn btn-ghost btn-sm text-error gap-1" onClick={() => removeArr("experience", i)}>
                        <Trash2Icon className="size-4" /> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Company</span></label>
                      <input className={inputCls} placeholder="Acme Corp" value={exp.company} onChange={(e) => setArr("experience", i, "company", e.target.value)} />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Role / Title</span></label>
                      <input className={inputCls} placeholder="Software Engineer" value={exp.role} onChange={(e) => setArr("experience", i, "role", e.target.value)} />
                    </div>
                    <div className="form-control sm:col-span-2">
                      <label className="label"><span className={labelCls}>Duration</span></label>
                      <input className={inputCls} placeholder="Jan 2023 – Present" value={exp.duration} onChange={(e) => setArr("experience", i, "duration", e.target.value)} />
                    </div>
                    <div className="form-control sm:col-span-2">
                      <label className="label"><span className={labelCls}>Responsibilities & Achievements</span></label>
                      <textarea className={`${textareaCls} h-28`} placeholder="Describe what you did, tools/tech used, and quantify impact. One point per line." value={exp.points} onChange={(e) => setArr("experience", i, "points", e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline btn-primary w-fit gap-2"
              onClick={() => addArr("experience", { company: "", role: "", duration: "", points: "" })}
            >
              <PlusIcon className="size-4" /> Add Experience
            </button>
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-4">
            {form.education.map((edu, i) => (
              <div key={i} className="card bg-base-200 border border-base-content/10 shadow-xl">
                <div className="card-body gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title text-base-content/80 text-sm uppercase tracking-widest font-bold">
                      Education #{i + 1}
                    </h2>
                    {form.education.length > 1 && (
                      <button className="btn btn-ghost btn-sm text-error gap-1" onClick={() => removeArr("education", i)}>
                        <Trash2Icon className="size-4" /> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-control sm:col-span-2">
                      <label className="label"><span className={labelCls}>Institution</span></label>
                      <input className={inputCls} placeholder="MIT" value={edu.institution} onChange={(e) => setArr("education", i, "institution", e.target.value)} />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Degree</span></label>
                      <input className={inputCls} placeholder="B.Tech in Computer Science" value={edu.degree} onChange={(e) => setArr("education", i, "degree", e.target.value)} />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Year</span></label>
                      <input className={inputCls} placeholder="2020 – 2024" value={edu.year} onChange={(e) => setArr("education", i, "year", e.target.value)} />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>GPA / Percentage (optional)</span></label>
                      <input className={inputCls} placeholder="8.7 / 10" value={edu.gpa} onChange={(e) => setArr("education", i, "gpa", e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline btn-primary w-fit gap-2"
              onClick={() => addArr("education", { institution: "", degree: "", year: "", gpa: "" })}
            >
              <PlusIcon className="size-4" /> Add Education
            </button>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div className="flex flex-col gap-4">
            {form.projects.map((proj, i) => (
              <div key={i} className="card bg-base-200 border border-base-content/10 shadow-xl">
                <div className="card-body gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="card-title text-base-content/80 text-sm uppercase tracking-widest font-bold">
                      Project #{i + 1}
                    </h2>
                    {form.projects.length > 1 && (
                      <button className="btn btn-ghost btn-sm text-error gap-1" onClick={() => removeArr("projects", i)}>
                        <Trash2Icon className="size-4" /> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Project Name</span></label>
                      <input className={inputCls} placeholder="Intervo" value={proj.name} onChange={(e) => setArr("projects", i, "name", e.target.value)} />
                    </div>
                    <div className="form-control">
                      <label className="label"><span className={labelCls}>Tech Stack</span></label>
                      <input className={inputCls} placeholder="React, Node.js, MongoDB" value={proj.tech} onChange={(e) => setArr("projects", i, "tech", e.target.value)} />
                    </div>
                    <div className="form-control sm:col-span-2">
                      <label className="label"><span className={labelCls}>Description & Impact</span></label>
                      <textarea className={`${textareaCls} h-24`} placeholder="What problem it solves, what you built, and any metrics/results." value={proj.points} onChange={(e) => setArr("projects", i, "points", e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="btn btn-outline btn-primary w-fit gap-2"
              onClick={() => addArr("projects", { name: "", tech: "", points: "" })}
            >
              <PlusIcon className="size-4" /> Add Project
            </button>
          </div>
        )}

        {/* OUTPUT */}
        {activeTab === "output" && (
          <div className="card bg-base-200 border border-base-content/10 shadow-xl">
            <div className="card-body">
              {!latex && !loading && (
                <div className="flex flex-col items-center justify-center py-20 gap-4 text-base-content/30">
                  <FileTextIcon className="size-14" />
                  <p className="text-sm text-center">
                    No LaTeX generated yet.<br />Fill in the form and hit <span className="text-primary font-semibold">Generate Resume</span>.
                  </p>
                </div>
              )}
              {loading && (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <span className="loading loading-spinner loading-lg text-primary" />
                  <p className="text-sm text-base-content/50">Generating ATS-optimized LaTeX...</p>
                </div>
              )}
              {latex && (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-success text-sm font-medium flex items-center gap-2">
                      <span className="size-2 rounded-full bg-success inline-block" />
                      LaTeX generated successfully
                    </span>
                    <button className="btn btn-outline btn-primary btn-sm gap-2" onClick={downloadTex}>
                      <DownloadIcon className="size-4" /> Download .tex
                    </button>
                  </div>
                  <pre className="bg-base-300 rounded-xl p-4 text-xs text-base-content/70 overflow-auto max-h-[500px] whitespace-pre-wrap">
                    {latex}
                  </pre>
                  <p className="text-xs text-base-content/40 mt-3">
                    💡 Paste into{" "}
                    <a href="https://overleaf.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      Overleaf
                    </a>{" "}
                    to compile & download as PDF.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ResumeBuilder;