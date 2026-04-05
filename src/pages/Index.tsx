import { MapPin, Mail, ExternalLink, Navigation } from 'lucide-react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

export default function Index() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-50 pt-20">
      <section id="header" className="mb-10 border-b border-gray-300 pb-20">
        <div className="flex items-center justify-between">
          <div className="name">
            <h1 className="text-5xl font-semibold">James Gulay</h1>
            <p className="text-2xl font-sm text-gray-500/70 mt-2">Frontend Developer</p>
            <div className="link flex items-center text-gray-500/70 gap-2 mt-4">
              <div className="location flex items-center gap-2 text-sm me-3">
                <MapPin className="size-4 text-green-800/70" />
                <span>Calooocan City, Philippines</span>
              </div>
              <div className="email flex items-center gap-2 text-sm me-3">
                <Mail className="size-4 text-green-800/70" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bs.jamesgulay@gmail.com" target="_blank" className="hover:text-blue-600 transition-colors duration-300">
                  bs.jamesgulay@gmail.com
                </a>
              </div>
              <div className="social flex items-center gap-4">
                <a href="https://github.com/giacomoverdura" target="_blank" className="flex items-center gap-2" >
                  <FaGithub className="size-4 text-gray-800" />
                  Github
                </a>
                <a href="https://linkedin.com/in/james-gulay" target="_blank" className="flex items-center gap-2" >
                  <FaLinkedinIn className="size-4 text-blue-600" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="image">
            <img src="/assets/profile.jpg" className="size-30 rounded-full bg-gray-200 object-cover" />
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
        
        <div className="grid grid-cols-6">
            <div className="col-span-2 row-span-2 text-gray-800 text-mds py-5">
              <h1>Frontend</h1>
              <div className="stack mx-3 my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 w-auto rounded-full p-2">HTML</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">CSS</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">JavaScript</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">React</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Bootstrap</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">TailwindCSS</span>
              </div>
            </div>
            <div className="col-span-2 row-span-2 text-gray-800 text-mds py-5 col-start-3">
              <h1>Backend & Databases</h1>
              <div className="stack mx-3 my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Node.js</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">PostgreSQL</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">MySQL</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Supabase</span>
              </div>
            </div>
            <div className="col-span-2 row-span-2 text-gray-800 text-mds py-5 col-start-5">
              <h1>Tools & Development</h1>
              <div className="stack mx-3 my-3 flex flex-wrap justify-start gap-2 text-xs">
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Git</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Github</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">VS Code</span>
                <span className="bg-gray-300/30 w-auto rounded-full p-2">Prettier</span>
              </div>
            </div>
        </div>
      </section>

      <section id="projects" className="border-b border-gray-300 mb-10 pb-10">
        <div className="header flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-green-800/70 uppercase">Recent Projects</h2>
          <a href="./RecentProjects" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
            View All {'>'}
          </a>
        </div>

        <div className="grid grid-cols-6">
          <a href="https://mymusicportfoliov1.vercel.app/" target="_blank" className="col-span-2 row-span-2 text-gray-800 text-mds p-5 border border-gray-500/30 hover:bg-gray-400/10 transition-colors duration-300 cursor-pointer rounded-lg">
            <div className="header flex justify-between">
              <h1 className="font-medium">My Music Portfolio</h1>
              <ExternalLink className="size-5 font-medium" />
            </div>
            <span className="text-gray-500 text-xs">A music portfolio web app that showcase my produced and created music.</span>
          </a>
        </div>
      </section>

      {/* <section id="certifications" className="mb-10 border-b border-gray-300 pb-10">
        <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Recent Certifications</h2>
        
      </section> */}

      <section id="contact" className="mb-10 border-b border-gray-300 pb-10 flex-row">
        <div className="contact-header">
          <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Contact</h2>
          <span className="text-sm text-gray-500">I'm open to new opportunities and collaborations. Feel free to reach me out. I'd love to hear it from you.</span>
        </div>
        <div className="button mt-3 flex justify-start items-center gap-4">
          <button className="text-white bg-green-800/70 hover:bg-green-800/80 transition-color duration-200 cursor-pointer shadow-xs font-medium w-auto flex items-center rounded-md text-sm px-4 py-2.5" type="button">
          <Mail className="size-4 me-3"/> Email Me
        </button>
        
        <button className="bg-gray-500/10 hover:bg-green-800/70 hover:text-white transition-color duration-200 cursor-pointer shadow-xs font-medium w-auto flex items-center rounded-md text-sm px-4 py-2.5" type="button">
          <Navigation className="size-4 me-3"/> Message Me on LinkedIn
        </button>
        </div>
      </section>

      <footer className="flex justify-center items-center pb-10">
        <p className="text-gray-500 text-xs">&copy;2026 James Gulay. All Rights Reserved.</p>
      </footer>
      
      
    </div>
  );
}