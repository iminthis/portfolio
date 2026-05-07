"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Briefcase,
  GraduationCap,
  FileText,
  BookOpen,
  Code2,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    date: "May 2026 – Present",
    bullets: ["AI Infrastructure"],
  },
  {
    role: "AI Integration Engineer Intern",
    company: "Wolfe, LLC",
    location: "Pittsburgh, PA",
    date: "Jan 2026 – Apr 2026",
    bullets: [
      "Integrating AI workflows to improve content speed, personalization, and efficiency across teams",
      "Building multimodal creative AI pipelines (OpenAI) for video, image, and copy generation",
      "Prototyping agentic AI systems to automate creative production and project-management workflows",
      "Contributing to fraud detection and security AI for transaction screening and compliance",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Payactiv",
    location: "Milpitas, CA",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Developed 30+ RESTful APIs for an XMPP-based chat platform supporting 1M+ users",
      "Designed PostgreSQL schemas reducing query latency by 15%",
      "Wrote automated tests with xUnit and Postman, improving API reliability",
      "Delivered QBR-ready features two weeks early within Agile/Scrum workflows",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "San Jose State University",
    location: "San Jose, CA",
    date: "Feb 2023 – Aug 2024",
    bullets: [
      "Optimized ML pipeline linking 3D facial geometry and DNA, achieving 0.73 AUROC",
      "Compressed 120K+ vertex meshes into 16-D embeddings using SpiralNet++",
      "Improved verification accuracy by 18% using 41 biologically tested SNPs",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "GenerAI",
    location: "Fargo, ND",
    date: "Jul 2022 – Sep 2022",
    bullets: [
      "Built web and mobile app using React Native and ASP.NET Core connecting 200+ creators with 50+ brands",
      "Collaborated with COO and 3-person team to launch MVP within 8 weeks",
    ],
  },
];

const EDUCATION = [
  {
    school: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    degree: "B.S. in Statistics, Machine Learning & Artificial Intelligence",
    date: "Aug 2023 – May 2027",
    coursework: [
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Data Structures and Algorithms",
      "Probability",
      "Data Science",
      "Functional Programming",
      "Linear Algebra",
      "Statistical Visualization",
    ],
    activities: [
      "Data Science Club",
      "Artificial Intelligence Club",
      "Asian Student Association",
      "Phi Delta Theta Fraternity",
    ],
  },
  {
    school: "Y Combinator Startup School",
    location: "San Francisco, CA",
    degree: "Startup School",
    date: "Jul 25–26, 2026",
    coursework: [],
    activities: [],
  },
];

const PROJECTS = [
  {
    title: "ArmVision",
    description:
      "Real-time firearm detection system using computer vision. Trained a YOLOv5 model achieving 93% peak accuracy. Published and presented findings at an IEEE conference.",
    tech: ["Python", "TensorFlow", "YOLOv5", "Computer Vision"],
    links: [
      { href: "/IEEE_Research_Paper.pdf", label: "Research Paper", icon: "file" as const },
      { href: "https://ieeexplore.ieee.org/document/10199210", label: "IEEE Publication", icon: "book" as const },
    ],
    github: null,
  },
  {
    title: "Math Performance Analysis",
    description:
      "Interactive web dashboard exploring factors affecting students' math performance. Features 10+ visualizations revealing relationships between academic habits, demographics, and results.",
    tech: ["Next.js", "TypeScript", "D3.js", "Recharts", "Data Visualization"],
    links: [
      { href: "https://student-performance-analysis-7907b75b322b.herokuapp.com/story/", label: "Live Demo" },
    ],
    github: "https://github.com/iminthis/Student-Performance-Analysis",
  },
  {
    title: "TradeSim",
    description:
      "Responsive trading dashboard displaying 6 real-time KPIs. Features an order matching engine with partial fills, price-priority execution, and multi-symbol order books.",
    tech: ["Node.js", "Express.js", "REST APIs", "Full-Stack"],
    links: [
      { href: "https://tradesim-bc7e5c3f4699.herokuapp.com/", label: "Live Demo" },
    ],
    github: "https://github.com/iminthis/TradeSim",
  },
  {
    title: "Enhanced Flappy Bird",
    description:
      "15-112 Term Project — a reimagined Flappy Bird game built with Python featuring enhanced mechanics, custom graphics, and progressive difficulty scaling.",
    tech: ["Python", "Pygame", "Game Development"],
    links: [],
    github: "https://github.com/iminthis/EnhancedFlappyBird",
  },
];

const SKILLS = {
  Languages: [
    "Python", "Java", "TypeScript", "C", "C++", "Go",
    "Swift", "C#", "JavaScript", "SQL", "HTML/CSS", "R",
  ],
  "Frameworks & Libraries": [
    "React", "PyTorch", "Angular", "Node.js",
    "TensorFlow", "pandas", "NumPy", "Matplotlib",
  ],
  Tools: [
    "GitHub", "Docker", "Kubernetes", "Azure", "AWS",
    "Jira", "Postman", "Google Colab", "Linux", "Hadoop", "Kafka",
  ],
  Methodologies: [
    "RAG", "Time-Series Forecasting", "Regression",
    "GANs", "PCA", "Agile", "Scrum",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--card-border)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight">
            V<span className="text-[var(--accent)]">V</span>
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-[var(--muted)] text-sm font-mono mb-4">
              Hi, my name is
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
              Vinay{" "}
              <span className="gradient-text">Venkatesh</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--muted)] mb-2">
              Software Engineer &amp; ML Engineer
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-[var(--muted)] max-w-lg mx-auto mb-8 leading-relaxed">
              Junior at{" "}
              <span className="text-[var(--foreground)] font-medium">
                Carnegie Mellon University
              </span>{" "}
              studying Statistics, Machine Learning &amp; Artificial Intelligence.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-400 flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/iminthis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/vinayven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vinayv2@andrew.cmu.edu"
              className="p-3 rounded-full border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="p-3 rounded-full border border-[var(--card-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <FileText size={20} />
            </a>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <a
              href="#experience"
              className="inline-block animate-bounce text-[var(--muted)]"
            >
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={24} className="text-[var(--accent)]" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm text-[var(--muted)] font-mono">
                    {exp.date}
                  </span>
                </div>
                <p className="text-[var(--accent)] text-sm mb-3">
                  {exp.company} &middot; {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--muted)] flex gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1 shrink-0">
                        &bull;
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap size={24} className="text-[var(--accent)]" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="relative pl-8 border-l-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                  <span className="text-sm text-[var(--muted)] font-mono">
                    {edu.date}
                  </span>
                </div>
                <p className="text-[var(--accent)] text-sm mb-3">
                  {edu.degree} &middot; {edu.location}
                </p>
                <div className="space-y-2">
                  {edu.coursework.length > 0 && (
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      <span className="font-semibold text-[var(--foreground)]">
                        Relevant Coursework:
                      </span>{" "}
                      {edu.coursework.join(", ")}
                    </p>
                  )}
                  {edu.activities.length > 0 && (
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      <span className="font-semibold text-[var(--foreground)]">
                        Activities:
                      </span>{" "}
                      {edu.activities.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <ExternalLink size={24} className="text-[var(--accent)]" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                        title={link.label}
                      >
                        {"icon" in link && link.icon === "file" ? (
                          <FileText size={18} />
                        ) : "icon" in link && link.icon === "book" ? (
                          <BookOpen size={18} />
                        ) : (
                          <ExternalLink size={18} />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--accent)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 size={24} className="text-[var(--accent)]" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-mono text-[var(--accent)] mb-3 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-[var(--muted)] mb-8 leading-relaxed">
            I&apos;m currently looking for internship opportunities in software
            engineering, data science, and machine learning. Feel free to reach
            out!
          </p>
          <a
            href="mailto:vinayv2@andrew.cmu.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[var(--card-border)]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Vinay Venkatesh
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iminthis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/vinayven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:vinayv2@andrew.cmu.edu"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
