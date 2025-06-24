
import { Github, Linkedin, Download, ExternalLink, MapPin, Calendar } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">PM</span>
            </div>
            <span className="font-semibold text-gray-800">Alex Johnson</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-800 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-800 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-gray-800 transition-colors">Case Studies</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-800 transition-colors">Education</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-800 transition-colors">Experience</button>
            
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg flex items-center space-x-2 font-medium">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Product Manager
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 crayon-text">
                & Storyteller
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Crafting digital experiences that solve real problems and drive business growth through data-driven insights and user-centered design.
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg font-medium"
            >
              Get to Know Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 crayon-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-72 h-72 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Product Manager with 5+ years of experience turning complex challenges into simple, elegant solutions. My background spans fintech, healthtech, and productivity tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe great products are born from deep user empathy, rigorous data analysis, and seamless cross-functional collaboration. When I'm not optimizing conversion funnels, you'll find me exploring design patterns or mentoring aspiring PMs.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Product Strategy', 'User Research', 'Data Analysis', 'A/B Testing', 'Agile', 'Figma'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 crayon-heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* FocusFlow */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="FocusFlow" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">FocusFlow</h3>
                <p className="text-gray-600 mb-4">
                  A productivity app that increased user engagement by 150% through gamified task management and smart scheduling algorithms.
                </p>
                <div className="flex space-x-3">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Healio */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" 
                  alt="Healio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Healio</h3>
                <p className="text-gray-600 mb-4">
                  Telemedicine platform that reduced patient wait times by 60% and improved satisfaction scores through streamlined appointment workflows.
                </p>
                <div className="flex space-x-3">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 crayon-heading">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E-commerce Conversion Optimization", impact: "+45% conversion rate", duration: "3 months" },
              { title: "Mobile App Onboarding Redesign", impact: "+80% user retention", duration: "2 months" },
              { title: "B2B SaaS Feature Prioritization", impact: "$2M ARR increase", duration: "6 months" }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{study.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-green-600">
                    <span className="font-medium">{study.impact}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{study.duration}</span>
                  </div>
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-colors text-sm">
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 crayon-heading">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Product Manager",
                company: "TechCorp Inc.",
                period: "2022 - Present",
                description: "Led product strategy for B2B SaaS platform serving 10k+ customers. Increased user engagement by 40% and reduced churn by 25%."
              },
              {
                role: "Product Manager",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description: "Managed end-to-end product development for mobile productivity app. Grew user base from 0 to 100k MAU in 18 months."
              },
              {
                role: "Associate Product Manager",
                company: "BigTech Solutions",
                period: "2019 - 2020",
                description: "Collaborated with engineering and design teams to ship 15+ features. Conducted user research and data analysis to inform product decisions."
              }
            ].map((job, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
                    <div className="flex items-center space-x-4 mt-1 mb-3">
                      <span className="text-purple-600 font-medium">{job.company}</span>
                      <span className="text-gray-500">{job.period}</span>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 crayon-heading">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">MBA in Technology Management</h3>
              <p className="text-purple-600 font-medium mb-2">Stanford University</p>
              <p className="text-gray-500">2017 - 2019</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">BS in Computer Science</h3>
              <p className="text-purple-600 font-medium mb-2">UC Berkeley</p>
              <p className="text-gray-500">2013 - 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 Alex Johnson. Crafted with care.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
