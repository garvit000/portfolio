function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-600 via-fuchsia-500 to-pink-400 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold font-mono text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 mb-8 drop-shadow-lg">
          Garvit Singh Rathore
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-700 mt-4 mb-2">
          I am Garvit, a first-year <span className="font-semibold text-fuchsia-700">CSE student at SRMIST</span> with a keen interest in web development and open-source contributions.
        </p>
        <p className="text-lg text-center text-gray-600 mt-2">
          I love to explore new technologies and build innovative solutions that make a difference.
        </p>
      </div>
    </main>
  );
}

export default Main;
