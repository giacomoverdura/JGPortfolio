import { Navigation, Mail } from 'lucide-react';
export default function Contact() {
  return (
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
  )
}