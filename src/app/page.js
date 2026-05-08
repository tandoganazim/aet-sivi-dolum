import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-700 text-white">
      <div className="text-center pt-10">
        <h1 className="text-6xl font-bold">
          A.E.T TEKNO SIVI DOLUM MAKİNALARI
        </h1>

        <p className="mt-6 text-xl">
          Endüstriyel sıvı dolum makineleri ve otomasyon sistemleri
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine1.png"
            width={400}
            height={300}
            alt="Makine 1"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine2.png"
            width={400}
            height={300}
            alt="Makine 2"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine3.png"
            width={400}
            height={300}
            alt="Makine 3"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine4.png"
            width={400}
            height={300}
            alt="Makine 4"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine5.png"
            width={400}
            height={300}
            alt="Makine 5"
            className="rounded-xl"
          />
        </div>

        <div className="bg-white text-black rounded-2xl p-4">
          <Image
            src="/makine6.png"
            width={400}
            height={300}
            alt="Makine 6"
            className="rounded-xl"
          />
        </div>

      </div>
    </main>
  );
}
