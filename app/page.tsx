export default function Home() {
  return (
    <div className="flex flex-col space-y-4 min-h-screen p-4">
      <div className="flex h-14 shrink-0 rounded-lg p-4 md:h-20 items-center justify-center bg-red-300">
        <p className="text-xl md:text-1xl">REGEX</p>
      </div>
      <div className="flex flex-col h-14 md:h-20 shrink-0 rounded-lg p-4 items-left justify-center bg-red-300">
        <div className="">your regex here</div>
        <div className="">REGEX</div>
      </div>
      <div className="p-4 bg-red-300">
        map mods list
      </div>
      <div className="columns-2">
        <div className="min-h-screen p-4 bg-red-300">
        <input type="text">
          </input>
          <p>dont want this mode</p>
          <div>mode list</div>
        </div>
        <div className="min-h-screen p-4 bg-red-300">
          <input type="text">
          </input>
          <p>want this mode</p>
          <div>mode list</div>
        </div>
      </div>
    </div>
  );
}
