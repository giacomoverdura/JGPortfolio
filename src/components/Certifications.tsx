import { MdOutlineVerified } from "react-icons/md";
import { certificationsData } from "../data/CertificationData";

export default function Certifications() {
  return (
    <section id="certifications" className="mb-10 border-b border-gray-300 pb-10">
      <div className="flex items-center gap-2 mb-6 justify-between">
        <h2 className="text-sm font-semibold text-green-800/70 uppercase tracking-wider">
          Certifications ({certificationsData.length})
        </h2>
        {certificationsData.length > 4 && (
          <a href="./Certifications" className="text-sm text-green-800/70 hover:text-green-900 transition-colors duration-300">
          View All {'>'}
        </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificationsData.slice(0, 4).map((cert, index) => (
          <a 
            key={index} 
            href={cert.url || "#"} 
            className="cursor-pointer flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-100/50 hover:bg-gray-100 transition-all hover:shadow-sm" target="_blank"
          >
            {/* Minimalist badge icon */}
            <div className="p-2 bg-green-50 rounded-lg text-green-700 shrink-0">
              <MdOutlineVerified className="w-5 h-5" />
            </div>
            
            <div className="space-y-0.5">
              <h3 className="font-medium text-gray-900 text-sm leading-tight">{cert.title}</h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
              <p className="text-[11px] text-gray-400">Issued: {cert.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}