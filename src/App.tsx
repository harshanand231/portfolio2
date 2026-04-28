/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  ChevronRight,
  Terminal,
  Layers,
  GraduationCap,
  Award,
  Sun,
  Moon,
  FlaskConical,
  Brain,
  Zap,
  Globe,
  Binary
} from "lucide-react";

const PROJECTS = [
  {
    title: "Video Recommendation System",
    date: "May 2025",
    description: "Built a personalized recommendation engine using deep learning models. Architected a scalable system using PyTorch and cloud services, improving user engagement across 3 product lines.",
    tech: ["PyTorch", "Deep Learning", "Cloud Services"],
    link: "https://github.com/harshanand231/"
  },
  {
    title: "Brain Tumour Detection",
    date: "March 2024",
    description: "Web application using CNN classification to detect brain tumors from MRI images. Integrated Postgres database and Google Auth. Built with Flask and Keras.",
    tech: ["TensorFlow", "CNN", "Flask", "PostgreSQL"],
    link: "https://github.com/harshanand231/BTD-load"
  }
];

const EXPERIENCE = [
  {
    company: "SR Edu Tech",
    role: "Full Stack Developer & Mentor",
    period: "Dec 2024 - Present",
    location: "Hyderabad",
    description: "Delivering training on C++ and full-stack development. Mentoring students on real-time scenarios and project-based learning modules."
  },
  {
    company: "Tulip",
    role: "Software Engineer",
    period: "July 2024 - Oct 2024",
    location: "Jaipur",
    description: "Trained ML models for automatic detection of traffic safety violations like seat belts and helmet usage."
  }
];

