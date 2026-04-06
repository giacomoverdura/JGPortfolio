export default function About() {
  
  const aboutContext = "I am a developer who enjoys creating and crafting thoughtful, user-friendly digital experiences. I love turning ideas into reality and continuously improving my skills along the way. "

  return (
    <section id="about" className="mb-10 border-b border-gray-300 pb-10">
      <h2 className="text-sm font-semibold text-green-800/70 mb-4 uppercase">About Me</h2>
      <p className="text-md text-gray-700/80 leading-relaxed">
        {aboutContext}
      </p>
    </section>
  )
}