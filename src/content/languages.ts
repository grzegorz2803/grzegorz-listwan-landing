export type TranslationContent = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    subtitle1: string;
    text: string;
  };
  stack: {
    title: string;
    stackSubtitle: string;
  };
  future: {
    title: string;
    futureTitle: string;
    futureSubtitle: string;
    comingSoon: string[];
    contactTitle: string;
    contactEmail: string;
    footer: string;
  };
};

export const content: Record<"pl" | "en", TranslationContent> = {
  pl: {
    hero: {
      title: "Grzegorz Listwan",
      subtitle: "Inżynier Informatyki | Fullstack Developer | Pasjonat IoT",
      cta: "Połączmy się na LinkedIn",
    },
    about: {
      title: "[ 01 ] O MNIE",
      subtitle: "Pasja do Software, ",
      subtitle1: "wiedza o hardware.",
      text: "Jestem inżynierem informatyki, który łączy świat software'u i hardware'u. Projektuję wydajne systemy webowe oraz inteligentne rozwiązania oparte o Raspberry Pi.",
    },
    stack: {
      title: "[ 02 ] MÓJ STACK TECH",
      stackSubtitle:
        "Nowoczesny stack technologiczny do budowy kompletnych rozwiązań.",
    },
    future: {
      title: "[ 03 ] NADCHODZI...",
      futureTitle: "System Roadmap",
      futureSubtitle: "DASHBOARD ROZWOJU PROJEKTU v1.0",
      comingSoon: [
        "Uruchomienie kompletnego Portfolio - jesień 2026",
        "Pierwsze wpisy na blogu: Raspberry Pi + IoT - styczeń 2027",
        "Wdrożenie pełnego systemu i18n - wiosna 2027",
      ],
      contactTitle: "Zbudujmy coś razem",
      contactEmail: "listwan94@gmail.com",
      footer: "Planowana premiera pełnego portfolio - jesień 2026.",
    },
  },
  en: {
    hero: {
      title: "Grzegorz Listwan",
      subtitle: "Software Engineer | Fullstack Developer | IoT Enthusiast",
      cta: "Let's connect on LinkedIn",
    },
    about: {
      title: "[ 01 ] ABOUT ME",
      subtitle: "Software Passion,",

      subtitle1: "Hardware Expertise.",
      text: "I am a computer science engineer bridging the gap between software and hardware. I design efficient web systems and smart solutions based on Raspberry Pi.",
    },
    stack: {
      title: "[ 02 ] MY TECH STACK",
      stackSubtitle: "Modern tech stack for building end-to-end solutions.",
    },
    future: {
      title: "[ 03 ] COMING SOON...",
      futureTitle: "System Roadmap",
      futureSubtitle: "PROJECT DEVELOPMENT DASHBOARD v1.0",
      comingSoon: [
        "Full Portfolio Launch - Autumn 2026",
        "First Blog Posts: Raspberry Pi + IoT - January 2027",
        "Full i18n System Implementation - Spring 2027",
      ],
      contactTitle: "Let's build something together",
      contactEmail: "listwan94@gmail.com",
      footer: "Official full portfolio premiere - Autumn 2026",
    },
  },
};
