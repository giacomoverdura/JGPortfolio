import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="mb-10 border-b border-gray-300 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="contact-header mb-4">
        <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Contact</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
          I'm open to new opportunities and collaborations. Feel free to reach out. I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto gap-4 text-gray-500">
        <div className="md:col-span-3 row-span-2 text-sm">
          <form action="https://formspree.io/f/mbdpqpnl" method="POST">
            <div className="border border-gray-500/20 hover:bg-gray-300/20 p-1 rounded-lg w-full md:w-80 flex items-center justify-center mt-2">
              <input type="text" name="name" placeholder="Name" className="focus:outline-none m-1 w-full" required />
            </div>

            <div className="border border-gray-500/20 hover:bg-gray-300/20 p-1 rounded-lg w-full md:w-80 flex items-center justify-center mt-2">
              <input type="email" name="email" placeholder="Email Address (optional)" className="focus:outline-none m-1 w-full" />
            </div>

            <div className="border border-gray-500/20 hover:bg-gray-300/20 p-1 rounded-lg w-full md:w-80 flex items-center justify-center mt-2">
              <textarea rows={5} name="message" placeholder="Your message" className="focus:outline-none m-1 w-full" required />
            </div>

            <button type="submit" className="bg-green-800/80 hover:bg-green-800 transition-colors duration-300 mt-2 p-2 cursor-pointer rounded-lg text-white w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>

        <div className="md:col-span-3 row-span-2">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="link-grid">
              <p className="text-green-800/70 font-semibold uppercase mb-3">Social Links</p>
              <a href="https://www.facebook.com/semajyalug11" target="_blank" className="flex items-center gap-2 hover:text-blue-600 mb-2">
                <FaFacebook className="size-4" /> Facebook
              </a>

              <a href="https://www.instagram.com/giacomo_verdura" target="_blank" className="flex items-center gap-2 hover:text-pink-500 mb-2">
                <FaInstagram className="size-4" /> Instagram
              </a>

              <a href="https://github.com/giacomoverdura" target="_blank" className="flex items-center gap-2 hover:text-black mb-2"> 
                <FaGithub className="size-4" />
                <span className="text-sm">Github</span>
              </a>

              <a href="https://linkedin.com/in/james-gulay" target="_blank" className="flex items-center gap-2 hover:text-blue-800 mb-2"> 
                <FaLinkedinIn className="size-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <div className="other-grid">
              <p className="text-green-800/70 font-semibold uppercase mb-3">Other Information</p>
              <div className="flex flex-col w-auto">
                <a href="" className="mb-2 text-red-500 hover:text-red-700 transition-colors duration-300">My Resume.pdf</a>
                <a href="./blog" className="mb-2 text-gray-600 hover:text-gray-500">Read my Blog</a>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <iframe 
              data-testid="embed-iframe"  
              src="https://open.spotify.com/embed/track/638tQ0HHe29oUqez4JdAn6?utm_source=generator&theme=0" 
              width="100%" 
              height="80" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}