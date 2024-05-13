import { slides } from "./../../data/DataSlider";
function AccueilGalerie() {
  return (
    <div className="relative">
      <div className="pl-14">
        <h1 className="text-6xl text-black cursor-default hover:text-blue-500 hover:transition-colors w-fit">
          Galerie
        </h1>
        <div className="w-28 h-2 bg-yellow-400 mt-5"></div>
      </div>
      <div className="absolute left-0 right-0 mx-14 h-auto my-16 grid grid-cols-4 gap-3">
        {slides.map((item, key) => {
          return (
            <div
              key={key}
              className="object-cover overflow-hidden h-full w-full"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-52 hover:opacity-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccueilGalerie;
