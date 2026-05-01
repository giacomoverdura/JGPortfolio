export default function TechStack() {

  const techStackData = [
    {
      stackLabel : "Frontend",
      stackItems : ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS", "Prettier"]
    },
    {
      stackLabel : "Backend",
      stackItems : ["Node.js", "PostgreSQL", "MySQL", "Supabase", "PHP", "Laravel"]
    },
    {
      stackLabel : "Development Tools",
      stackItems : ["Git", "Github", "VS Code", "Vite", "Teams"]
    },
    {
      stackLabel : "Deployment / Hosting",
      stackItems : ["Vercel"] 
    },
    {
      stackLabel : "APIs / External Services",
      stackItems : ["Last.fm API"] 
    }
  ]
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-10 animate-fadeIn">
      <div className="mb-5 border-b border-gray-300 pb-4 flex items-center gap-3 sm:gap-5">
        <a href="../" className="text-gray-700 hover:text-green-800 text-sm sm:text-base">
          {'<'} Return
        </a>

        <h1 className="font-bold text-green-800/70 text-lg sm:text-xl md:text-2xl">
          All Tech Stack
        </h1>
      </div>

      {techStackData.map((techstack, index) => (
      <div key={index} className="mb-3 sm:mb-5">
        <h2 className="font-semibold text-green-800/70 text-base sm:text-lg">
          {techstack.stackLabel}
        </h2>
        <div className="mt-1 flex flex-wrap gap-1 sm:gap-1">
          {techstack.stackItems.map((item, i) => (
            <span key={i} className="bg-gray-100 hover:bg-gray-200 text-xs sm:text-xs text-gray-600 rounded-full px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
      ))}
    </div>
  );
} 