const SKILLS = [
  { name: "C++", level: "Advance", icon: <Terminal className="w-6 h-6" /> },
  { name: "React.Js", level: "Advance", icon: <Layers className="w-6 h-6" /> },
  { name: "JavaScript", level: "Intermediate", icon: <Globe className="w-6 h-6" /> },
  { name: "SQL", level: "Advance", icon: <Database className="w-6 h-6" /> },
  { name: "PyTorch", level: "Advance", icon: <Brain className="w-6 h-6" /> },
  { name: "TensorFlow", level: "Intermediate", icon: <Zap className="w-6 h-6" /> },
  { name: "Flask", level: "Intermediate", icon: <FlaskConical className="w-6 h-6" /> },
  { name: "GitHub Copilot", level: "Professional", icon: <Cpu className="w-6 h-6" /> },
  { name: "Deep Learning", level: "Advance", icon: <Binary className="w-6 h-6" /> }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen font-sans flex bg-surface selection:bg-accent selection:text-white transition-colors duration-500">
      {/* Animated Cursor */}
      <motion.div 
        className="cursor-follower"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />

      {/* Colorful Background Blobs */}
      <div className="color-blob w-[500px] h-[500px] bg-vibrant-blue top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="color-blob w-[400px] h-[400px] bg-vibrant-purple bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="color-blob w-[300px] h-[300px] bg-vibrant-emerald top-[40%] right-[10%] animate-pulse" style={{ animationDelay: '4s' }}></div>
      {/* Side Sidebar UI element from theme */}
      <div className="w-16 hidden lg:flex flex-col items-center justify-between py-12 border-r border-black/5 dark:border-white/5 opacity-40 text-[10px] uppercase tracking-[0.3em] font-semibold sticky top-0 h-screen transition-colors">
        <div className="vertical-text whitespace-nowrap dark:text-gray-400">Selected Works 2026</div>
        <div className="vertical-text whitespace-nowrap dark:text-gray-400">Harsh Anand — Portfolio</div>
        <div className="w-[1px] h-24 bg-black/20 dark:bg-white/20"></div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Navigation */}
        <nav className="sticky top-0 w-full z-50 bg-surface/80 dark:bg-[#0a0a0b]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors">
          <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif font-black italic text-2xl tracking-tighter dark:text-white"
            >
              HA.
            </motion.div>
            <div className="flex items-center gap-6 lg:gap-10 text-[11px] uppercase tracking-widest font-bold">
              <button 
                onClick={toggleDarkMode}
                className="p-2 glass rounded-full hover:scale-110 transition-all dark:text-white"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <div className="hidden md:flex gap-10">
                {["projects", "experience", "skills"].map((item) => (
                  <a key={item} href={`#${item}`} className="hover:line-through transition-all opacity-60 hover:opacity-100 dark:text-white">
                    {item}
                  </a>
                ))}
              </div>
              
              <a href="mailto:harshanand849@gmail.com" className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white rounded-full hover:scale-105 transition-transform">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-12 pt-20 pb-32">
          
          {/* Hero Section */}
          <section className="grid lg:grid-cols-12 gap-16 mb-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] mb-6 opacity-60 font-bold block dark:text-vibrant-emerald">
                Aspiring Software Engineer
              </span>
              <h1 className="text-7xl md:text-9xl font-serif font-black leading-[0.85] tracking-tight mb-8 dark:text-yellow-400">
                Harsh <span className="text-gradient-vibrant italic font-light">Anand</span><br/>.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-black/70 dark:text-gray-400 mb-10">
                Full Stack Developer with 1+ years of experience specializing in React JS architectures and Deep Learning systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-8 py-5 glass rounded-2xl flex flex-col hover:border-vibrant-emerald/50">
                  <span className="text-[10px] uppercase font-bold text-black/40 dark:text-gray-500 mb-1">Status</span>
                  <span className="text-sm font-mono flex items-center gap-2 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-vibrant-emerald animate-pulse"></span>
                    Available for Role
                  </span>
                </div>
                <div className="px-8 py-5 glass rounded-2xl flex flex-col hover:border-accent/50 group">
                  <span className="text-[10px] uppercase font-bold text-black/40 dark:text-gray-500 mb-1">Focus</span>
                  <span className="text-sm font-mono dark:text-gray-300 group-hover:text-accent transition-colors">React / AI / C++</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              {/* Hosting Guide Card from Design */}
              <div className="relative bg-[#0F0F0F] dark:bg-zinc-950 text-white p-10 rounded-[2.5rem] shadow-2xl overflow-hidden group border border-white/5 transition-colors">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-vibrant-blue/20 blur-[60px] rounded-full group-hover:bg-vibrant-blue/40 transition-colors"></div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-[11px] font-mono opacity-40 uppercase tracking-widest">Socially connect!</span>
                </div>
                
                <h2 className="text-2xl font-serif italic mb-8 border-b border-white/10 pb-4">Let's Connect</h2>
                <ul className="space-y-6 text-sm font-mono">
                  <li className="flex gap-4 group/item">
  <span className="opacity-30 group-hover/item:text-vibrant-emerald transition-colors">01</span>
  <p>
    Push code to{" "}
    

    <li className="flex gap-4 group/item items-start">
  <span className="text-gray-500 group-hover/item:text-emerald-400 transition-all duration-300">
    01
  </span>
  <p className="text-gray-300">
    Push code to{" "}
    <a
      href="https://github.com/harshanand231/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline underline-offset-4 
                 hover:text-blue-300 hover:underline-offset-8 
                 transition-all duration-300"
    >
      GitHub
    </a>.
  </p>
</li>

<li className="flex gap-4 group/item items-start">
  <span className="text-gray-500 group-hover/item:text-emerald-400 transition-all duration-300">
    02
  </span>
  <p className="text-gray-300">
    Follow me on{" "}
    <a
      href="https://www.geeksforgeeks.org/profile/harsh_anand1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-400 underline underline-offset-4 
                 hover:text-green-300 hover:underline-offset-8 
                 transition-all duration-300"
    >
      GFG
    </a>,{" "}
    <a
      href="https://www.instagram.com/harsh_a_1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-400 underline underline-offset-4 
                 hover:text-pink-300 hover:underline-offset-8 
                 transition-all duration-300"
    >
      Instagram
    </a>,{" "}
    <a
      href="https://www.linkedin.com/in/harsh-anand-213a41212/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 underline underline-offset-4 
                 hover:text-indigo-300 hover:underline-offset-8 
                 transition-all duration-300"
    >
      LinkedIn
    </a>.
  </p>
