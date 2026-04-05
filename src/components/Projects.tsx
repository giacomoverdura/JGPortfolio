import { ExternalLink } from 'lucide-react';

const myProjectData = [
  {
    projectName : "My Music Portfolio",
    projectDesc : "A music portfolio web app that showcase my own creation of music.",
    projectURL : "https://mymusicportfoliov1.vercel.app/"
  }
]

export default function Projects() {
  return(
    <section id="projects" className="border-b border-gray-300 mb-10 pb-10">
      <div className="header flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-green-800/70 uppercase">Recent Projects</h2>
        <a href="./RecentProjects" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
          View All {'>'}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myProjectData.map((project, index) => (
          <div key={index}>
            <a href={project.projectURL} target="_blank" className="flex flex-col justify-between p-5 border border-gray-500/30 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer rounded-lg group">
              <div className="header flex justify-between items-start mb-2">
                <h1 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.projectName}
                </h1>
                <ExternalLink className="size-5 text-gray-400 group-hover:text-blue-600" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                {project.projectDesc}
              </p>
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}