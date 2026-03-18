const stops = [
  {
    num: "01",
    name: "Русский остров",
    desc: "Живописный остров у берегов Владивостока, соединённый впечатляющим вантовым мостом. Здесь встречаются море и история — бухты, форты и панорамы Японского моря.",
    km: "~30 км от Владивостока",
  },
  {
    num: "02",
    name: "Крацовские водопады",
    desc: "Каскад водопадов в сердце приморской тайги. Кристально чистые потоки воды, мхи и папоротники создают атмосферу нетронутой дальневосточной природы.",
    km: "Хасанский район",
  },
  {
    num: "03",
    name: "Земля леопарда",
    desc: "Единственное в мире место обитания дальневосточного леопарда. Национальный парк с уникальными экосистемами, где природа живёт по своим древним законам.",
    km: "Национальный парк",
  },
  {
    num: "04",
    name: "Полуостров Гамова",
    desc: "Самая южная точка Приморья. Скалистые мысы, прозрачные бухты с богатым подводным миром и маяк, хранящий память о морских экспедициях.",
    km: "Залив Петра Великого",
  },
];

export default function Featured() {
  return (
    <div id="route" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 mb-3">Маршрут путешествия</p>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight max-w-2xl">
          4 точки, которые изменят ваш взгляд на Дальний Восток
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {stops.map((stop) => (
            <div key={stop.num} className="bg-white p-8 lg:p-12 flex flex-col gap-4">
              <span className="text-neutral-300 text-4xl font-bold leading-none">{stop.num}</span>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900">{stop.name}</h3>
              <p className="text-neutral-600 leading-relaxed flex-1">{stop.desc}</p>
              <span className="text-xs uppercase tracking-widest text-neutral-400">{stop.km}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-8 items-center">
          <img
            src="https://cdn.poehali.dev/projects/6b1323fd-dd02-404c-9c91-a115e0cbd343/files/b236f7a9-5594-45d4-862f-27eded985bd3.jpg"
            alt="Русский остров"
            className="w-full lg:w-1/2 h-[300px] lg:h-[450px] object-cover"
          />
          <div className="lg:w-1/2 lg:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Лучшее время</p>
            <p className="text-2xl lg:text-3xl text-neutral-900 leading-relaxed mb-8">
              Май–сентябрь — идеальный сезон для путешествия по Приморью. Тёплое море, цветущая тайга и богатый животный мир.
            </p>
            <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide">
              Спланировать поездку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
