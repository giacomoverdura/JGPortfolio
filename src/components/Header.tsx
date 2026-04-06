import { MapPin, Mail, PhoneCall} from 'lucide-react';

export default function Header() {
  return (
    <section id="header" className="mb-10 border-b border-gray-300 pb-10 md:pb-15">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="name text-center lg:text-left">
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

            <div className="social flex items-center gap-4 text-sm">
              <PhoneCall className="size-4 text-green-800/70" />
              <span>{`(+63)-938-401-1657`}</span>
            </div>
          </div>
        </div>

        
          <div className="size-40 lg:size-40 rounded-full overflow-hidden">
            <img
              src="./profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
      </div>
    </section>
  )
}