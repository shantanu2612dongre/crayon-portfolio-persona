
import { Github, Linkedin, Download, ExternalLink, MapPin, Calendar } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center glow-animation">
              <span className="text-white text-xl font-bold font-mono">PM</span>
            </div>
            <span className="font-semibold text-cyan-300 font-mono">Alex Johnson</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">Projects</button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">Case Studies</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">Education</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">Experience</button>
            
            <button className="futuristic-button text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-mono">
              Product Manager
              <span className="block neon-text">
                & Innovator
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Crafting next-generation digital experiences through AI-driven insights and quantum-leap innovation strategies.
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="futuristic-button text-white px-8 py-3 rounded-full font-medium"
            >
              Initialize Connection
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 futuristic-heading">Neural Profile</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-80 h-80 mx-auto rounded-2xl futuristic-card flex items-center justify-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-72 h-72 rounded-xl object-cover border border-cyan-500/30"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a quantum-thinking Product Manager with 5+ years of experience architecting digital ecosystems that bridge human intuition with algorithmic precision. My expertise spans fintech, healthtech, and neural productivity interfaces.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe revolutionary products emerge from the convergence of deep user empathy, predictive analytics, and seamless human-AI collaboration. When not optimizing conversion matrices, I'm exploring quantum design patterns.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Neural Strategy', 'Quantum UX', 'Data Synthesis', 'AI Testing', 'Agile++', 'Neural Design'].map((skill) => (
                  <span key={skill} className="px-4 py-2 futuristic-card rounded-full text-cyan-300 border border-cyan-500/30 font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 futuristic-heading">Quantum Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* FocusFlow */}
            <div className="futuristic-card rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="FocusFlow" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2 font-mono">FocusFlow.AI</h3>
                <p className="text-gray-300 mb-4">
                  Neural productivity interface that amplified user engagement by 150% through quantum-gamified task orchestration and predictive scheduling algorithms.
                </p>
                <div className="flex space-x-3">
                  <button className="futuristic-button text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2 text-sm">
                    <span>Access System</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Healio */}
            <div className="futuristic-card rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" 
                  alt="Healio" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2 font-mono">Healio.Nexus</h3>
                <p className="text-gray-300 mb-4">
                  Quantum-medical platform that reduced patient latency by 60% and optimized satisfaction matrices through streamlined bio-appointment workflows.
                </p>
                <div className="flex space-x-3">
                  <button className="futuristic-button text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2 text-sm">
                    <span>Access System</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 futuristic-heading">Neural Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E-commerce Conversion Matrix", impact: "+45% neural conversion", duration: "3 quantum cycles" },
              { title: "Mobile Neural Onboarding", impact: "+80% user retention", duration: "2 quantum cycles" },
              { title: "B2B SaaS Feature Synthesis", impact: "$2M ARR amplification", duration: "6 quantum cycles" }
            ].map((study, index) => (
              <div key={index} className="futuristic-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3 font-mono">{study.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-emerald-400">
                    <span className="font-medium">{study.impact}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{study.duration}</span>
                  </div>
                </div>
                <button className="futuristic-button text-white px-4 py-2 rounded-full text-sm">
                  Access Data
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 grid-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 futuristic-heading">Neural Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Quantum Product Manager",
                company: "TechCorp Nexus",
                period: "2022 - Present",
                description: "Orchestrated product strategy for B2B SaaS quantum platform serving 10k+ neural entities. Amplified user engagement by 40% and reduced churn entropy by 25%."
              },
              {
                role: "Product Neural Architect",
                company: "StartupXYZ.ai",
                period: "2020 - 2022",
                description: "Managed end-to-end product synthesis for mobile productivity neural interface. Scaled user base from 0 to 100k MAU in 18 quantum cycles."
              },
              {
                role: "Associate Product Synthesizer",
                company: "BigTech Quantum Solutions",
                period: "2019 - 2020",
                description: "Collaborated with engineering and design neural networks to deploy 15+ quantum features. Conducted user research and data synthesis to inform product matrices."
              }
            ].map((job, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full mt-2 flex-shrink-0 glow-animation"></div>
                <div className="flex-1">
                  <div className="futuristic-card rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-cyan-300 font-mono">{job.role}</h3>
                    <div className="flex items-center space-x-4 mt-1 mb-3">
                      <span className="text-purple-400 font-medium">{job.company}</span>
                      <span className="text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 futuristic-heading">Neural Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="futuristic-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-mono">MBA in Quantum Technology Management</h3>
              <p className="text-purple-400 font-medium mb-2">Stanford Neural University</p>
              <p className="text-gray-400">2017 - 2019</p>
            </div>
            <div className="futuristic-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-mono">BS in Neural Computer Science</h3>
              <p className="text-purple-400 font-medium mb-2">UC Berkeley Quantum</p>
              <p className="text-gray-400">2013 - 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20 bg-black/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0 font-mono">© 2024 Alex Johnson. Engineered with quantum precision.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