</li>

<li className="flex gap-4 group/item items-start">
  <span className="text-gray-500 group-hover/item:text-emerald-400 transition-all duration-300">
    03
  </span>
  <p className="text-gray-300">
    Check my{" "}
    <a
      href="https://harshanand1.github.io/Portfolio_harsh/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 underline underline-offset-4 
                 hover:text-yellow-300 hover:underline-offset-8 
                 transition-all duration-300"
    >
      Old Portfolio
    </a>.
  </p>
</li>
  </p>
</li>

<li className="flex gap-4 group/item">
  <span className="opacity-30 group-hover/item:text-vibrant-emerald transition-colors">04</span>
  <p className="flex items-center gap-2 text-vibrant-emerald font-bold">
    DEPLOY <ExternalLink className="w-3 h-3" />
  </p>
</li>
                </ul>
                
                <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest uppercase opacity-40">
                  <div>Vercel Ready</div>
                  <div className="px-2 py-1 bg-white/10 rounded">Auto-CI</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <a href="https://github.com/harshanand231/" target="_blank" rel="noreferrer" className="aspect-square glass rounded-3xl flex flex-col items-center justify-center gap-3 hover:bg-white transition-colors group">
                   <Github className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                   <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">GitHub</span>
                </a>
                <div className="aspect-square bg-brand rounded-3xl p-8 flex flex-col justify-between">
                   <div className="w-10 h-[2px] bg-white lg:bg-white/40"></div>
                   <div className="text-white font-serif italic text-xl leading-tight">"Logic will get you from A to B. Imagination will take you everywhere."</div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects */}
          <section id="projects" className="section-scroll mb-40">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
              <div>
                <h2 className="text-6xl font-serif font-black mb-4 dark:text-white">Selected Works.</h2>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-vibrant-blue italic font-bold">Innovation through code</p>
              </div>
              <div className="h-[1px] flex-1 bg-black/5 dark:bg-white/10 mx-10 hidden md:block"></div>
              <div className="text-[10px] font-mono opacity-40 dark:text-gray-500 uppercase tracking-widest">Archive — 2026</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`aspect-video ${i % 2 === 0 ? 'bg-vibrant-blue/5' : 'bg-vibrant-purple/5'} rounded-[2.5rem] mb-8 overflow-hidden border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:border-accent/40 transition-all duration-500 relative`}>
                     <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${i % 2 === 0 ? 'from-vibrant-blue to-transparent' : 'from-vibrant-purple to-transparent'}`}></div>
                     <Code2 className={`w-12 h-12 ${i % 2 === 0 ? 'text-vibrant-blue' : 'text-vibrant-purple'} opacity-20 group-hover:scale-125 transition-transform duration-700`} />
                  </div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-3xl font-serif italic font-bold dark:text-white group-hover:text-accent transition-colors">{project.title}</h3>
                    <span className="text-[10px] font-mono opacity-50 dark:text-gray-500">{project.date}</span>
                  </div>
                  <p className="text-black/60 dark:text-gray-400 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 glass rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/40 dark:bg-white/5 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-vibrant-blue hover:gap-5 transition-all">
                    View Project <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Grid */}
          <section id="experience" className="section-scroll mb-40">
            <div className="grid lg:grid-cols-3 gap-20">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-serif font-black mb-8 italic dark:text-white">Journey.</h2>
                <div className="w-20 h-1 bg-black dark:bg-white/40 mb-8"></div>
                <p className="text-black/50 dark:text-gray-400 text-sm leading-relaxed mb-10">
                  A professional timeline focused on technical mastery and mentorship.
                </p>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-4 opacity-40 dark:text-vibrant-emerald">Education</h4>
                    <div className="space-y-6">
                      <div className="group">
                        <div className="font-serif italic text-lg leading-tight dark:text-white group-hover:text-accent transition-colors">GEC, Dumka</div>
                        <div className="text-[10px] font-mono opacity-50 uppercase mt-1 dark:text-gray-500">Computer Science • 2021-24</div>
                      </div>
                      <div className="group">
                        <div className="font-serif italic text-lg leading-tight dark:text-white group-hover:text-accent transition-colors">K.K POLY, Dhanbad</div>
                        <div className="text-[10px] font-mono opacity-50 uppercase mt-1 dark:text-gray-500">Computer Science • 2019-21</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-16">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 pb-16 border-b border-black/5 dark:border-white/5 last:border-0 group"
                  >
                    <div className="md:w-48 text-[11px] font-mono font-bold uppercase tracking-widest opacity-40 shrink-0 dark:text-gray-500 group-hover:text-accent transition-colors">
                      {exp.period}
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold mb-4 dark:text-white">{exp.role} <span className="opacity-30 font-light dark:text-gray-500">— {exp.company}</span></h3>
                      <p className="text-black/60 dark:text-gray-400 italic text-lg leading-relaxed max-w-2xl">
                        "{exp.description}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills / Expertise */}
          <section id="skills" className="section-scroll mb-40 bg-vibrant-blue/5 dark:bg-vibrant-blue/10 rounded-[4rem] p-12 md:p-20 transition-colors">
            <h2 className="text-4xl font-serif font-black mb-16 text-center italic dark:text-white">Professional Arsenal.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-[2rem] flex flex-col items-center text-center gap-6 group hover:border-accent hover:shadow-xl hover:shadow-accent/10"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs tracking-tight mb-2 uppercase dark:text-white">{skill.name}</h4>
                    <div className="h-[1px] w-8 bg-accent/20 mx-auto mb-2"></div>
                    <p className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final Call */}
          <section className="bg-brand dark:bg-zinc-950 text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl transition-colors">
            <div className="absolute top-0 left-0 w-96 h-96 bg-vibrant-blue/30 blur-[140px] group-hover:bg-vibrant-emerald/20 transition-colors duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-rose/20 blur-[140px]"></div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tight italic mb-12 relative z-10 leading-tight">
              Ready to <span className="text-vibrant-emerald">Scale</span> <br className="hidden md:block" /> with Intent?
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 relative z-10">
              <a 
                href="mailto:harshanand849@gmail.com"
                className="px-12 py-6 bg-vibrant-emerald text-brand font-black rounded-full hover:scale-110 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all text-sm uppercase tracking-[0.2em]"
              >
                Launch Communication
              </a>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] font-mono font-bold uppercase tracking-[0.3em] opacity-40">
              <a href="#" className="hover:text-white hover:opacity-100 transition-all">LinkedIn</a>
              <a href="#" className="hover:text-white hover:opacity-100 transition-all">Twitter</a>
              <a href="#" className="hover:text-white hover:opacity-100 transition-all">GitHub</a>
              <a href="#" className="hover:text-white hover:opacity-100 transition-all">Instagram</a>
            </div>
          </section>

        </main>

        <footer className="h-16 flex items-center justify-between px-12 text-[10px] tracking-widest uppercase opacity-40 font-mono border-t border-black/5 dark:border-white/5 dark:text-gray-500 transition-colors">
          <div>© 2026 HARSHa ANAND ARCHITECTURE</div>
          <div className="hidden md:block bg-gradient-to-r from-vibrant-blue via-vibrant-purple to-vibrant-rose h-[1px] flex-1 mx-10"></div>
          <div className="flex gap-8">
            <span className="hidden lg:inline text-accent">PRECISION · CRAFT · SYSTEMS</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
