export default function RecentProjects() {
  const myProjectData = [
  {
    projectName : "My Music Portfolio",
    projectDesc : "A music portfolio web app that showcase my own creation of music.",
    projectURL : "https://mymusicportfoliov1.vercel.app/"
  },
]

  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">
        <div className="mb-10 border-b border-gray-300 pb-5 flex gap-5 items-center">
          <a href="../" className="text-gray-700 hover:text-green-800">{'<'} Return</a>
          <h1 className="font-bold text-green-800/70 text-2xl">All Projects</h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-1">
          {myProjectData.map((project, index) => (
            <div key={index}>
              <a href={project.projectURL} target="_blank" className="flex flex-col justify-between px-5 py-3 border-y border-gray-500/10 hover:bg-gray-400/10 transition-all duration-300 cursor-pointer group">
                <div className="header flex justify-between items-start">
                  <h1 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.projectName}
                  </h1>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {project.projectDesc}
                </p>
                <div className="ms-5 flex items-center gap-5">
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">HTML</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">CSS</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">Javascript</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">React.js</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">TailwindCSS</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">Last.fm API</span>
                  <span className="text-xs bg-gray-200 text-gray-700 w-auto rounded-full px-2 py-1">Supabase</span>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}