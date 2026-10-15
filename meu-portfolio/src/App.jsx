import { useEffect, useState } from "react";
import {
  FiDatabase,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiTerminal,
  FiX
} from "react-icons/fi";

// === SEUS DADOS AQUI ===
const PERSONAL_INFO = {
  name: "Roni Rodrigues",
  role: "Desenvolvedor Full Stack",
  bio: "Desenvolvedor apaixonado por criar soluções web inovadoras e eficientes, com foco em impacto positivo e experiência do usuário.",
  github: "https://github.com/Ronisank",
  linkedin: "https://www.linkedin.com/in/roni-rodrigues",
  email: "ronisank21@gmail.com",
};

const SKILLS = [
  { name: "React", icon: <FiLayout className="w-5 h-5" /> },
  { name: "Node.js", icon: <FiTerminal className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <FiDatabase className="w-5 h-5" /> },
  { name: "JavaScript", icon: <FiFileText className="w-5 h-5" /> },
  { name: "HTML & CSS", icon: <FiLayout className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <FiLayout className="w-5 h-5" /> },
];

const PROJECTS = [
  {
    title: "App Descubra Floripa",
    description:
      "Plataforma interativa que oferece uma lista de destinos para usuários explorarem informações detalhadas. Possui sistema de cadastro para criar uma comunidade de viajantes focada em destinos sustentáveis e compartilhamento de experiências.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Axios"],
    github: "https://github.com/Ronisank/AppDescubraFloripa",
    live: "https://github.com/Ronisank/AppDescubraFloripa",
  },
  {
    title: "AVA-Educa+",
    description:
      "Sistema desenvolvido para simular um Ambiente Virtual de Aprendizagem (AVA), focado em facilitar o gerenciamento prático e intuitivo de usuários, cursos e alunos matriculados.",
    tags: ["HTML", "CSS", "JavaScript", "Moment.js", "SweetAlert"],
    github: "https://github.com/Ronisank/AVA-EducaPlus",
    live: "https://github.com/Ronisank/AVA-EducaPlus",
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800 py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            <span className="text-indigo-500">{"<"}</span>
            {PERSONAL_INFO.name}
            <span className="text-indigo-500">{"/>"}</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a
              href="#sobre"
              className="hover:text-indigo-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#habilidades"
              className="hover:text-indigo-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#projetos"
              className="hover:text-indigo-400 transition-colors"
            >
              Projetos
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-4 px-6 flex flex-col gap-4 shadow-2xl">
            <a
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-indigo-400 text-lg font-medium"
            >
              Sobre
            </a>
            <a
              href="#habilidades"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-indigo-400 text-lg font-medium"
            >
              Habilidades
            </a>
            <a
              href="#projetos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-indigo-400 text-lg font-medium"
            >
              Projetos
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="sobre"
        className="pt-40 pb-20 px-6 min-h-[80vh] flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-indigo-400 font-medium mb-4 tracking-wide">
            Olá, mundo! Eu sou o
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {PERSONAL_INFO.name}.<br />
            <span className="text-gray-500">Construo coisas para a web.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex gap-4">
            <a
              href="#projetos"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-1"
            >
              Ver Projetos
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-gray-700 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
            <span className="text-indigo-500">01.</span> Minhas Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/50 hover:bg-gray-800 transition-all group"
              >
                <div className="text-gray-400 group-hover:text-indigo-400 mb-3 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
            <span className="text-indigo-500">02.</span> Meus Projetos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/40 border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/60 hover:border-indigo-500/30 transition-all group"
              >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" /> Código
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" /> Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-10 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Projetado e desenvolvido com React & Tailwind.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={PERSONAL_INFO.github}
            className="text-gray-600 hover:text-indigo-400"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            className="text-gray-600 hover:text-indigo-400"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-gray-600 hover:text-indigo-400"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
