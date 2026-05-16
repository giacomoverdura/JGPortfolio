import { certificationsData } from "../data/CertificationData";

export default function CertificationPage() {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 lg:px-40 pt-10 md:pt-10 animate-fadeIn">
      <div className="mb-10 border-b border-gray-300 pb-5 flex gap-5 items-center">
        <a href="../" className="text-gray-700 hover:text-green-800">{'<'} Return</a>
        <h1 className="font-bold text-green-800/70 text-2xl">All Certifications ({certificationsData.length})</h1>
      </div>
    </div>
  );
}