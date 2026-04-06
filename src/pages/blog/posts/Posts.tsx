export default function Posts() {
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">
        <main className="min-h-138 flex flex-col">
          <header className="border-b border-gray-500/20 py-5">
            <a href="../blog">{`< return`}</a>
          </header>
          <section className="p-5">
            <h1 className="text-black text-4xl">My First Blog</h1>
            <p className="text-gray-500 mt-2">Short Description of a Blog</p>
            <span className="text-gray-400/70 text-xs">10 mins ago</span>
            <div className="py-5 px-20 text-xl">
              <h1>this is the content of this blog. anything isdas </h1>
            </div>
          </section>
        </main>
        <footer className="text-center text-xs text-gray-500/70 py-5">
          <h1>&copy;{new Date().getFullYear()} James Blog. All Rights Reserved</h1>
        </footer>
      </div>
    </>
  )
}