export default function About() {
  
  const aboutContext = "I am a passionate frontend developer with a strong background in creating engaging and user-friendly web applications. With over 3 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, and various frontend frameworks. I thrive on turning complex problems into elegant solutions and am always eager to learn new technologies to stay at the forefront of the ever-evolving web development landscape."

  return (
    <section id="about" className="mb-10 border-b border-gray-300 pb-10">
      <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">About Me</h2>
      <p className="text-md text-gray-700/80 leading-relaxed">
        <span className="me-10"></span>{aboutContext}
      </p>
    </section>
  )
}