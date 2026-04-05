import { MapPin, Mail, ExternalLink, Navigation } from 'lucide-react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

export default function Index() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-20">

      <section id="header" className="mb-10 border-b border-gray-300 pb-10 md:pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="name text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold">James Gulay</h1> 
            <p className="text-xl md:text-2xl font-sm text-gray-500/70 mt-2">Frontend Developer</p>
            
            <div className="link flex flex-wrap justify-center md:justify-start items-center text-gray-500/70 gap-y-3 gap-x-4 mt-6">
              <div className="location flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-green-800/70" />
                <span>Caloocan City, Philippines</span> 
              </div>
              
              <div className="email flex items-center gap-2 text-sm">
                <Mail className="size-4 text-green-800/70" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bs.jamesgulay@gmail.com" target="_blank" className="hover:text-blue-600 transition-colors duration-300"> 
                  bs.jamesgulay@gmail.com 
                </a>
              </div>

              <div className="social flex items-center gap-4">
                <a href="https://github.com/giacomoverdura" target="_blank" className="flex items-center gap-2 hover:opacity-80 transition-opacity"> 
                  <FaGithub className="size-4 text-gray-800" />
                  <span className="text-sm">Github</span>
                </a>
                <a href="https://linkedin.com/in/james-gulay" target="_blank" className="flex items-center gap-2 hover:opacity-80 transition-opacity"> 
                  <FaLinkedinIn className="size-4 text-blue-600" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="image">
            <img src="./profile.jpg" alt="Profile Picture" className="size-32 md:size-40 rounded-full bg-gray-200 object-cover shadow-sm" />
          </div>

        </div>
      </section>

      <section id="about" className="mb-10 border-b border-gray-300 pb-10">
        <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">About Me</h2>
        <p className="text-md text-gray-700/80 leading-relaxed">
          <span className="me-10"></span>I am a passionate frontend developer with a strong background in creating engaging and user-friendly web applications. With over 3 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks. I thrive on turning complex problems into elegant solutions and am always eager to learn new technologies to stay at the forefront of the ever-evolving web development landscape.
        </p>
      </section>

      <section id="tech-stack" className="border-b border-gray-300 mb-10 pb-10">
        <div className="header flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-green-800/70 uppercase">Tech Stack</h2>
          <a href="./TechStack" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
            View All {'>'}
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            
            <div className="text-gray-800 py-2 md:py-5">
              <h1 className="font-medium">Frontend</h1>
              <div className="stack my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">HTML</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">CSS</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">JavaScript</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">React</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Bootstrap</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">TailwindCSS</span>
              </div>
            </div>

            <div className="text-gray-800 py-2 md:py-5">
              <h1 className="font-medium">Backend & Databases</h1>
              <div className="stack my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Node.js</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">PostgreSQL</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">MySQL</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Supabase</span>
              </div>
            </div>

            <div className="text-gray-800 py-2 md:py-5">
              <h1 className="font-medium">Tools & Development</h1>
              <div className="stack my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Git</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Github</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">VS Code</span>
                <span className="bg-gray-300/30 rounded-full px-3 py-1.5">Prettier</span>
              </div>
            </div>
        </div>
      </section>

      <section id="projects" className="border-b border-gray-300 mb-10 pb-10">
        <div className="header flex items-center justify-between mb-6">
          <h2 className="text-sm font-semibold text-green-800/70 uppercase">Recent Projects</h2>
          <a href="./RecentProjects" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
            View All {'>'}
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <a href="https://mymusicportfoliov1.vercel.app/" target="_blank" className="flex flex-col justify-between p-5 border border-gray-500/30 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer rounded-lg group">
            <div className="header flex justify-between items-start mb-2">
              <h1 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                My Music Portfolio
              </h1>
              <ExternalLink className="size-5 text-gray-400 group-hover:text-blue-600" />
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              A music portfolio web app that showcases my produced and created music.
            </p>
          </a>

        </div>
      </section>

      {/* <section id="certifications" className="mb-10 border-b border-gray-300 pb-10">
        <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Recent Certifications</h2>
        
      </section> */}

      <section id="contact" className="mb-10 border-b border-gray-300 pb-10">
        <div className="contact-header">
          <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Contact</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
            I'm open to new opportunities and collaborations. Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-start items-stretch md:items-center gap-3 md:gap-4">
  <button 
    className="w-full md:w-auto text-white bg-green-800/70 hover:bg-green-800/80 transition-all duration-200 cursor-pointer shadow-sm font-medium flex items-center justify-center rounded-md text-sm px-5 py-3 md:py-2.5" 
    type="button"
  >
    <Mail className="size-4 me-3"/> 
    Email Me
  </button>
  
  <button 
    className="w-full md:w-auto bg-gray-500/10 text-gray-700 hover:bg-green-800/70 hover:text-white transition-all duration-200 cursor-pointer shadow-sm font-medium flex items-center justify-center rounded-md text-sm px-5 py-3 md:py-2.5" 
    type="button"
  >
    <Navigation className="size-4 me-3"/> 
    Message Me on LinkedIn
  </button>
</div>
      </section>

      <footer className="flex justify-center items-center pb-10">
        <p className="text-gray-500 text-xs text-center px-4">
          &copy; 2026 James Gulay. All Rights Reserved.
        </p>
      </footer>
      
      
    </div>
  );
}