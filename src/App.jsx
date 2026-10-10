import React from "react";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock,
  Code2,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const courses = [
  {
    label: "AI foundations",
    title: "Uvod u AI alate",
    text: "Praktican pocetak za ljude koji zele da razumiju kako AI moze pomoci u ucenju, radu i izradi projekata.",
  },
  {
    label: "Web craft",
    title: "React i moderni frontend",
    text: "Radionice kroz koje polaznici grade stvarne interfejse, komponente i male web aplikacije.",
  },
  {
    label: "Agentic coding",
    title: "Razvoj uz AI agente",
    text: "Koriscenje savremenih razvojnih alata za planiranje, pisanje, testiranje i unapredjivanje koda.",
  },
];

const steps = [
  "Prijava za besplatan termin",
  "Radionica od 3-4 sata",
  "Rad u grupi do 30 polaznika",
  "Praktican mini projekat",
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DevelopersLab home">
          <span className="brand-mark">DL</span>
          <span>DevelopersLab</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#courses">Kursevi</a>
          <a href="#process">Proces</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} />
            Free technology classes in Montenegro
          </p>
          <h1>DevelopersLab</h1>
          <p className="hero-text">
            Ucimo ljude kako da koriste moderne tehnologije, AI alate i web
            development kroz prakticne, kratke i razumljive radionice.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Prijavi se
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#courses">
              Pogledaj kurseve
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="DevelopersLab learning illustration">
          <img
            src="https://developers-lab.me/wp-content/uploads/2021/04/onboarding-1-1.png"
            alt="DevelopersLab onboarding illustration"
          />
          <div className="metric-card top">
            <Users size={20} />
            <span>30 polaznika po grupi</span>
          </div>
          <div className="metric-card bottom">
            <Clock size={20} />
            <span>3-4 sata po radionici</span>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Program highlights">
        <div>
          <GraduationCap size={24} />
          <strong>Besplatna edukacija</strong>
          <span>Dostupna ljudima koji zele praktican ulazak u IT.</span>
        </div>
        <div>
          <Bot size={24} />
          <strong>AI u fokusu</strong>
          <span>Alati i procesi koji se odmah mogu primijeniti.</span>
        </div>
        <div>
          <Code2 size={24} />
          <strong>Projektni rad</strong>
          <span>Ucenje kroz primjere, zadatke i male aplikacije.</span>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="section-heading">
          <p className="eyebrow">Aktuelne oblasti</p>
          <h2>Kursevi napravljeni za praktican pocetak</h2>
          <p>
            Sadrzaj je prilagodjen pocetnicima i ljudima koji zele da predju sa
            teorije na konkretan rad.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <span>{course.label}</span>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-copy">
          <p className="eyebrow">Kako izgleda</p>
          <h2>Jednostavan format za brzo ucenje</h2>
          <p>
            Svaka radionica je kratka, prakticna i vodjena tako da polaznici
            razumiju ne samo alat, vec i nacin razmisljanja iza njega.
          </p>
        </div>

        <ol className="step-list">
          {steps.map((step) => (
            <li key={step}>
              <CheckCircle2 size={20} />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">
            <CalendarDays size={16} />
            Sljedeci korak
          </p>
          <h2>Spremi novu grupu za tehnologije koje se stvarno koriste.</h2>
        </div>
        <a className="button primary" href="mailto:info@developers-lab.me">
          Kontaktiraj tim
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default App;
