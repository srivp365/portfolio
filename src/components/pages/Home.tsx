import Aurora from "../Aurora";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#64B6AC", "#F0B67F", "#D64045"]}
          speed={1.0}
          blend={10}
          amplitude={0.5}
        />
      </div>

      <div className="relative z-10 w-full h-full p-8 md:p-12 pointer-events-none flex flex-col justify-end">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          <div className="shrink-0">
            <h2 className="text-gray-400 text-2xl md:text-4xl tracking-widest drop-shadow-2xl mb-1">
              Hi! I'm
            </h2>
            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-bold tracking-wide md:tracking-widest drop-shadow-2xl break-words">
              Srivathsan
            </h1>
          </div>

          <div className="max-w-md text-left md:text-justify">
            <p className="text-gray-200 text-lg md:text-xl font-medium mb-3 drop-shadow-md">
              Greetings fellow human, thank you for stopping by!
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed drop-shadow-md">
              I am a simpleton from Canada 🍁, who is interested in things, like
              tech, productivity and other shenanigans. Hop on over to projects
              to check out some of my work, or check out the sidebar for my contact links and resume ❤️!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
