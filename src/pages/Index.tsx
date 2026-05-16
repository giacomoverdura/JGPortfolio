import { About, Certifications, Contact, Footer, Header, Projects, Stack } from '../routes/NavigationRoutes';

export default function Index() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">

      <Header />
      <About />
      <Projects />
      <Stack />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}