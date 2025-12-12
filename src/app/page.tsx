"use client";

import Link from "next/link";
import { Github, Mail, Smartphone } from "lucide-react";

export default function Home() {
  const teamMembers = [
    "Muhammad Azigha Azhar",
    "Anak Agung Nararya Putra",
    "Rifaldi Usman",
    "Axel Davin Lazar",
  ];

  const projects = [
    {
      title: "Cloud Infrastructure Platform",
      description:
        "Scalable PaaS platform untuk manage dan deploy aplikasi dengan mudah. Mendukung multiple cloud providers.",
      tech: ["Next.js", "Node.js", "Docker"],
    },
    {
      title: "Real-time Monitoring Dashboard",
      description:
        "Dashboard monitoring untuk track performance aplikasi secara real-time dengan analytics mendalam.",
      tech: ["React", "WebSocket", "PostgreSQL"],
    },
    {
      title: "DevOps Automation Suite",
      description:
        "Suite lengkap untuk automation deployment, testing, dan CI/CD pipeline management.",
      tech: ["Kubernetes", "GitHub Actions", "Terraform"],
    },
  ];

  const skills = [
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go", level: 80 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS", level: 85 },
        { name: "CI/CD", level: 85 },
      ],
    },
    {
      category: "Full Stack",
      items: [
        { name: "System Design", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            ☁️ PaaS APP Awan GACOR
          </h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section with Team */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          PaaS APP Awan GACOR
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Platform as a Service yang powerful untuk deploy aplikasi Anda dengan mudah
        </p>

        {/* Team Members */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-800">{member}</p>
              <p className="text-sm text-gray-500 mt-1">Team Member</p>
            </div>
          ))}
        </div>

        <div className="space-x-4 flex justify-center flex-wrap gap-4">
          <a
            href="#about"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Explore
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Vercel
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            About Kel Awan Gacor
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Education
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tim kami terdiri dari software engineers berpengalaman yang memiliki
                dedikasi tinggi dalam membangun solusi cloud computing yang robust dan
                scalable. Kami terus belajar dan berkembang dengan teknologi terbaru.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Focus
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">
                    🔧 Development Full Stack
                  </p>
                  <p className="text-sm text-gray-600">
                    Mengembangkan aplikasi end-to-end dengan teknologi modern dan best
                    practices.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">
                    💼 Business Team
                  </p>
                  <p className="text-sm text-gray-600">
                    Fokus pada solusi bisnis yang memberikan value maksimal untuk klien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-900 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">contact@awangacor.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">Bandung, Indonesia</p>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">github.com/awangacor</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                />
                <textarea
                  placeholder="Tell me about your project or ideas..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            © 2025 PaaS APP Awan GACOR. Dibuat dengan ❤️ oleh Kel Awan Gacor
          </p>
        </div>
      </footer>
    </main>
  );
}
