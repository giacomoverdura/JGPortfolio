import { About, Contact, Footer, Header, Projects, Stack } from '../routes/NavigationRoutes';

export default function Index() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">

      <Header />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />

      {/* <section id="certifications" className="mb-10 border-b border-gray-300 pb-10">
        <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">Recent Certifications</h2>
        
      </section> */}
    </div>
  );
}