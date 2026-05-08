export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
<section className="min-h-[70vh] flex flex-col items-center justify-center">
<h1 className="text-4xl md:text-6xl font-bold">
  A.E.T TEKNO SIVI DOLUM MAKINALARI
</h1>



       

        <p className="mt-6 text-blue-100 max-w-2xl text-lg">
          Endüstriyel sıvı dolum makineleri,
          otomasyon sistemleri ve profesyonel
          üretim çözümleri.
        </p>

        <a
  href="https://wa.me/905526992637"
  target="_blank"
  className="mt-10 inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-200 transition"
>
  WhatsApp Teklif Al
</a>

      </section>

      {/* HİZMETLER */}
      <section
  className="h-screen flex flex-col items-center justify-center text-center px-6 text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/logo.jpg')",
  }}
>

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
          Hizmetlerimiz
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Sıvı Dolum Makinaları
            </h3>

            <p className="text-gray-600">
              Profesyonel dolum sistemleri ve üretim çözümleri.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Otomasyon Sistemleri
            </h3>

            <p className="text-gray-600">
              PLC, sürücü ve endüstriyel otomasyon çözümleri.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Teknik Destek
            </h3>

            <p className="text-gray-600">
              Kurulum, bakım ve teknik servis hizmetleri.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}