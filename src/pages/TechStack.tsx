export default function TechStack() {

  const techStackData = [
    {
      stackLabel : "Frontend",
      stackItems : ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS", "Prettier"]
    },
    {
      stackLabel : "Backend",
      stackItems : ["Node.js", "PostgreSQL", "MySQL", "Supabase"]
    },
    {
      stackLabel : "Developmer Tools",
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
    <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">
      <div className="mb-10 border-b border-gray-300 pb-5 flex gap-5 items-center">
        <a href="../" className="text-gray-700 hover:text-green-800">{'<'} Return</a>
        <h1 className="font-bold text-green-800/70 text-2xl">All Tech Stack</h1>
      </div>
      {techStackData.map((techstack, index) => (
      <div key={index} className="mb-8 gap-5 items-center">
        <h1 className="font-semibold text-green-800/70 text-lg">{techstack.stackLabel}</h1>
        <div className="mt-3 flex justify-start items-center gap-4">
          {techstack.stackItems.map((item, i) => (
            <span key={i} className="bg-gray-300/30 hover:bg-gray-300/50 text-sm rounded-full px-3 py-1.5">{item}</span>
          ))}
        </div>
      </div>
      ))}
    </div>
  );
} 