export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            MMF Atheefa
          </h1>
          <p className="text-xl text-gray-300 font-light">Full Stack Developer & Project Manager</p>
        </div>

        {/* University section */}
        <section className="mb-8 bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-6 text-cyan-300 flex items-center">
            <span className="mr-3">🎓</span> University
          </h2>
          <p className="text-xl text-gray-200 font-medium">Open University of Sri Lanka</p>
        </section>

        {/* Technologies Involved section */}
        <section className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 flex items-center">
            <span className="mr-3">🚀</span> Technologies Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-500/20 rounded-lg p-4 hover:bg-pink-500/30 transition-colors">
              <h3 className="font-bold text-pink-200 mb-2">Frontend</h3>
              <p className="text-gray-200">React, Next.js, Tailwind</p>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-4 hover:bg-yellow-500/30 transition-colors">
              <h3 className="font-bold text-yellow-200 mb-2">Backend</h3>
              <p className="text-gray-200">Node.js</p>
            </div>
            <div className="bg-teal-500/20 rounded-lg p-4 hover:bg-teal-500/30 transition-colors">
              <h3 className="font-bold text-teal-200 mb-2">Databases</h3>
              <p className="text-gray-200">MongoDB</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4 hover:bg-purple-500/30 transition-colors">
              <h3 className="font-bold text-purple-200 mb-2">Tools</h3>
              <p className="text-gray-200">Git, Postman</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
