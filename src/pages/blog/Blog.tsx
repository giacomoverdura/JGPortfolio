export default function Blog() {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">
        <main className="min-h-138 flex flex-col">
          <header className="text-center border-b border-gray-500/20 pb-7">
            <h1 className="text-2xl text-gray-700">James's Random Blog</h1>
            <span className="text-gray-500/70 text-xs">Random thoughts, ideas, hobbies, experiences, and reflections</span>
          </header>
          <section className="mb-3 blog-posts text-end">
            <a href="./blog/posts">
              <div className="border-y border-gray-500/10 px-5 py-3 cursor-pointer hover:bg-gray-100/30 hover:text-blue-500">
                <h1 className="text-center text-black text-xl">My First Blog</h1>
                <p className="text-start text-gray-500 italic">Short Description of a Blog</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400/70 text-xs">10 mins ago</span>
                  <span className="">Read More</span>
                </div>
              </div>
            </a>
          </section>
        </main>
        <footer className="text-center text-xs text-gray-500/70 py-5">
          <h1>&copy;{new Date().getFullYear()} James Blog. All Rights Reserved</h1>
        </footer>
      </div>
    </>
  )
}