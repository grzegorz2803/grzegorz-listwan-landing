import { useState } from "react";
import { content } from "./content/languages";

function App() {
  // Stan języka: domyślnie 'pl'
  const [lang, setLang] = useState<"pl" | "en">("pl");
  const t = content[lang];

  const toggleLang = () => setLang((prev) => (prev === "pl" ? "en" : "pl"));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          {/* LOGO */}
          <div className="text-base md:text-xl font-mono font-bold tracking-tighter text-white">
            <span className="text-cyan-500">&lt;</span>
            GrzegorzListwan.pl
            <span className="text-cyan-500"> /&gt;</span>
          </div>

          {/* PRAWA STRONA: JĘZYK + IKONY */}
          <div className="flex items-center gap-4">
            {/* Przełącznik języka */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-cyan-500 transition-all text-[10px] md:text-sm font-mono text-gray-300 bg-black/40"
            >
              <GlobeIcon />
              {lang.toUpperCase()}
            </button>

            {/* Kontener ikon - usunęliśmy md:flex, dodaliśmy responsywne gap i padding */}
            <div className="flex items-center gap-4 border-l border-gray-800 pl-4 h-5">
              <a
                href="https://github.com/grzegorz2803"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/grzegorz-listwan-0a8507171"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:listwan94@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="relative  min-h-[60vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Obrazek tła */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />

        {/* Gradienty maskujące */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />

        {/* Overlay dla czytelności */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent z-1" />

        {/* KONTENER TREŚCI - Teraz będzie idealnie na środku */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-cyan-400 text-[10px] md:text-xs font-mono mb-6 animate-pulse">
            System Status: Online • v1.0
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            {t.hero.title}
          </h1>

          <p className="text-base md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <a
            href="https://www.linkedin.com/in/grzegorz-listwan-0a8507171"
            target="_blank"
            className="inline-flex items-center px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all transform active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.3)]"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>
      {/* SEKCJA [ 01 ] O MNIE */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Obrazek tła */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/...')] bg-cover bg-center" />

        {/* DODAJ TO: Gradient górny (maskuje wejście) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent z-1" />

        {/* DODAJ TO: Gradient dolny (maskuje wyjście) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-1" />
        {/* Tło graficzne - upewnij się, że plik jest w /public */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/about-bg.jpg')] bg-cover bg-center" />

        {/* Kontener treści z Tailwind */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-center">
          {/* Lewa strona - Tekst (z i18n) */}
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-cyan-400">
              {t.about.title}
            </h2>
            <p className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
              {t.about.subtitle}
              <br />
              {t.about.subtitle1}
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              {t.about.text}
            </p>
          </div>

          {/* Prawa strona - Pusta przestrzeń dla grafiki z tła */}
          {/* Tu nie wstawiamy kodu, bo grafika "digital profil" jest zintegrowana z tłem about-bg.jpg */}
          <div className="order-1 md:order-2 h-96" />
        </div>
      </section>
      {/* SEKCJA [ 02 ] STACK TECH */}
      {/* SEKCJA [ 02 ] STACK TECH */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Obrazek tła */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/...')] bg-cover bg-center" />

        {/* DODAJ TO: Gradient górny (maskuje wejście) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent z-1" />

        {/* DODAJ TO: Gradient dolny (maskuje wyjście) */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-[#0a0a0a] to-transparent z-1" />
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('/stack-bg.jpg')] bg-cover bg-center" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 w-full">
          {/* NAGŁÓWEK SEKCJI */}
          <div className="mb-12">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              {t.stack.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter max-w-2xl">
              {t.stack.stackSubtitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Grupa 1: Frontend */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all group">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-sm">01.</span>{" "}
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind", "Next.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono rounded-md group-hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Grupa 2: Backend */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all group">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-sm">02.</span>{" "}
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "MySQL", "PostgreSQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono rounded-md group-hover:bg-blue-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Grupa 3: IoT & Embedded */}
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all group">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-sm">03.</span> IoT
                / Hardware
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Raspberry Pi", "Python", "GPIO", "Linux"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono rounded-md group-hover:bg-purple-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SEKCJA [ 03 ] NADCHODZI */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0a0a0a] overflow-hidden">
        {/* Obrazek tła */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/...')] bg-cover bg-center" />

        {/* DODAJ TO: Gradient górny (maskuje wejście) */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0a0a0a] to-transparent z-1" />

        {/* DODAJ TO: Gradient dolny (maskuje wyjście) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-1" />
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('/future-bg.jpg')] bg-cover bg-center" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
          {/* NOWY, BRAKUJĄCY NAGŁÓWEK SEKCJI */}
          <div className="mb-16 text-center">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              {t.future.title} {/* To jest [ 03 ] NADCHODZI... */}
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {t.future.futureTitle} <br />
              <span className="text-xl md:text-2xl text-gray-400 font-light font-sans tracking-normal uppercase">
                {t.future.futureSubtitle}
              </span>
            </h3>
          </div>

          <div className="space-y-4 inline-block text-left">
            {t.future.comingSoon.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-gray-300 font-mono"
              >
                <div className="w-5 h-5 border border-cyan-500/50 rounded flex items-center justify-center bg-cyan-500/10"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          {/* SEKCJA KONTAKTOWA (Dodaj nad footerem) */}
          <div className="mt-20 mb-12 py-12 border-y border-white/5 bg-white/2 backdrop-blur-md rounded-3xl px-8">
            <h4 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">
              {t.future.contactTitle}
            </h4>
            <a
              href={`mailto:${t.future.contactEmail}`}
              className="text-3xl md:text-5xl font-black text-white hover:text-cyan-400 transition-all duration-300 break-all md:break-normal"
            >
              {t.future.contactEmail}
            </a>
            <p className="mt-6 text-gray-500 font-mono text-sm">
              {t.future.contactAvailability}
            </p>
          </div>
          <footer className="mt-24 pt-12 border-t border-white/5 text-gray-600 text-sm font-mono">
            <p>{t.future.footer}</p>
            <p className="mt-2 uppercase">
              © {new Date().getFullYear()} {t.future.name}
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
