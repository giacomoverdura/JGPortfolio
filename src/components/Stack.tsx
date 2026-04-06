export default function Stack() {
  
 const techStackData = [
    {
      label : "Frontend",
      items : ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS"]
    },
    {
      label : "Backend",
      items : ["Node.js", "PostgreSQL", "MySQL", "Supabase"]
    },
    {
      label : "Tools & Development",
      items : ["Git", "Github", "VS Code", "Prettier"]
    }
 ];

  return (
    <section id="tech-stack" className="border-b border-gray-300 mb-10 pb-10">
      <div className="header flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-green-800/70 uppercase">Tech Stack</h2>
        <a href="./TechStack" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
          View All {'>'}
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
        {techStackData.map((stack, index) => (
          <div key={index} className="py-2 md:py-5">
            <h1 className="font-medium text-gray-800">{stack.label}</h1>
            <div className="stack my-3 flex flex-wrap justify-start gap-2 text-xs">
              {stack.items.map((tech, i) => (
                <span key={i} className="bg-gray-300/30 rounded-full text-gray-700 px-3 py-1.5"> {tech} </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}