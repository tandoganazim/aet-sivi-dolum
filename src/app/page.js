import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-blue-700 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          A.E.T TEKNO SIVI DOLUM MAKINALARI
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Endüstriyel sıvı dolum makineleri, otomasyon sistemleri ve profesyonel üretim çözümleri.
        </p>

        <a
          href="https://wa.me/905526992637"
          target="_blank"
          className="mt-10 inline-block px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-gray-200 transition"
        >
          WhatsApp Teklif Al
        </a>
      </section>

      {/* MAKİNALAR */}
      <section className="py-20 px-6 bg-blue-700">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Makinalarımız
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine1.png"
              width={500}
              height={400}
              alt="Makine 1"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine2.png"
              width={500}
              height={400}
              alt="Makine 2"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine3.png"
              width={500}
              height={400}
              alt="Makine 3"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine4.png"
              width={500}
              height={400}
              alt="Makine 4"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine5.png"
              width={500}
              height={400}
              alt="Makine 5"
              className="rounded-2xl"
            />
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <Image
              src="/makine6.png"
              width={500}
              height={400}
              alt="Makine 6"
              className="rounded-2xl"
            />
          </div>

        </div>
      </section>

    </main>
  );
}