export default function Navbar() {
  
  return (
    <>
      <section id="Navbar">
        <nav className="container nav h-12 w-full text-white border-b-1 border-gray-500/30">
          <ul className="flex justify-between">
            <div className="nav-header font-extrabold text-lg tracking-tighter">
              <h1 className="px-5 pt-2 text-green-500">JG/</h1>
            </div>
            <div className="flex justify-between">
              <li className="nav-link px-5 pt-4 text-gray-500 hover:text-gray-300 cursor-pointer  transition transform duration-300 text-xs"><a href="#About">ABOUT</a></li>
              <li className="nav-link px-5 pt-4 text-gray-500 hover:text-gray-300 cursor-pointer  transition transform duration-300 text-xs"><a href="#Experience">EXPERIENCE</a></li>
              <li className="nav-link px-5 pt-4 text-gray-500 hover:text-gray-300 cursor-pointer  transition transform duration-300 text-xs"><a href="#Projects">PROJECTS</a></li>
              <li className="nav-link px-5 pt-4 text-gray-500 hover:text-gray-300 cursor-pointer  transition transform duration-300 text-xs"><a href="#Contact">CONTACT</a></li>
            </div>
          </ul>
        </nav>
      </section>
    </>
  )
}