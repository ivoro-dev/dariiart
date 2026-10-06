import Image from "next/image";

const dimensions: Record<number, [number, number]> = {
  1: [1298, 2673], 2: [2954, 2667], 3: [1998, 1324],
  4: [1994, 1321], 5: [1312, 1722], 6: [1319, 874],
  7: [1977, 1310], 8: [1987, 1316], 9: [2802, 2659],
  10: [2379, 2664], 11: [2804, 2651], 12: [1765, 2665],
  13: [1510, 2656], 14: [1735, 2646], 15: [2278, 2257],
  16: [2277, 3571],
};

function ConceptImage({ number }: { number: number }) {
  const [width, height] = dimensions[number];
  return (
    <Image
      src={`/projects/the-shadow/${number}.png`}
      alt={`The Shadow concept development study ${number}`}
      width={width}
      height={height}
      sizes="(min-width: 768px) 40vw, 100vw"
      className="block w-full h-auto"
    />
  );
}

export default function TheShadowConceptLayout() {
  return (
    <div className="w-full mb-10 sm:mb-14 md:mb-16">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-[0.65fr_1.48fr_1fr] gap-3 sm:gap-4 items-start">
          <ConceptImage number={1} />
          <ConceptImage number={2} />
          <div className="grid gap-1">
            <ConceptImage number={3} />
            <ConceptImage number={4} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.66fr_1fr_1.42fr] gap-3 sm:gap-4 items-start">
          <div className="grid gap-2">
            <ConceptImage number={5} />
            <ConceptImage number={6} />
          </div>
          <div className="grid gap-1">
            <ConceptImage number={7} />
            <ConceptImage number={8} />
          </div>
          <ConceptImage number={9} />
        </div>

        <video
          src="/projects/the-shadow/1.MOV"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="The Shadow concept experiment film"
          className="block w-full md:w-3/4 h-auto"
        />

        <div className="grid grid-cols-2 gap-2 sm:gap-3 items-start w-full md:w-2/3" style={{ gridTemplateColumns: "1.35fr 1fr" }}>
          <ConceptImage number={10} />
          <ConceptImage number={12} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.65fr_0.9fr_1fr] gap-2 sm:gap-3 items-start">
          <ConceptImage number={11} />
          <ConceptImage number={13} />
          <ConceptImage number={14} />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 items-start w-full md:w-3/4">
          <ConceptImage number={15} />
          <ConceptImage number={16} />
        </div>
      </div>
    </div>
  );
}
