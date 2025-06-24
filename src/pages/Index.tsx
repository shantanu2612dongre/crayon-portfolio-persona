
import { Github, Linkedin, Download, ExternalLink, MapPin, Calendar, User, Code, Briefcase } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Sticky Navigation */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Avatar */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <span className="font-semibold text-[#222222] text-lg">Alex Johnson</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('case-studies')} className="nav-link">Case Studies</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            
            <button className="primary-button">
              <Download size={16} />
              Download Resume
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Alex Johnson" 
                  className="w-72 h-72 rounded-xl object-cover"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-[#222222] leading-tight">
                Product Manager
                <span className="block text-[#FF6B00]">
                  & Problem Solver
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Product-focused problem solver with 5+ years of experience building user-centered digital products that drive growth and engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="primary-button"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="secondary-button"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Product Manager who believes great products are born from deep user empathy, data-driven decisions, and seamless collaboration across teams. I specialize in taking complex problems and turning them into intuitive solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans fintech, healthtech, and productivity tools, where I've led cross-functional teams to deliver products that users love and businesses need.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Product Strategy', 'User Research', 'Data Analysis', 'A/B Testing', 'Agile/Scrum', 'UI/UX Design'].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="clean-card max-w-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-[#FF6B00] rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#222222]">5+ Years Experience</h3>
                  <p className="text-gray-600">Building products that solve real problems and drive meaningful impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl section-heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* FocusFlow */}
            <div className="clean-card">
              <div className="project-image h-48 bg-gradient-to-br from-blue-500 to-cyan-600 mb-6 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="FocusFlow" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#222222]">FocusFlow</h3>
                <p className="text-gray-600">
                  A productivity app that increased user engagement by 150% through gamified task management and smart scheduling features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">#MVP</span>
                  <span className="skill-tag">#Product</span>
                  <span className="skill-tag">#Growth</span>
                </div>
                <button className="primary-button">
                  <ExternalLink size={16} />
                  View Case Study
                </button>
              </div>
            </div>

            {/* Healio */}
            <div className="clean-card">
              <div className="project-image h-48 bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" 
                  alt="Healio" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#222222]">Healio</h3>
                <p className="text-gray-600">
                  Healthcare platform that reduced patient wait times by 60% and improved satisfaction scores through streamlined appointment workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">#HealthTech</span>
                  <span className="skill-tag">#UX</span>
                  <span className="skill-tag">#Impact</span>
                </div>
                <button className="primary-button">
                  <ExternalLink size={16} />
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl section-heading">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E-commerce Conversion Optimization", impact: "+45% conversion rate", duration: "3 months" },
              { title: "Mobile App Onboarding Redesign", impact: "+80% user retention", duration: "2 months" },
              { title: "B2B SaaS Feature Launch", impact: "$2M ARR increase", duration: "6 months" }
            ].map((study, index) => (
              <div key={index} className="clean-card text-center space-y-4">
                <h3 className="text-xl font-semibold text-[#222222]">{study.title}</h3>
                <div className="space-y-2">
                  <div className="text-[#FF6B00] font-medium text-lg">{study.impact}</div>
                  <div className="flex items-center justify-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{study.duration}</span>
                  </div>
                </div>
                <button className="secondary-button">View More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl section-heading">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Product Manager",
                company: "TechCorp",
                period: "2022 - Present",
                description: "Led product strategy for B2B SaaS platform serving 10k+ users. Increased user engagement by 40% and reduced churn by 25%."
              },
              {
                role: "Product Manager",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description: "Managed end-to-end product development for mobile productivity app. Scaled user base from 0 to 100k MAU in 18 months."
              },
              {
                role: "Associate Product Manager",
                company: "BigTech Solutions",
                period: "2019 - 2020",
                description: "Collaborated with engineering and design teams to ship 15+ features. Conducted user research and data analysis to inform product decisions."
              }
            ].map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="clean-card">
                  <h3 className="text-xl font-semibold text-[#222222] mb-1">{job.role}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-[#FF6B00] font-medium">{job.company}</span>
                    <span className="text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl section-heading">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="clean-card">
              <h3 className="text-xl font-semibold text-[#222222] mb-2">MBA in Technology Management</h3>
              <p className="text-[#FF6B00] font-medium mb-2">Stanford University</p>
              <p className="text-gray-500">2017 - 2019</p>
            </div>
            <div className="clean-card">
              <h3 className="text-xl font-semibold text-[#222222] mb-2">BS in Computer Science</h3>
              <p className="text-[#FF6B00] font-medium mb-2">UC Berkeley</p>
              <p className="text-gray-500">2013 - 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-12 px-6 bg-[#222222]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-8">Interested in working together? I'd love to hear from you.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
          </div>
          <p className="text-gray-500">© 2024 Alex Johnson. Built with care and attention to detail.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
