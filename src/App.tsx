import { useEffect, useMemo, useState, type FormEvent } from "react";
import founderImage from "./assets/images/Rajendra.png";
import ceoImage from "./assets/images/CEO.png";
import partnerImage from "./assets/images/HIFIXPartner.png";
import hifixLogo from "./assets/images/BGlogo.png";
import deepCleaningCaseImage from "./assets/images/Dpc.png";
import bathroomCleaningCaseImage from "./assets/images/Bc.png";
import kitchenCleaningCaseImage from "./assets/images/Kc.png";
import waterTankCaseImage from "./assets/images/Wtc.png";
import sumpTankCaseImage from "./assets/images/Stc.png";
import sofaCleaningCaseImage from "./assets/images/Sc.png";
import villaCleaningCaseImage from "./assets/images/Bvc.png";
import pharmaTankCaseImage from "./assets/images/Pwtc.png";
import trendsetCleaningCaseImage from "./assets/images/webp/after trendset.png";
import trendsetBeforeImage from "./assets/images/webp/before trendset.png";
import deepCleaningBeforeImage from "./assets/images/Dcb.png";
import deepCleaningAfterImage from "./assets/images/Dca.png";
import bathroomCleaningBeforeImage from "./assets/images/Bcb.png";
import bathroomCleaningAfterImage from "./assets/images/Bca.png";
import kitchenCleaningBeforeImage from "./assets/images/Kdcb.png";
import kitchenCleaningAfterImage from "./assets/images/Kdca.png";
import overheadTankBeforeImage from "./assets/images/Wtcb.png";
import overheadTankAfterImage from "./assets/images/Wtca.png";
import sumpBeforeImage from "./assets/images/Stcb.png";
import sumpAfterImage from "./assets/images/Swtca.png";
import sofaBeforeImage from "./assets/images/Smcb.png";
import sofaAfterImage from "./assets/images/Smca.png";
import villaBeforeImage from "./assets/images/Bvcb.png";
import villaAfterImage from "./assets/images/Bvca.png";
import pharmaBeforeImage from "./assets/images/Pwtcb.png";
import pharmaAfterImage from "./assets/images/Pwtca.png";
import houseCleaningImage from "./assets/images/im1.jpeg";
import dailyHelpersImage from "./assets/images/im2.jpeg";
import cookingImage from "./assets/images/im3.jpeg";
import driversImage from "./assets/images/im4.jpeg";
import taxiImage from "./assets/images/im5.jpeg";
import playZoneImage from "./assets/images/im6.jpeg";
import careImage from "./assets/images/im7.jpeg";
import petCareImage from "./assets/images/im8.jpeg";
import beautyImage from "./assets/images/im9.jpeg";
import mensSalonImage from "./assets/images/im10.jpeg";
import electricianImage from "./assets/images/im11.jpeg";
import tutorsImage from "./assets/images/im12.jpeg";
import plumberImage from "./assets/images/im13.jpeg";
import decorImage from "./assets/images/im14.jpeg";
import nursingImage from "./assets/images/im15.jpeg";
import laundryImage from "./assets/images/im16.jpeg";
import pestControlImage from "./assets/images/im17.jpeg";

type Page =
  | "home"
  | "about"
  | "services"
  | "lifestyle"
  | "dailyHelpers"
  | "cooking"
  | "care"
  | "decor"
  | "drivers"
  | "electrical"
  | "beauty"
  | "mensSalon"
  | "nursing"
  | "pestControl"
  | "petCare"
  | "playZone"
  | "plumbing"
  | "tutors"
  | "cleaning"
  | "laundry"
  | "caseDetail"
  | "taxi"
  | "pharma"
  | "cases"
  | "contact"
  | "why"
  | "how"
  | "faqs";

const paths: Record<Page, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  lifestyle: "/services/home-lifestyle",
  dailyHelpers: "/services/daily-helpers",
  cooking: "/services/cooking-cleaning",
  care: "/services/child-adult-care",
  decor: "/services/decor",
  drivers: "/services/drivers",
  electrical: "/services/electrician-ac",
  beauty: "/services/beauty-salon",
  mensSalon: "/services/mens-salon",
  nursing: "/services/nursing-physiotherapy",
  pestControl: "/services/pest-control",
  petCare: "/services/pet-care",
  playZone: "/services/play-zone",
  plumbing: "/services/plumbing",
  tutors: "/services/tutors",
  cleaning: "/services/home-cleaning",
  laundry: "/services/laundry",
  caseDetail: "/case-study",
  taxi: "/services/transportation",
  pharma: "/services/facility-cleaning",
  cases: "/case-studies",
  contact: "/contact",
  why: "/why-hifix",
  how: "/how-it-works",
  faqs: "/faqs",
};

const unavailableServices = new Set<Page>([
  "lifestyle",
  "dailyHelpers",
  "cooking",
  "care",
  "decor",
  "drivers",
  "electrical",
  "beauty",
  "mensSalon",
  "nursing",
  "pestControl",
  "petCare",
  "playZone",
  "plumbing",
  "tutors",
  "laundry",
]);

const image = {
  home: "https://images.unsplash.com/photo-1758273705627-937374bfa978?auto=format&fit=crop&w=1800&q=85",
  clean:
    "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=1400&q=85",
  clean2:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
  taxi: "https://images.unsplash.com/photo-1630259380920-8578296d5ae5?auto=format&fit=crop&w=1800&q=85",
  taxiCity:
    "https://images.unsplash.com/photo-1715249411747-63dc11f4507b?auto=format&fit=crop&w=1400&q=85",
  pharma:
    "https://images.unsplash.com/photo-1748000970909-845f4aa144d2?auto=format&fit=crop&w=1800&q=85",
  pharma2:
    "https://images.unsplash.com/photo-1669101602124-f5b78895d91c?auto=format&fit=crop&w=1400&q=85",
  lab: "https://images.unsplash.com/photo-1669707041081-dd4d51943041?auto=format&fit=crop&w=1400&q=85",
  interior:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=85",
  kitchen:
    "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?auto=format&fit=crop&w=1400&q=85",
};

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const icons: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    car: (
      <>
        <path d="m5 16-1 3M19 16l1 3M3 12l2-6h14l2 6v5H3z" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="17" cy="15" r="1" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    users: (
      <>
        <path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 20v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M5 4h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A15 15 0 0 1 3 6c0-1 1-2 2-2" />
    ),
  };
  return (
    <svg {...common} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function SocialIcon({ platform }: { platform: "linkedin" | "instagram" | "youtube" | "facebook" | "x" }) {
  const icons = {
    linkedin: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.55 20.452h3.567V9H3.55v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    instagram: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </g>
    ),
    youtube: (
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    ),
    facebook: (
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
    ),
    x: (
      <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[platform]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <button
      className={`logo ${light ? "logo-light" : ""}`}
      onClick={() => navigate("home")}
      aria-label="HiFix home"
    >
      <img src={hifixLogo} alt="HiFix — We Connect, You Relax" />
    </button>
  );
}

let navigate: (page: Page) => void = () => {};
let navigateToCaseStudy: (id: number) => void = () => {};

function Header({ page }: { page: Page }) {
  const [menu, setMenu] = useState(false);
  const [services, setServices] = useState(false);
  const [more, setMore] = useState(false);
  const go = (p: Page) => {
    setMenu(false);
    setServices(false);
    setMore(false);
    navigate(p);
  };
  return (
    <>
      <div className="topbar">
        <div className="shell">
          <span>Professional service solutions for modern India</span>
          <span className="top-contact">
            Facility Deep Cleaning&nbsp;&nbsp; • &nbsp;&nbsp;Home Cleaning&nbsp;&nbsp; •
            &nbsp;&nbsp;Taxi Services
          </span>
        </div>
      </div>
      <header className="header">
        <div className="shell nav-wrap">
          <Logo />
          <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
            <button className={page === "home" ? "active" : ""} onClick={() => go("home")}>
              Home
            </button>
            <button className={page === "about" ? "active" : ""} onClick={() => go("about")}>
              About Us
            </button>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
            >
              <button
                className={
                    ["services", "cleaning", "taxi", "pharma"].includes(page)
                    ? "active"
                    : ""
                }
                onClick={() => setServices(!services)}
              >
                Services <Icon name="chevron" size={15} />
              </button>
              {services && (
                <div className="dropdown">
                  <button onClick={() => go("services")}>
                    <span>All Services</span>
                    <Icon name="arrow" size={16} />
                  </button>
                  <button onClick={() => go("pharma")}>
                    <span>Facility Deep Cleaning</span>
                    <Icon name="arrow" size={16} />
                  </button>
                  <button onClick={() => go("cleaning")}>
                    <span>Home Cleaning</span>
                    <Icon name="arrow" size={16} />
                  </button>
                  <button onClick={() => go("taxi")}>
                    <span>Taxi Services</span>
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              )}
            </div>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setMore(true)}
              onMouseLeave={() => setMore(false)}
            >
              <button
                className={["why", "how", "faqs"].includes(page) ? "active" : ""}
                onClick={() => setMore(!more)}
              >
                Explore <Icon name="chevron" size={15} />
              </button>
              {more && (
                <div className="dropdown">
                  <button onClick={() => go("why")}>
                    <span>Why HiFix</span>
                    <Icon name="arrow" size={16} />
                  </button>
                  <button onClick={() => go("how")}>
                    <span>How It Works</span>
                    <Icon name="arrow" size={16} />
                  </button>
                  <button onClick={() => go("faqs")}>
                    <span>FAQs</span>
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              )}
            </div>
            <button
              className={page === "cases" || page === "caseDetail" ? "active" : ""}
              onClick={() => go("cases")}
            >
              Case Studies
            </button>
            <button className={page === "contact" ? "active" : ""} onClick={() => go("contact")}>
              Contact Us
            </button>
          </nav>
          <button className="mobile-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            <Icon name={menu ? "close" : "menu"} size={25} />
          </button>
        </div>
      </header>
    </>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function Button({
  children,
  page = "contact",
  secondary = false,
  light = false,
}: {
  children: React.ReactNode;
  page?: Page;
  secondary?: boolean;
  light?: boolean;
}) {
  return (
    <button
      className={`btn ${secondary ? "btn-outline" : ""} ${light ? "btn-light" : ""}`}
      onClick={() => navigate(page)}
    >
      {children}
      <Icon name="arrow" size={18} />
    </button>
  );
}

function PageHero({
  eyebrow,
  title,
  text,
  photo,
  tall = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  photo: string;
  tall?: boolean;
}) {
  return (
    <section className={`page-hero ${tall ? "tall" : ""}`}>
      <img src={photo} alt="" />
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

const homeServices: { title: string; page: Page; image: string }[] = [
  { title: "Facility Deep Cleaning", page: "pharma", image: pharmaTankCaseImage },
  { title: "Home Cleaning", page: "cleaning", image: houseCleaningImage },
  { title: "Taxi Services", page: "taxi", image: taxiImage },
];

const cleaningHighlights = [
  { title: "One Hyderabad Park", detail: "Banjara Hills, Hyderabad", image: image.interior },
  { title: "Trendset Allure", detail: "Kokapet", image: image.clean },
  { title: "Vasavi Apartments", detail: "Narsingi, Kokapet", image: image.kitchen },
  {
    title: "Pharmaceutical Companies",
    detail: "Shameerpet, Bachupally, Karakapatla",
    image: image.pharma2,
  },
  {
    title: "Apartment/Villa Full House Deep Cleaning",
    detail: "Entire Hyderabad",
    image: houseCleaningImage,
  },
  {
    title: "One-Time Complete Deep Cleaning",
    detail: "Entire Hyderabad",
    image: image.clean2,
  },
];

const homeFaqs = [
  {
    question: "What is HiFix?",
    answer:
      "HiFix connects customers with professional teams for facility deep cleaning, home cleaning and taxi services.",
  },
  {
    question: "What makes HiFix different?",
    answer:
      "HiFix combines verified professionals, transparent pricing, fast booking and quality assurance to deliver a seamless home service experience. Our platform is designed to provide convenience, reliability and exceptional customer satisfaction.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Booking is simple. Browse available services, select your preferred category, choose a convenient date and time, confirm your booking, and a HiFix Professional will be assigned to your request.",
  },
  {
    question: "How quickly can a HiFix Professional reach my location?",
    answer:
      "Depending on service availability and your location, many services can be scheduled in as little as 10 minutes, while others can be booked for a time that best fits your schedule.",
  },
  {
    question: "Are HiFix Professionals verified?",
    answer:
      "Yes. Every HiFix Professional undergoes identity verification, skill assessment and quality screening before joining our platform, ensuring a safe and reliable service experience.",
  },
  {
    question: "Which services does HiFix provide?",
    answer:
      "HiFix provides facility deep cleaning, home cleaning and taxi services.",
  },
  {
    question: "Which locations does HiFix currently serve?",
    answer:
      "HiFix currently serves customers across Hyderabad, Visakhapatnam, Jaggayyapet, Kodad, Suryapet, with additional locations being added as we continue to expand.",
  },
  {
    question: "How can I track my booking?",
    answer:
      "Contact HiFix Support for updates about your booking, assigned professional and estimated arrival time.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer:
      "Yes. Contact HiFix Support to request a reschedule or cancellation, subject to our cancellation and rescheduling policy.",
  },
  {
    question: "How can I contact HiFix Support?",
    answer:
      "Our dedicated support team is always ready to assist you. Email prudvi.nayak@hifix.in or call +91 90008 77499 for help with bookings, payments or service-related queries.",
  },
];

function Home() {
  const exploreItems: { title: string; text: string; page: Page }[] = [
    {
      title: "Why HiFix",
      text: "A dependable cleaning partner for homes, workplaces and specialist facilities.",
      page: "why",
    },
    {
      title: "How It Works",
      text: "Learn how to plan a service with the HiFix team.",
      page: "how",
    },
    {
      title: "FAQs",
      text: "Find answers about services, bookings and support.",
      page: "faqs",
    },
    {
      title: "Talk to Our Team",
      text: "Tell us about your property and we’ll help plan the right service.",
      page: "contact",
    },
  ];
  return (
    <>
      <section className="home-hero">
        <div className="hero-media">
          <img src={image.clean2} alt="Professional cleaning service in a home" />
          <div className="hero-shade" />
        </div>
        <div className="shell hero-content">
          <Eyebrow light>Home cleaning · Facility deep cleaning</Eyebrow>
          <h1>
            Facility Deep Cleaning
            <br />
            <em>and Home Cleaning.</em>
          </h1>
          <p>
            Professional home cleaning and facility deep cleaning for offices and specialist
            environments. HiFix brings trained teams, professional equipment and a quality-first
            approach to every space.
          </p>
          <p className="hero-locations">
            FOR HOMES, WORKPLACES &amp; SPECIALIST FACILITIES
          </p>
          <div className="actions">
            <Button page="pharma">Facility Deep Cleaning</Button>
            <Button page="cleaning" secondary light>
              Home Cleaning
            </Button>
            <Button page="taxi" secondary light>
              Taxi Services
            </Button>
          </div>
        </div>
        <div className="hero-proof">
          <div>
            <strong>500+</strong>
            <span>Deliveries completed</span>
          </div>
          <div>
            <strong>50K+</strong>
            <span>Homes that trust us</span>
          </div>
          <div>
            <strong>1M+</strong>
            <span>Hours saved for customers</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Trusted, trained professionals</span>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell split">
          <div className="why-visual">
            <img src={image.clean} alt="HiFix home service professional at work" />
          </div>
          <div className="intro-copy">
            <Eyebrow>Cleaning by HiFix</Eyebrow>
            <h2>A cleaner space, cared for by professionals.</h2>
            <p className="lead small">
              From a detailed home refresh to ongoing facility care, our teams make it easier to
              keep the places you live and work clean, healthy and welcoming.
            </p>
            <p>
              Choose a one-time clean or discuss a plan tailored to your property, schedule and
              cleaning requirements.
            </p>
            <Button page="contact">Plan a Cleaning Service</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <h2>Professional support for your space and travel.</h2>
            </div>
            <p>
              Explore facility deep cleaning, home cleaning and taxi services from HiFix.
            </p>
          </div>
          <div className="division-list home-cleaning-cards">
            {homeServices.map((service, index) => (
              <article
                className="division-card"
                key={service.title}
                onClick={() => navigate(service.page)}
              >
                <img src={service.image} alt={service.title} />
                <div className="division-overlay" />
                <span className="division-no">{String(index + 1).padStart(2, "0")}</span>
                <div className="division-content">
                  <h3>{service.title}</h3>
                  <p>{serviceDescription(service.title)}</p>
                  <span className="circle-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <Button page="services">Explore All Services</Button>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Explore HiFix</Eyebrow>
              <h2>More ways to experience HiFix.</h2>
            </div>
            <p>Learn how we work, what makes us different, and how to get started with HiFix.</p>
          </div>
          <div className="values-grid">
            {exploreItems.map((item, index) => (
              <article key={item.page}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="text-link" onClick={() => navigate(item.page)}>
                  Explore <Icon name="arrow" size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Case Studies</Eyebrow>
              <h2>Work completed with care.</h2>
            </div>
            <p>Explore HiFix's residential, commercial and specialist facility capabilities.</p>
          </div>
          <div className="project-grid home-project-grid">
            <article className="project">
              <img src={image.interior} alt="Residential cleaning project" />
              <div className="project-caption">
                <span>Residential Cleaning</span>
                <h3>Apartment deep cleaning</h3>
              </div>
            </article>
            <article className="project">
              <img src={image.lab} alt="Biotechnology facility cleaning" />
              <div className="project-caption">
                <span>Pharma &amp; Biotech</span>
                <h3>Facility cleaning</h3>
              </div>
            </article>
            <article className="project">
              <img src={image.clean2} alt="Commercial facility cleaning" />
              <div className="project-caption">
                <span>Commercial Cleaning</span>
                <h3>Professional workspace care</h3>
              </div>
            </article>
          </div>
          <Button page="cases">View Case Studies</Button>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell contact-grid">
          <div>
            <Eyebrow>Contact HiFix</Eyebrow>
            <h2>Let’s make service simpler.</h2>
            <p className="lead small">
              Tell us what you need and the HiFix team will help direct your enquiry.
            </p>
          </div>
          <div className="contact-items">
            <div>
              <span><Icon name="phone" /></span>
              <p><small>Phone</small><strong><a href="tel:+919000877499">+91 90008 77499</a></strong></p>
            </div>
            <div>
              <span><Icon name="mail" /></span>
              <p><small>Email</small><strong><a href="mailto:prudvi.nayak@hifix.in">prudvi.nayak@hifix.in</a></strong></p>
            </div>
            <Button page="contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Cta() {
  return (
    <section className="cta">
      <div className="shell cta-inner">
        <div>
          <Eyebrow light>Let’s work together</Eyebrow>
          <h2>
            Looking for reliable
            <br />
            service solutions?
          </h2>
          <p>Connect with HiFix Innovatives for professional services.</p>
          <div className="actions">
            <Button page="contact">Make an Enquiry</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyHiFix() {
  const reasons = [
    "Professionals are identity-verified and screened",
    "Convenient service coordination from enquiry to completion",
    "Facility deep cleaning, home cleaning and taxi services",
    "Service plans based on your requirements",
    "Quality-focused customer experience",
    "Support for homes and businesses",
  ];

  return (
    <>
      <PageHero
        eyebrow="Why Choose HiFix?"
        title="Reliable professionals. Exceptional service."
        text="Every HiFix professional is verified, trained and committed to delivering safe, dependable service at your doorstep."
        photo={image.clean2}
        tall
      />
      <section className="section">
        <div className="shell why-grid">
          <div className="why-visual">
            <img src={partnerImage} alt="HiFix service professional" />
            <div className="experience-badge">
              <strong>20+</strong>
              <span>
                dedicated
                <br />
                professionals
              </span>
            </div>
          </div>
          <div>
            <Eyebrow>Service You Can Trust</Eyebrow>
            <h2>Thoughtful support, from booking to completion.</h2>
            <p className="lead small">
              HiFix brings together trusted professionals, responsive coordination and clear
              booking steps to make everyday services easier to arrange.
            </p>
            <div className="benefits">
              {reasons.map((reason) => (
                <div key={reason}>
                  <span>
                    <Icon name="check" size={15} />
                  </span>
                  {reason}
                </div>
              ))}
            </div>
            <Button page="services">Explore Our Services</Button>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="shell stats-grid">
          <div>
            <strong>50K+</strong>
            <span>Homes that trust us</span>
          </div>
          <div>
            <strong>1M+</strong>
            <span>Hours saved for customers</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Trusted, trained professionals</span>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Book a service in just a few steps."
        text="Experience a seamless booking journey—from selecting your service to welcoming a verified HiFix Professional at your doorstep, all in as little as 10 minutes."
        photo={image.home}
        tall
      />
      <section className="section">
        <div className="shell image-feature">
          <img src={partnerImage} alt="A HiFix professional ready to help" />
          <div>
            <Eyebrow>Your HiFix Booking</Eyebrow>
            <h2>A straightforward service journey.</h2>
            <div className="process-list">
              <div>
                <span>1</span>
                <p>
                  <strong>Pick your Service.</strong> Choose the cleaning service that best fits
                  your space and requirements.
                </p>
              </div>
              <div>
                <span>2</span>
                <p>
                  <strong>Add to Cart.</strong> Stack multiple tasks into one booking. Your Pro
                  handles them all in a single visit.
                </p>
              </div>
              <div>
                <span>3</span>
                <p>
                  <strong>Pay &amp; Done.</strong> Get a Pro in minutes, book for later, or set up a
                  recurring slot hassle-free.
                </p>
              </div>
            </div>
            <Button page="contact">Enquire About a Service</Button>
          </div>
        </div>
      </section>
      <section className="journey">
        <div className="shell">
          <Eyebrow light>From Request to Service</Eyebrow>
          <h2>Your service, clearly coordinated.</h2>
          <div className="journey-flow">
            {["Choose", "Book", "Professional assigned", "Service complete"].map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
                {index < 3 && <Icon name="arrow" size={16} />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions."
        text="Find answers about HiFix services, booking, professionals and customer support."
        photo={image.kitchen}
      />
      <section className="section light-section">
        <div className="shell">
          <div className="numbered-services">
            {homeFaqs.map((faq, index) => (
              <article key={faq.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <details>
                    <summary>
                      <h3>{faq.question}</h3>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  const achievements = [
    "5000+ service bookings completed since inception",
    "50+ specialized service categories",
    "Verified and background-checked professionals",
    "Average service delivery 95% on-time",
    "98% customer satisfaction across all services",
    "24/7 customer support available",
    "Transparent pricing with no hidden charges",
    "Quality assurance for every service",
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built for Your Daily Needs."
        text="Founded in 2025, HiFix is a modern platform connecting you with reliable professionals for a wide range of home services."
        photo={image.clean2}
      />
      <section className="section light-section">
        <div className="shell split">
          <div className="why-visual">
            <img src={image.clean} alt="HiFix home service professional at work" />
          </div>
          <div className="intro-copy">
            <Eyebrow>About Us</Eyebrow>
            <h2>HiFix Platform</h2>
            <p className="lead small">
              HiFix is a modern platform built to simplify your daily needs by connecting you with
              reliable teams for facility deep cleaning, home cleaning and taxi services.
            </p>
            <p>
              We provide facility deep cleaning, home cleaning and taxi services, with reliable
              support from enquiry through service completion.
            </p>
            <p>
              <strong>Mr. Rajendra Prasad</strong>, Founder and Managing Director of HiFix, leads
              the company with a vision to transform the home services industry through innovation,
              technology and customer-centric excellence. With extensive expertise in facility
              management, operations and business development, he is committed to maintaining high
              standards of quality, reliability and customer satisfaction.
            </p>
            <p>
              <strong>Mr. Prudvi Nayak</strong>, Co-Founder and Chief Executive Officer, drives the
              company’s strategic growth, digital innovation, technology initiatives and operational
              excellence. He oversees product development, customer experience, service expansion
              and business partnerships, with a vision to make HiFix the most trusted home services
              platform by delivering a seamless, reliable and technology-driven customer experience.
            </p>
            <p>
              Our teams deliver professional facility deep cleaning and home cleaning, alongside
              convenient taxi services.
            </p>
            <p className="lead small">“Quality Services at Your Doorstep”</p>
            <Button page="contact">Contact HiFix</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <h2>Experienced Leaders at Every Level</h2>
            </div>
          </div>
          <div className="service-overview">
            <article>
              <img src={founderImage} alt="Mr. Rajendra Prasad" />
              <div>
                <h3>Mr. Rajendra Prasad</h3>
                <span>Founder &amp; Managing Director</span>
                <p>
                  A distinguished leader with extensive expertise in the service industry. Held
                  senior leadership and project management roles, delivering solutions for various
                  facilities. Brings deep experience in project execution, quality compliance and
                  operational excellence. Passionate about driving innovation, quality and customer
                  satisfaction through world-class practices.
                </p>
                <a
                  className="btn btn-outline"
                  href="https://www.linkedin.com/in/rajendra-prasad-gugulothu-b36499b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Profile <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
            <article>
              <img src={ceoImage} alt="Mr. Prudvi Nayak" />
              <div>
                <h3>Mr. Prudvi Nayak</h3>
                <span>Co-Founder &amp; Chief Executive Officer</span>
                <p>
                  Provides strategic leadership, driving business growth and operational performance
                  across all service categories while ensuring innovation, quality and customer
                  satisfaction through comprehensive project management and technical expertise.
                </p>
                <a
                  className="btn btn-outline"
                  href="https://www.linkedin.com/in/prudvi-nayak-gugulothu-77496513a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Profile <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Our Founders</Eyebrow>
              <h2>Two Brothers. One Vision.</h2>
            </div>
          </div>
          <div className="founders-story">
            <p>
              We’re two brothers united by a lifelong bond and a shared passion for building
              something meaningful. HIFIX was born from our combined vision—a blend of our
              individual strengths, underpinned by a deep belief in trust, honesty, and the power
              of hard work to create something truly exceptional.
            </p>
            <p>
              From a young age, we’ve pushed, challenged, and supported one another through every
              chapter of life. That same spirit now drives how we lead our team and serve our
              clients. Our unique perspectives complement each other, allowing us to bring
              innovation, precision, and passion to every project we take on.
            </p>
            <p>
              As brothers and Managing Directors of HIFIX, we founded this company with a clear
              purpose: to deliver quality, reliability, and forward-thinking solutions that stand
              the test of time. What began as a dream between two brothers has grown into a trusted
              name in the industry—fueled by dedication, perseverance, and a strong sense of purpose.
            </p>
            <p>
              At HIFIX, family values are the cornerstone of our culture. We treat our clients and
              our team like family—with respect, collaboration, and a commitment to long-term
              relationships. Along with our experience, we bring a deep-rooted belief in teamwork,
              integrity, and continuous improvement. Our journey has been shaped by challenges,
              driven by opportunity, and made truly meaningful through the partnerships we’ve built.
            </p>
            <p>
              Thank you for taking the time to get to know us. We’re excited to have you be part of
              the HIFIX story.
            </p>
            <div className="founders-signoff">
              <span>Warm regards,</span>
              <strong>Prudvi &amp; Rajendra</strong>
              <span>Managing Directors, HIFIX</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell split">
          <article>
            <span>01</span>
            <h3>Our Mission</h3>
            <p>
              To provide consistently high quality services in an efficient and professional manner
              to ensure customer satisfaction, comfort and enhance daily life through reliable home
              services.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Our Vision</h3>
            <p>
              To be the preferred home service platform, delivering effective, reliable and
              excellent services as a collaborative and valued partner for all your daily needs.
            </p>
          </article>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <Eyebrow>Our Track Record</Eyebrow>
          <h2>Achievements That Speak for Themselves</h2>
          <div className="benefits">
            {achievements.map((achievement) => (
              <div key={achievement}>
                <span>
                  <Icon name="check" size={15} />
                </span>
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="shell stats-grid">
          <div>
            <strong>5000+</strong>
            <span>Bookings completed</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>Service categories</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Customer satisfaction</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support available</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Verified professionals</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <div>
            <Eyebrow>Need Help?</Eyebrow>
            <h2>Get in touch.</h2>
            <p>
              For any inquiries, suggestions or feedback, feel free to reach out. We’re always
              listening and ready to help.
            </p>
          </div>
          <div>
            <p className="lead small">Customer Support</p>
            <a className="text-link" href="tel:+919000877499">
              +91 9000877499
            </a>
            <p className="lead small">Email</p>
            <a className="text-link" href="mailto:prudvi.nayak@hifix.in">
              prudvi.nayak@hifix.in
            </a>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Facility deep cleaning, home cleaning and taxi services."
        text="Explore HiFix’s professional facility cleaning, home cleaning and taxi services."
        photo={image.kitchen}
        tall
      />
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Explore HiFix Services</Eyebrow>
              <h2>Choose the service you need.</h2>
            </div>
            <p>
              From detailed facility and home cleaning to convenient taxi services, HiFix helps
              you arrange professional support.
            </p>
          </div>
          <div className="division-list">
            {homeServices.map((service, index) => (
              <article
                className="division-card"
                key={service.title}
                onClick={() => navigate(service.page)}
              >
                <img src={service.image} alt={service.title} />
                <div className="division-overlay" />
                <span className="division-no">{String(index + 1).padStart(2, "0")}</span>
                <div className="division-content">
                  <h3>{service.title}</h3>
                  <p>{serviceDescription(service.title)}</p>
                  <span className="circle-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const lifestyleGroups = [
  {
    category: "Home Care",
    services: [
      "House Cleaning",
      "Daily Helpers",
      "Cooking & Cleaning",
      "Laundry",
      "Pest Control",
      "Other Home Services",
    ],
  },
  {
    category: "Family & Personal",
    services: [
      "Play Zone",
      "Child & Adult Care",
      "Pet Care",
      "Beauty & Salon",
      "Men's Salon",
      "Nursing",
    ],
  },
  {
    category: "Skilled Services",
    services: ["Drivers", "Electrician & AC Services", "Tutors", "Plumbing", "Decor Services"],
  },
];

function Lifestyle() {
  return (
    <>
      <PageHero
        eyebrow="Home & Lifestyle"
        title="More time for what matters."
        text="Dependable everyday services, coordinated around your home, family and lifestyle."
        photo={image.home}
        tall
      />
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>17 Everyday Services</Eyebrow>
              <h2>
                Practical help,
                <br />
                professionally arranged.
              </h2>
            </div>
            <p>
              Choose the service you need. Our team will understand your requirement and help
              coordinate the right support.
            </p>
          </div>
          {lifestyleGroups.map((g, gi) => (
            <div className="service-group" key={g.category}>
              <div className="group-label">
                <span>0{gi + 1}</span>
                <h3>{g.category}</h3>
              </div>
              <div className="compact-services">
                {g.services.map((s, i) => (
                  <article key={s}>
                    <div className="service-icon">
                      <Icon name={gi === 0 ? "home" : gi === 1 ? "users" : "sparkle"} />
                    </div>
                    <div>
                      <h4>{s}</h4>
                      <p>{serviceDescription(s)}</p>
                      <button
                        onClick={() =>
                          navigate(
                            s === "Daily Helpers"
                              ? "dailyHelpers"
                              : s === "Cooking & Cleaning"
                              ? "cooking"
                              : s === "Laundry"
                                ? "laundry"
                              : s === "Child & Adult Care"
                                ? "care"
                              : s === "Decor Services"
                                ? "decor"
                                : s === "Drivers"
                                  ? "drivers"
                                : s === "Electrician & AC Services"
                              ? "electrical"
                              : s === "Beauty & Salon"
                                ? "beauty"
                                : s === "Men's Salon"
                                  ? "mensSalon"
                                  : s === "Nursing"
                                    ? "nursing"
                                    : s === "Pest Control"
                                      ? "pestControl"
                                      : s === "Pet Care"
                                        ? "petCare"
                                            : s === "Play Zone"
                                              ? "playZone"
                                              : s === "Plumbing"
                                                ? "plumbing"
                                                : s === "Tutors"
                                                  ? "tutors"
                                      : "contact",
                          )
                        }
                      >
                        {s === "Daily Helpers" || s === "Cooking & Cleaning" || s === "Laundry" || s === "Child & Adult Care" || s === "Decor Services" || s === "Drivers" || s === "Electrician & AC Services" || s === "Beauty & Salon" || s === "Men's Salon" || s === "Nursing" || s === "Pest Control" || s === "Pet Care" || s === "Play Zone" || s === "Plumbing" || s === "Tutors"
                          ? "View services"
                          : "Book now"}{" "}
                        <Icon name="arrow" size={15} />
                      </button>
                    </div>
                    <span className="item-no">{String(i + 1).padStart(2, "0")}</span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}

function serviceDescription(s: string) {
  const custom: Record<string, string> = {
    "House Cleaning": "Detailed care for cleaner, fresher and more comfortable living spaces.",
    "Facility Deep Cleaning":
      "Detailed cleaning for commercial, pharma, biotech and specialist facilities.",
    "Home Cleaning":
      "Detailed cleaning for apartments, villas, kitchens, bathrooms and more.",
    "Taxi Services":
      "Convenient rides for city travel, airport transfers and everyday journeys.",
    "Daily Helpers": "Skilled household maintenance, repair, installation and general support.",
    "Cooking & Cleaning": "Hygienic meal preparation, kitchen assistance and household support.",
    Laundry: "Professional washing, ironing and garment care at your convenience.",
    Drivers: "Experienced drivers for daily travel, airport transfers and longer journeys.",
    "Child & Adult Care": "Considerate support for children, adults and family routines.",
    "Electrician & AC Services": "Skilled assistance for essential electrical and cooling needs.",
    "Beauty & Salon": "Convenient personal care services arranged around your schedule.",
    "Men's Salon": "Convenient at-home grooming and personal care from skilled professionals.",
    Nursing: "Compassionate home healthcare and physiotherapy from qualified professionals.",
    "Pest Control": "Safe, effective pest management for homes and workplaces.",
    "Pet Care": "Professional grooming and personalized care to keep pets comfortable and happy.",
    "Play Zone": "Indoor and outdoor recreation, sports, and family entertainment experiences.",
    Plumbing: "Skilled plumbing repairs and installations for everyday household needs.",
    Plumber: "Skilled plumbing repairs and installations for everyday household needs.",
    Tutors:
      "Qualified tutoring for school subjects, engineering, spoken English, programming and skill development.",
  };
  return custom[s] || `Reliable ${s.toLowerCase()} support for your everyday needs.`;
}

const dailyHelpersIncluded = [
  "Carpentry & Woodwork",
  "Welding & Fabrication",
  "Masonry Services",
  "Painting Solutions",
  "Furniture Repairs & Installations",
  "Door & Window Repairs",
  "Home Fixture Installations",
  "Wall Mounting & Drilling",
  "Cupboard & Cabinet Repairs",
  "Curtain & Blind Installation",
  "General Household Maintenance",
  "Professional Consultation Services",
];

const dailyHelpersNotIncluded = [
  "Major Civil Construction Projects",
  "Structural Building Modifications",
  "Government Permit-Based Works",
  "Interior Design Services",
  "Raw Material Procurement",
  "Transportation of Construction Materials",
  "Heavy Industrial Fabrication",
  "Services Outside the Selected Booking Scope",
];

function DailyHelpers() {
  return (
    <>
      <PageHero
        eyebrow="Daily Helpers"
        title="Skilled help for everyday fixes."
        text="Professional daily helper services delivered by experienced and verified HiFix Professionals for household maintenance, repairs, installations, carpentry, painting, fabrication, and general support. Book skilled experts for one-time or scheduled services."
        photo={dailyHelpersImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={dailyHelpersImage} alt="HiFix daily helper supporting household maintenance" />
          <div>
            <Eyebrow>Daily Helper Services</Eyebrow>
            <h2>Reliable help to keep your home in good shape.</h2>
            <p className="lead small">
              Book experienced HiFix Professionals for repairs, installations and general household
              maintenance, with one-time and scheduled service options.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected daily helper service package.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {dailyHelpersIncluded.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {dailyHelpersNotIncluded.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const cookingIncluded = [
  "Professional Home Cooking",
  "Kitchen Cleaning & Dishwashing",
  "Daily Kitchen Assistance",
  "Meal Preparation",
  "Kitchen Organization",
  "Clean & Hygienic Work Practices",
  "Scheduled & One-Time Services",
  "Trained & Verified HiFix Professionals",
];

const cookingNotIncluded = [
  "Grocery Shopping",
  "Cost of Food Ingredients",
  "Medical or Specialized Diet Planning",
  "Catering for Large Events",
  "Deep Home Cleaning Services",
  "Commercial Kitchen Operations",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function CookingCleaning() {
  return (
    <>
      <PageHero
        eyebrow="Cooking & Cleaning"
        title="Cooking & Cleaning"
        text="Professional cooking and home assistance services designed to make everyday living easier. Our trained HiFix Professionals provide hygienic meal preparation, kitchen assistance, and household support, ensuring a clean, organized, and comfortable home environment."
        photo={cookingImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={cookingImage} alt="HiFix cooking and cleaning service" />
          <div>
            <Eyebrow>Cooking &amp; Cleaning Services</Eyebrow>
            <h2>Everyday kitchen help, made simple.</h2>
            <p className="lead small">
              Get support with home cooking, meal preparation and kitchen assistance from trained
              HiFix Professionals.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>
              Review what’s included and excluded from your selected cooking and cleaning service
              package.
            </p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>{cookingIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>{cookingNotIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const careIncluded = [
  "Childcare Provider Services",
  "Elder Caregiver Services",
  "Special Care Services",
  "Trained & Verified Caregivers",
  "Compassionate Care",
  "Personalized Assistance",
  "Home-based Care",
  "Safety & Dignity",
  "Peace of Mind",
  "Experienced Staff",
  "Dependable Service",
  "Professional Support",
];

const careNotIncluded = [
  "Medical Treatments",
  "Medication Costs",
  "Medical Equipment",
  "Hospital Admissions",
  "Doctor Consultations",
  "Specialized Medical Care",
  "Transportation Costs",
  "Food & Nutrition",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

const decorIncluded = [
  "Event & Venue Decoration",
  "Birthday & Party Decoration",
  "Lighting Solutions",
  "Theme-based Decor",
  "Tent House Setup",
  "Floral Arrangements",
  "Event Planning Support",
  "Custom Design Options",
  "Professional Installation",
  "Setup & Cleanup",
  "Balloon Decorations",
  "Outdoor & Indoor Lighting",
];

const decorNotIncluded = [
  "Venue Rental",
  "Catering Services",
  "Photography",
  "Entertainment",
  "Sound System",
  "Additional Staff",
  "Flower Costs",
  "Material Costs",
  "Transportation",
  "Heavy Equipment",
  "Permits & Licenses",
  "Outside Scope Services",
];

function ChildAdultCare() {
  return (
    <>
      <PageHero
        eyebrow="Child & Adult Care"
        title="Child & Adult Care"
        text="Compassionate and professional care services designed to support children, senior citizens, and individuals requiring personalized assistance. HiFix connects you with trained, verified, and experienced caregivers who provide dependable care in the comfort of your home, ensuring safety, dignity, and peace of mind for your loved ones."
        photo={careImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={careImage} alt="HiFix child and adult care services" />
          <div>
            <Eyebrow>Child &amp; Adult Care Services</Eyebrow>
            <h2>Considerate support for the people you care about.</h2>
            <p className="lead small">
              Arrange dependable in-home care and personalized assistance from trained and verified
              HiFix caregivers.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>
              Review what’s included and excluded from your selected child and adult care service
              package.
            </p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>{careIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>{careNotIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

function DecorServices() {
  return (
    <>
      <PageHero
        eyebrow="Decor Services"
        title="Decor Services"
        text="Transform every occasion into a memorable celebration with HiFix Decor Services. From birthdays and family gatherings to corporate events and festive occasions, our creative decoration professionals deliver elegant themes, lighting solutions, event setups, and customized décor tailored to your style and budget."
        photo={decorImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={decorImage} alt="HiFix event and celebration decor services" />
          <div>
            <Eyebrow>Event &amp; Home Decor</Eyebrow>
            <h2>Make every occasion feel special.</h2>
            <p className="lead small">
              Explore theme-based decoration, lighting and event setup options tailored to your
              occasion, style and budget.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>
              Review what’s included and excluded from your selected decor service package.
            </p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>{decorIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>{decorNotIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const electricalIncluded = [
  "Wiring and Installation",
  "Fan and Light Repair",
  "Switchboard Fixing",
  "Appliance Repair",
  "AC Repair",
  "Switch Installation",
  "Fan Installation",
  "Light Installation",
  "MCB/Fuse Repair",
  "CCTV Installation",
  "TV Installation",
  "Professional Electricians",
];

const electricalNotIncluded = [
  "Replacement Parts",
  "Major Modifications",
  "Additional Repairs",
  "Emergency Charges",
  "Premium Materials",
  "Specialized Equipment",
  "Transportation Costs",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function Electrical() {
  return (
    <>
      <PageHero
        eyebrow="Electrician & AC Services"
        title="Electrical Services"
        text="Professional electrical services delivered by experienced and certified HiFix electricians. From wiring and installations to appliance repairs and safety inspections, we ensure reliable, safe, and efficient electrical solutions for your home or office with skilled expertise and quality workmanship."
        photo={electricianImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={electricianImage} alt="HiFix electrician and AC service professional" />
          <div>
            <Eyebrow>Electrician &amp; AC Services</Eyebrow>
            <h2>Reliable electrical help for your home or office.</h2>
            <p className="lead small">
              Find a professional for installations, repairs and electrical maintenance through
              HiFix.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected electrical service package.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {electricalIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {electricalNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const beautyIncluded = [
  "Eyebrows Shaping",
  "Mehndi Services",
  "Makeup Services",
  "Nail Art",
  "Pedicure and Manicure",
  "Waxing Basics",
  "Waxing Premium",
  "Haircut",
  "Head Massage",
  "Body Massage",
  "Professional Stylists",
  "Hygienic Service",
];

const beautyNotIncluded = [
  "Premium Products",
  "Bridal Packages",
  "Hair Treatment Products",
  "Skin Care Products",
  "Specialized Tools",
  "Extra Services",
  "Transportation Costs",
  "Aftercare Products",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function Beauty() {
  return (
    <>
      <PageHero
        eyebrow="Beauty & Salon Services"
        title="Beauty & Salon"
        text="Indulge in premium beauty and salon services delivered by skilled and verified HiFix Professionals. From stunning makeup and hairstyling to relaxing massages and nail art, we bring the salon experience to your doorstep, ensuring you look and feel your best with hygienic, personalized, and convenient care."
        photo={beautyImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={beautyImage} alt="HiFix Beauty & Salon services" />
          <div>
            <Eyebrow>Beauty &amp; Salon Services</Eyebrow>
            <h2>Salon care, brought to your doorstep.</h2>
            <p className="lead small">
              Book verified HiFix Professionals for convenient beauty and personal care at home.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected beauty service package.</p>
          </div>
          <div className="values-grid beauty-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {beautyIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {beautyNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const mensSalonIncluded = [
  "Haircut",
  "Style Haircut (Creative)",
  "Oil Head Massage",
  "Hair Colour",
  "Facial (Normal)",
  "Body Massage (Normal)",
  "Shaving or Trimming",
  "Professional Stylists",
  "Hygienic Service",
  "Convenient Home Service",
  "Premium Experience",
  "Quality Products",
];

const mensSalonNotIncluded = [
  "Premium Hair Products",
  "Hair Treatment Products",
  "Skin Care Products",
  "Specialized Tools",
  "Extra Services",
  "Transportation Costs",
  "Aftercare Products",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function MensSalon() {
  return (
    <>
      <PageHero
        eyebrow="Men’s Salon Services"
        title="Men’s Salon"
        text="Experience professional men’s grooming services delivered at your doorstep by skilled and verified HiFix Professionals. From stylish haircuts and grooming to relaxing massages and facial care, we provide a convenient, hygienic, and premium salon experience tailored to your personal style and comfort."
        photo={mensSalonImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={mensSalonImage} alt="HiFix Men’s Salon services" />
          <div>
            <Eyebrow>Men’s Salon Services</Eyebrow>
            <h2>Professional grooming, at your convenience.</h2>
            <p className="lead small">
              Skilled professionals bring a convenient, hygienic salon experience to your home.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected men’s salon package.</p>
          </div>
          <div className="values-grid beauty-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {mensSalonIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {mensSalonNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const nursingIncluded = [
  "Injection & IV Drip Assistance",
  "Wound Dressing & Basic Medical Care",
  "Blood Pressure & Diabetes Monitoring",
  "Orthopedic Physiotherapy",
  "Neurological Physiotherapy",
  "Pediatric Physiotherapy",
  "Home Healthcare Support",
  "Post-Hospital Recovery Assistance",
  "Trained & Verified Healthcare Professionals",
  "Personalized Care at Home",
];

const nursingNotIncluded = [
  "Emergency Medical Services",
  "Hospital Admission & Inpatient Care",
  "Doctor Consultation & Diagnosis",
  "Medicines & Medical Consumables",
  "Laboratory Tests & Diagnostic Services",
  "Surgical Procedures",
  "Medical Equipment Supply or Rental",
  "Services Outside the Confirmed Booking Scope",
];

function Nursing() {
  return (
    <>
      <PageHero
        eyebrow="Nursing & Physiotherapy"
        title="Nursing & Physiotherapy"
        text="Receive compassionate healthcare services in the comfort of your home with HiFix Nursing & Physiotherapy. Our qualified nurses and licensed physiotherapists provide professional home healthcare, rehabilitation, post-hospital recovery support, elderly care assistance, and personalized therapy plans to promote faster recovery, improved mobility, and overall well-being."
        photo={nursingImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={nursingImage} alt="HiFix Nursing and Physiotherapy services" />
          <div>
            <Eyebrow>Nursing &amp; Physiotherapy</Eyebrow>
            <h2>Compassionate healthcare, in the comfort of home.</h2>
            <p className="lead small">
              Qualified nurses and physiotherapists provide personalized care and recovery support
              at home.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>
              Review what’s included and excluded from your selected nursing and physiotherapy
              service package.
            </p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {nursingIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>What’s Not Included</h3>
              <ul>
                {nursingNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const pestControlIncluded = [
  "General Pest Control Services",
  "Cockroach Control",
  "Termite Treatment",
  "Bed Bug Treatment",
  "Mosquito & Fly Control",
  "Rodent Control",
  "Residential Pest Management",
  "Apartment, Villa & Office Pest Control",
  "Safe & Eco-Friendly Treatments",
  "Trained & Verified Pest Control Professionals",
];

const pestControlNotIncluded = [
  "Structural Repairs or Renovation Work",
  "Replacement of Damaged Furniture or Fixtures",
  "Building Waterproofing Services",
  "Landscaping & Garden Maintenance",
  "Sale of Pest Control Chemicals or Equipment",
  "Permanent Structural Solutions",
  "Services Outside the Confirmed Booking Scope",
];

function PestControl() {
  return (
    <>
      <PageHero
        eyebrow="Pest Control"
        title="Pest Control"
        text="Protect your home and workplace with HiFix Pest Control Services. Our trained and verified pest control professionals provide safe, effective, and eco-friendly pest management solutions to eliminate common household and commercial pests while helping maintain a clean, healthy, and pest-free environment."
        photo={pestControlImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={pestControlImage} alt="HiFix Pest Control services" />
          <div>
            <Eyebrow>Pest Control Services</Eyebrow>
            <h2>Protect the spaces you live and work in.</h2>
            <p className="lead small">
              Effective pest management delivered by trained professionals using safe, considered
              treatment methods.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected pest control service.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {pestControlIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>What’s Not Included</h3>
              <ul>
                {pestControlNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const petCareIncluded = [
  "Pet Groomer Services",
  "Pet Care Taker Services",
  "Pet Home Service",
  "Professional Grooming",
  "Routine Care",
  "Personalized Home Visits",
  "Trained & Verified Professionals",
  "Safe Environment",
  "Stress-free Care",
  "Healthy & Comfortable Pets",
  "Quality Service",
  "Reliable Care",
];

const petCareNotIncluded = [
  "Veterinary Services",
  "Medical Treatments",
  "Medication Costs",
  "Pet Food & Supplies",
  "Specialized Medical Care",
  "Emergency Services",
  "Transportation Costs",
  "Boarding Facilities",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function PetCare() {
  return (
    <>
      <PageHero
        eyebrow="Pet Care"
        title="Pet Care"
        text="Give your beloved pets the care they deserve with HiFix Pet Care Services. From professional grooming and routine care to personalized home visits, our trained and verified pet care professionals ensure your pets remain healthy, comfortable, and happy in a safe and stress-free environment."
        photo={petCareImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={petCareImage} alt="HiFix Pet Care services" />
          <div>
            <Eyebrow>Pet Care Services</Eyebrow>
            <h2>Thoughtful care for your beloved pets.</h2>
            <p className="lead small">
              Professional grooming and routine care brought to your home by trained and verified
              pet care professionals.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected pet care service.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {petCareIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {petCareNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const playZoneIncluded = [
  "Kids Play Zone",
  "Box Cricket",
  "Badminton",
  "Safe & Well-maintained Venues",
  "Professional Management",
  "Indoor Recreational Activities",
  "Outdoor Sports Facilities",
  "Family Entertainment",
  "Friendly Match Arrangements",
  "Children's Activities",
  "Equipment Provided",
  "Enjoyable Experience",
];

const playZoneNotIncluded = [
  "Food and Beverages",
  "Personal Equipment",
  "Transportation to Venue",
  "Private Event Booking",
  "Special Arrangements",
  "Tournament Organization",
  "Coaching Services",
  "Membership Fees",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function PlayZone() {
  return (
    <>
      <PageHero
        eyebrow="Play Zone"
        title="Play Zone"
        text="Discover exciting indoor and outdoor recreational experiences with HiFix Play Zone Services. Whether you're planning family fun, friendly matches, or children's activities, HiFix connects you with safe, well-maintained, and professionally managed entertainment venues for an enjoyable experience."
        photo={playZoneImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={playZoneImage} alt="HiFix Play Zone services" />
          <div>
            <Eyebrow>Play Zone Services</Eyebrow>
            <h2>Make room for fun, play, and friendly competition.</h2>
            <p className="lead small">
              Find professionally managed indoor and outdoor activities for children, families, and
              friends.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected Play Zone service.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {playZoneIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {playZoneNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const cleaningServices = [
  "Washroom Cleaning",
  "Deep House Cleaning",
  "Villa Cleaning",
  "Office Cleaning",
  "Salon Cleaning",
  "Gym Cleaning",
  "Sofa Cleaning",
];

const houseCleaningIncluded = [
  "Professional Deep Home Cleaning",
  "Kitchen Cleaning",
  "Sofa, Carpet & Mattress Cleaning",
  "Water Tank Cleaning",
  "Appliance Cleaning",
  "Home Sanitization",
  "Balcony & Utility Area Cleaning",
  "Complete Home Maintenance Cleaning",
];

const houseCleaningNotIncluded = [
  "Civil or Renovation Work",
  "Plumbing Repairs",
  "Electrical Repairs",
  "Painting Services",
  "Tile Replacement",
  "Structural Repairs",
  "Furniture Assembly",
  "Construction Waste Removal",
];

function Cleaning() {
  return (
    <>
      <PageHero
        eyebrow="House Cleaning"
        title="House Cleaning"
        text="Professional home cleaning solutions designed to maintain a hygienic, healthy, and comfortable living environment. Our trained HiFix Professionals deliver high-quality cleaning services using modern equipment and safe cleaning practices for homes of every size."
        photo={houseCleaningImage}
        tall
      />

      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={houseCleaningImage} alt="HiFix House Cleaning service" />
          <div>
            <Eyebrow>House Cleaning</Eyebrow>
            <h2>
              House
              <br />
              Cleaning
            </h2>
            <p className="lead small">
              Professional home cleaning services for a hygienic, comfortable, and fresh living space.
            </p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected house cleaning package.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {houseCleaningIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {houseCleaningNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const laundryIncluded = [
  "Professional Cloth Washing",
  "Ironing & Pressing Services",
  "Express Ironing",
  "Washing & Ironing Packages",
  "Dry Cleaning Services",
  "Saree Rolling & Garment Care",
  "Premium Fabric Handling",
  "Trained & Verified Laundry Professionals",
  "Hygienic Cleaning Process",
  "Convenient Scheduling",
];

const laundryNotIncluded = [
  "Garment Alteration & Stitching",
  "Fabric Repair Services",
  "Pickup & Delivery Outside Service Coverage",
  "Removal of Permanent Stains or Damage",
  "Luxury Garment Restoration",
  "Supply of Laundry Detergents or Accessories",
  "Emergency or Instant Laundry Services",
  "Services Outside the Confirmed Booking Scope",
];

function Laundry() {
  return (
    <>
      <PageHero
        eyebrow="Laundry Services"
        title="Laundry Services"
        text="Keep your clothes fresh, clean, and professionally cared for with HiFix Laundry Services. Our trained laundry professionals provide high-quality washing, ironing, dry cleaning, and garment care using modern techniques to ensure your clothes look their best while saving you valuable time."
        photo={laundryImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={laundryImage} alt="HiFix Laundry Services" />
          <div>
            <Eyebrow>Laundry Services</Eyebrow>
            <h2>Fresh clothes, professionally cared for.</h2>
            <p className="lead small">
              Convenient garment care from trained professionals, arranged around your schedule.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected laundry service package.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {laundryIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>What’s Not Included</h3>
              <ul>
                {laundryNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const plumbingIncluded = [
  "Leak Repair",
  "Tap and Pipe Installation",
  "Drainage and Sewage",
  "Tap Repair",
  "Tap Installation/Replacement",
  "Toilet Seat Cover Installation",
  "Flush Tank Repair",
  "Western Toilet Repair",
  "Professional Plumbers",
  "Quality Workmanship",
  "Basic Materials",
  "Safety Checks",
];

const plumbingNotIncluded = [
  "Replacement Parts",
  "Major Modifications",
  "Additional Repairs",
  "Emergency Charges",
  "Premium Materials",
  "Specialized Tools",
  "Transportation Costs",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function Plumbing() {
  return (
    <>
      <PageHero
        eyebrow="Plumbing Services"
        title="Plumbing Services"
        text="Professional plumbing services delivered by experienced and verified HiFix plumbers. From leak repairs and tap installations to drainage solutions and toilet maintenance, we ensure reliable, efficient, and long-lasting plumbing solutions for your home with skilled expertise and quality workmanship."
        photo={plumberImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={plumberImage} alt="HiFix Plumbing Services" />
          <div>
            <Eyebrow>Plumbing Services</Eyebrow>
            <h2>Reliable plumbing, handled by skilled professionals.</h2>
            <p className="lead small">
              From leak repairs and tap installations to drainage and toilet maintenance, get
              dependable help at home.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected plumbing service package.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {plumbingIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {plumbingNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const tutorIncluded = [
  "School Tutor",
  "BTech Subjects",
  "Spoken English Trainer",
  "Software Courses Java",
  "Software Courses Python",
  "Qualified Teachers",
  "Experienced Tutors",
  "Verified Professionals",
  "Personalized Guidance",
  "Flexible Scheduling",
  "Expert Teaching",
  "Quality Learning",
];

const tutorNotIncluded = [
  "Certification Fees",
  "Study Materials",
  "Transportation",
  "Special Equipment",
  "Online Platform Fees",
  "Examination Fees",
  "Course Books",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function Tutors() {
  return (
    <>
      <PageHero
        eyebrow="Tutor Services"
        title="Tutors"
        text="Achieve your learning goals with HiFix Tutors. We connect students and professionals with qualified, experienced, and verified tutors for academic subjects, engineering courses, spoken English, programming languages, and skill development. Learn confidently through personalized guidance, flexible scheduling, and expert teaching tailored to your needs."
        photo={tutorsImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={tutorsImage} alt="HiFix Tutors" />
          <div>
            <Eyebrow>Tutor Services</Eyebrow>
            <h2>Personalized learning, guided by experienced tutors.</h2>
            <p className="lead small">
              Find qualified tutors for academic subjects, engineering, spoken English, programming,
              and skill development.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected tutor service.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {tutorIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {tutorNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const taxiIncluded = [
  "Bike Taxi Services",
  "Auto Taxi Services",
  "Car Taxi Services",
  "Safe and Verified Drivers",
  "Real-time Tracking",
  "24/7 Availability",
  "City Rides",
  "Airport Transfers",
  "Daily Commute Support",
  "Well-maintained Vehicles",
  "Professional Service",
  "Reliable Transportation",
];

const taxiNotIncluded = [
  "Long-distance Travel",
  "Outstation Trips",
  "Luggage Transport",
  "Extra Waiting Charges",
  "Night Surcharge",
  "Toll Charges",
  "Parking Fees",
  "Fuel Cost",
  "Traffic Violation Fines",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function Taxi() {
  return (
    <>
      <PageHero
        eyebrow="Taxi Services"
        title="Taxi Services"
        text="Experience safe, comfortable, and reliable transportation with HiFix Taxi Services. Whether you need a quick ride across the city, an airport transfer, or transportation for your daily commute, our verified drivers and well-maintained vehicles ensure a smooth and hassle-free journey every time."
        photo={taxiImage}
        tall
      />
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>Review what’s included and excluded from your selected taxi service.</p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {taxiIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {taxiNotIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

const driverServicesIncluded = [
  "Personal Driver Services",
  "Long Trip Driver Services",
  "Rental Car Driver Services",
  "Professional & Verified Drivers",
  "Safe & Comfortable Travel",
  "Flexible Scheduling",
  "Airport Transfers",
  "Family Outings",
  "Business Trip Support",
  "Local & Outstation Travel",
  "Courteous & Experienced Staff",
  "Reliable Service",
];

const driverServicesNotIncluded = [
  "Vehicle Cost",
  "Fuel Cost",
  "Toll Charges",
  "Parking Fees",
  "Long Distance Travel Charges",
  "Vehicle Maintenance",
  "Insurance Coverage",
  "Traffic Violation Fines",
  "Driver Accommodation",
  "Food & Refreshments",
  "Services Outside the Confirmed Booking Scope",
  "Additional Tasks Not Included in the Selected Service Package",
];

function DriverServices() {
  return (
    <>
      <PageHero
        eyebrow="Driver Services"
        title="Driver Services"
        text="Professional driver services for your everyday travel, business trips, family outings, airport transfers, and long-distance journeys. HiFix connects you with experienced, verified, and courteous drivers who ensure a safe, comfortable, and reliable travel experience tailored to your schedule."
        photo={driversImage}
        tall
      />
      <section className="section">
        <div className="shell image-feature electrical-feature">
          <img src={driversImage} alt="HiFix professional driver services" />
          <div>
            <Eyebrow>Personal &amp; Travel Drivers</Eyebrow>
            <h2>Dependable drivers for the journeys that matter.</h2>
            <p className="lead small">
              Arrange experienced drivers for everyday travel, family outings, business trips,
              airport transfers and long-distance journeys.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Service Scope</Eyebrow>
              <h2>Know what’s covered.</h2>
            </div>
            <p>
              Review what’s included and excluded from your selected driver service package.
            </p>
          </div>
          <div className="values-grid electrical-scope">
            <article>
              <span>01</span>
              <h3>What’s Included</h3>
              <ul>
                {driverServicesIncluded.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Not Included</h3>
              <ul>
                {driverServicesNotIncluded.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

function Pharma() {
  return (
    <>
      <PageHero
        eyebrow="PHARMA & BIOTECH FACILITY CLEANING"
        title="Pharma & Biotech Facility Cleaning"
        text="Professional cleaning for pharmaceutical and biotechnology companies."
        photo={image.pharma}
        tall
      />
      <section className="facility-section">
        <div className="shell facility-grid">
          <div className="facility-image">
            <img src={image.pharma2} alt="Specialist cleanroom cleaning" />
            <div>
              <Icon name="shield" size={30} />
              <span>
                Quality & safety
                <br />
                focused operations
              </span>
            </div>
          </div>
          <div>
            <Eyebrow light>PHARMA &amp; BIOTECH FACILITY CLEANING</Eyebrow>
            <h2>
              Professional Facility Cleaning for Pharmaceutical &amp; Biotechnology Facilities
            </h2>
            <p className="lead">
              HiFix provides professional facility cleaning services for pharmaceutical and
              biotechnology companies, ensuring compliance with industry standards and maintaining
              sterile environments.
            </p>
          </div>
        </div>
      </section>
      <section className="section facility-projects-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Pharma &amp; Biotech Facility Cleaning</Eyebrow>
              <h2>Trusted by specialist facilities.</h2>
            </div>
            <p>
              HiFix provides cleaning support to pharmaceutical and biotechnology organizations.
            </p>
          </div>
          <div className="project-grid">
            <article className="project">
              <img src={image.lab} alt="Biotechnology facility cleaning" />
              <div className="project-caption">
                <span>Pharmaceutical &amp; biotech facility cleaning</span>
                <h3>Biological E. Limited (BE)</h3>
              </div>
            </article>
            <article className="project">
              <img src={image.pharma2} alt="Pharmaceutical facility cleaning" />
              <div className="project-caption">
                <span>Pharmaceutical facility cleaning</span>
                <h3>Dr. Reddy's Laboratories (DRL)</h3>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section procedure-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <Eyebrow>Our Procedure</Eyebrow>
              <h2>
                A disciplined approach
                <br />
                to every assignment.
              </h2>
            </div>
            <p>
              Site requirements guide the process, team composition, methods and project controls.
            </p>
          </div>
          <div className="procedure-grid">
            {[
              "Site assessment & scope",
              "Method and safety planning",
              "Team deployment",
              "Controlled execution",
              "Inspection & handover",
            ].map((x, i) => (
              <article key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{x}</h3>
                <p>
                  {
                    [
                      "Understand areas, surfaces, constraints and expected outcomes.",
                      "Define the appropriate procedure, access plan and safeguards.",
                      "Assign a professional team aligned to the project scope.",
                      "Complete work methodically with on-site coordination.",
                      "Review completed areas and close the assignment clearly.",
                    ][i]
                  }
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

type CaseStudy = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

const caseStudyContent: Omit<CaseStudy, "date">[] = [
  {
    id: 9,
    title: "Professional Cleaning Services at Trendset Allure, Kokapet, Hyderabad",
    excerpt:
      "HiFix delivered professional cleaning services at Trendset Allure, creating cleaner, fresher and better-maintained living spaces with systematic cleaning approach.",
    category: "Residential Community Cleaning",
    image: trendsetCleaningCaseImage,
  },
  {
    id: 8,
    title: "Specialized Pharmaceutical Water Tank Cleaning Purity & Compliance Restored in Vizag",
    excerpt:
      "A Vizag pharma facility faced rising microbial counts and audit risk. HiFix deployed pharma-grade protocols, delivered validation-ready documentation, and stabilized water quality.",
    category: "Industrial / Pharma",
    image: pharmaTankCaseImage,
  },
  {
    id: 7,
    title: "This 3 Crore Villa Was Unlivable After a Year of Neglect Made Home in 10 Hours",
    excerpt:
      "A vacant villa had construction dust, stains, and bird debris. A 5-member team deep-cleaned bathrooms, kitchen, and terrace, removing odors and making it move-in ready.",
    category: "Residential Deep Cleaning",
    image: villaCleaningCaseImage,
  },
  {
    id: 6,
    title: "A ₹50,000 Sofa Was Headed to the Dump. HiFix Saved It in 2.5 Hours.",
    excerpt:
      "Embedded stains, odors, and allergens made the sofa feel beyond repair. Hot water extraction + sanitization restored it to near-new condition and avoided replacement costs.",
    category: "Sofa / Mattress",
    image: sofaCleaningCaseImage,
  },
  {
    id: 5,
    title: "This Family Kept Replacing Their Water Pump The Real Culprit Was Underground",
    excerpt:
      "Repeated motor failures traced back to a sludge-filled sump. HiFix extracted sediment, pressure-washed biofilm, disinfected, and restored normal pump load.",
    category: "Water Systems",
    image: sumpTankCaseImage,
  },
  {
    id: 4,
    title: "The Hidden Danger in This Family's Overhead Tank Was Making Everyone Sick",
    excerpt:
      "Algae, sediment, and debris in the tank caused poor water quality. HiFix drained, pressure-washed, removed sediment, sanitized, and improved household health outcomes.",
    category: "Water Systems",
    image: waterTankCaseImage,
  },
  {
    id: 3,
    title: "Cooking Grease Vanished in 4 Hours Grandma Could Not Believe Her Eyes",
    excerpt:
      "Layered grease had darkened tiles and blocked chimney filters. Industrial degreasing and appliance restoration revealed original surfaces and improved air quality.",
    category: "Kitchen Cleaning",
    image: kitchenCleaningCaseImage,
  },
  {
    id: 2,
    title: "From Black Grout to Sparkling White Saved a Retired Couple from Retiling",
    excerpt:
      "Hard-water scale, moldy grout, and stains made bathrooms look beyond repair. Deep descaling and antifungal scrubbing restored shine no renovation needed.",
    category: "Washroom Cleaning",
    image: bathroomCleaningCaseImage,
  },
  {
    id: 1,
    title: "HiFix Transformed a Neglected 3BHK Back to Life in One Day",
    excerpt:
      "A busy family struggled with mold, grease, dust, and allergens. A full-day deep-clean covered bathrooms, kitchen, and living areas noticeable air-quality improvement.",
    category: "Residential Deep Cleaning",
    image: deepCleaningCaseImage,
  },
];

type CaseStudyStep = {
  title: string;
  duration: string;
  description: string;
};

type CaseStudyStory = {
  mainHeading: string;
  service: string;
  location: string;
  property: string;
  customer: string;
  duration: string;
  situation: string;
  problem: string;
  steps: CaseStudyStep[];
  results: string[];
  quote: string;
  quoteAuthor: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  safetyNote?: string;
};

const caseStudyStories: Record<number, CaseStudyStory> = {
  1: {
    mainHeading: "How HiFix Transformed a Neglected 3BHK in Hyderabad Back to Life in Just One Day",
    service: "Full House Deep Cleaning",
    location: "Kondapur, Hyderabad",
    property: "3BHK Apartment",
    customer: "Joint family with couple, two kids and in laws",
    duration: "One full day with 3 Experts",
    situation:
      "Ramaiah and his wife Sunitha had been living in their Kondapur flat for some time. Between managing kids, office work, cooking and taking care of in laws, regular cleaning kept happening but deep cleaning never really got done properly. The grout between bathroom tiles had gone dark. Kitchen exhaust area was sticky. Ceiling fans had thick dust layers that were now falling on the beds. The sofa looked dull and smelled musty. Their daughter had developed some allergies and the doctor casually mentioned that indoor dust and mites could be possible triggers.",
    problem:
      "When the HiFix team arrived and did a quick walkthrough, the issues were more than just surface dust. Bathroom tiles and grout had black and brown mold growth in corners and joints, especially behind the commode and below taps. The kitchen had grease buildup around chimney area, sticky film on top of fridge and cabinets, and heavy dust behind the refrigerator. Ceiling fans were carrying accumulated dust which was the prime source of airborne particles. Bedroom mattresses had visible dust mites and skin cell buildup with a faint musty smell. Windows and tracks had grime and insect residue packed into channels that had not been opened in months. The areas under the beds and sofa had not been cleaned in a very long time.",
    steps: [
      { title: "Bathroom Deep Cleaning", duration: "2 hours", description: "Tile and grout scrubbing using professional antifungal solution. Descaling of taps, showerheads and flush tanks. Toilet sanitization inside and outside including base and hidden areas. Exhaust fan cleaning and floor mopping with disinfectant." },
      { title: "Kitchen Degreasing", duration: "2 hours", description: "Degreasing of stove top, chimney filters and cabinet surfaces. Top of refrigerator and sides cleaned. Behind fridge area dusting and mopping." },
      { title: "Living Area Restoration", duration: "3 hours", description: "Ceiling fan blades cleaned without dust falling everywhere. Window tracks vacuumed. Under bed and under sofa areas vacuumed thoroughly." },
      { title: "Final Touches", duration: "1 hour", description: "Full floor mopping with disinfectant solution. Balcony and entrance area cleaned. Surfaces polished." },
    ],
    results: [
      "All mold and grout blackening removed from bathrooms",
      "Kitchen grease gone and cabinets looked nearly new",
      "Air quality inside the house improved noticeably",
      "Daughter's morning sneezing reduced significantly",
      "Zero mess left behind by the team",
    ],
    quote:
      "I have tried hiring individual maids for deep cleaning before. They do partial work and leave early. HiFix team stayed the full day, covered everything, and the house smelled different in a good way. My mother in law was impressed, which itself is an achievement.",
    quoteAuthor: "Sunitha R., Kondapur",
    beforeLabel: "Dusty, moldy and greasy surfaces throughout the home",
    afterLabel: "Spotless, fresh smelling and like new condition",
    beforeImage: deepCleaningBeforeImage,
    afterImage: deepCleaningAfterImage,
  },
  2: {
    mainHeading: "From Black Grout to Sparkling White: How HiFix Saved This Retired Couple 50000 Rupees in Renovation",
    service: "Washroom Deep Cleaning",
    location: "Miyapur, Hyderabad",
    property: "2BHK with two bathrooms",
    customer: "Retired couple Mr and Mrs Krishnamurthy",
    duration: "3 hours",
    situation:
      "Mr Krishnamurthy and his wife had been in their Miyapur apartment for a long time. Their bathrooms were used daily but had not seen a professional clean ever. A plumber had come recently to check a minor leak and casually said the tiles had gone so bad they might need replacement. The couple was retired on a fixed income. Retiling two bathrooms would have been a big expense. Their son who was visiting from Bengaluru suggested trying a professional cleaning first before spending on renovation. He found HiFix on the Play Store and booked same day service.",
    problem:
      "The technician found yellow and brown calcium deposits on all taps, showerheads and faucet bases from hard water buildup. Grout lines had turned completely black from mold, making tiles look dirty even when freshly wiped. The toilet seat and bowl had stubborn stains from mineral deposits that looked like permanent discoloration. The exhaust fan had not been cleaned since installation and the motor was straining. Walls near the shower area had damp related mold patches that had been painted over once before. Floor tiles had grime packed into the antiskid texture that normal mopping never cleans.",
    steps: [
      { title: "Descaling and Treatment", duration: "1.5 hours", description: "Applied professional descaling solution to all metal fittings. Grout cleaned using high pressure brush with antifungal treatment." },
      { title: "Deep Sanitization", duration: "1 hour", description: "Toilet bowl treated with enzyme based cleaner. Mold patches on walls treated and scrubbed." },
      { title: "Final Restoration", duration: "30 minutes", description: "Exhaust fan removed, cleaned and reinstalled. Full sanitization with hospital grade disinfectant." },
    ],
    results: [
      "Taps and showerheads had scale completely removed and shine restored",
      "Grout lines returned to near original colour",
      "No retiling needed and saved significant money",
      "Both bathrooms sanitized and fresh smelling",
    ],
    quote:
      "The plumber said the tiles are gone and we need to spend big money. The HiFix person came and spent three hours. My bathrooms look like they did when the flat was first handed over.",
    quoteAuthor: "Mr Krishnamurthy, Miyapur",
    beforeLabel: "Black mold, calcium deposits and musty smell throughout",
    afterLabel: "White grout, shining fixtures and fresh scent",
    beforeImage: bathroomCleaningBeforeImage,
    afterImage: bathroomCleaningAfterImage,
  },
  3: {
    mainHeading: "Cooking Grease Vanished in 4 Hours: Hyderabad Grandma Could Not Believe Her Eyes",
    service: "Kitchen Deep Cleaning",
    location: "Ameerpet, Hyderabad",
    property: "3BHK with large modular kitchen",
    customer: "Mrs Hemalatha, homemaker with extended family",
    duration: "4 hours",
    situation:
      "Hemalatha aunty as the neighbours call her cooks for a family of six every day. She makes full meals, tiffin and sometimes sweets for festivals. The kitchen sees heavy use from 6 AM to 9 PM. Over time, the kitchen was functional but the grease situation had gotten out of control. The tiles behind the stove were almost unrecognizable. The chimney was struggling. The area above the cabinets which nobody ever cleaned had a thick layer of sticky dust and grease mixture. Her daughter in law finally convinced her to try HiFix after reading customer reviews.",
    problem:
      "The backsplash tiles behind the stove had layered cooking grease mixed with dust, semi hardened and dark yellow brown in colour. Cabinet tops had a thick sticky layer of grease and dust that had never been cleaned since the modular kitchen was installed. Inside cabinets there were old food particles, insect droppings in corners and general grime. Chimney filters and baffle plates were completely blocked and running at maybe thirty percent efficiency. Stove drip trays and burner tops had carbonized food spills baked hard over time. The microwave interior had burnt food splatters on ceiling and walls and a foul smell when used.",
    steps: [
      { title: "Heavy Degreasing", duration: "2 hours", description: "Applied industrial degreaser to backsplash tiles. Tiles cleaned layer by layer until original pattern visible. Cabinet tops degreased and wiped down." },
      { title: "Appliance Restoration", duration: "1 hour", description: "Chimney fully disassembled and filters pressure cleaned. Microwave cleaned with steam based method." },
      { title: "Final Polish", duration: "1 hour", description: "All countertops sanitized. Floor mopped with degreasing solution." },
    ],
    results: [
      "Backsplash tiles restored and actual pattern visible",
      "Sticky grease layer completely removed from cabinets",
      "Chimney running at full power and kitchen air quality improved",
      "Microwave usable without smell",
      "Kitchen looked and smelled completely different",
    ],
    quote:
      "I have been cooking in this kitchen for a long time. I thought those tiles are just permanently dark. The boy from HiFix showed me the actual tile colour after cleaning. I did not know my tiles are white underneath.",
    quoteAuthor: "Hemalatha D., Ameerpet",
    beforeLabel: "Yellow brown grease everywhere and chimney not working",
    afterLabel: "White tiles visible, fresh smell and fully functional",
    beforeImage: kitchenCleaningBeforeImage,
    afterImage: kitchenCleaningAfterImage,
  },
  4: {
    mainHeading: "The Hidden Danger on This Family's Rooftop Was Making Everyone Sick Until HiFix Came",
    service: "Overhead Water Tank Cleaning",
    location: "Dilsukhnagar, Hyderabad",
    property: "Independent house with family of seven",
    customer: "Mr Venkateswara Rao",
    duration: "2.5 hours",
    situation:
      "Venkateswara Rao's family had been in their independent house for a long time. The overhead water tank had never been cleaned. The family had been dealing with mild stomach issues for a long time. When their three grandchildren had stomach trouble within a week, the doctor asked when was the last time the water tank was cleaned.",
    problem:
      "There was a thick dark sediment layer at the bottom with mineral deposits, rust particles and decomposed matter. Visible algae growth was on the inner walls, green brown patches that had been growing for a long time. A faint but distinct smell came out when the hatch was opened. Small particles were floating in the water that the family had assumed was just hard water minerals. The tank inlet filter was completely blocked with debris. The tank lid had gaps where insects and debris could enter.",
    steps: [
      { title: "Full Drain and Inspection", duration: "1 hour", description: "Complete tank drain down. High pressure wash of inner walls and floor." },
      { title: "Sediment Removal", duration: "1 hour", description: "Sediment vacuum removal. Second rinse cycle until runoff completely clear." },
      { title: "Sanitization", duration: "30 minutes", description: "Food safe disinfectant applied. Inlet filter cleaned and lid sealed properly." },
    ],
    results: [
      "Algae completely removed from walls",
      "No more particles in water",
      "Water quality noticeably clearer and odor free",
      "Stomach issues significantly reduced",
      "Family now has 3-6 months cleaning schedule",
    ],
    quote:
      "After the cleaning, the person from HiFix showed us photos of what came out of our tank. After the clean, the water looks completely different. No more stomach issues since then.",
    quoteAuthor: "Padmavathi, Dilsukhnagar",
    beforeLabel: "Green algae, black sediment and foul smell",
    afterLabel: "Clear water, clean walls and odor free",
    beforeImage: overheadTankBeforeImage,
    afterImage: overheadTankAfterImage,
  },
  5: {
    mainHeading: "This Family Kept Replacing Their Water Pump Every Year: The Real Culprit Was Underground",
    service: "Underground Sump Cleaning",
    location: "LB Nagar, Hyderabad",
    property: "G+2 independent house",
    customer: "Mr Narasimha Reddy",
    duration: "4 hours",
    situation:
      "For a long time, the submersible pump motor had been burning out repeatedly. A friend looked inside the sump and found the real problem. The sump was so full of sludge that the motor was working double time. The motor was not failing. It was being killed by the load.",
    problem:
      "Several inches of compacted sediment was at the bottom of the sump. Walls were covered with slime and biofilm with black and green patches through the entire depth. The submersible pump was partially buried in sediment. The sump had no visible cleaning date or maintenance history and was likely never cleaned since construction. A foul odour was noticeable when the access lid was opened.",
    steps: [
      { title: "Pump Removal", duration: "1 hour", description: "Pump temporarily removed. Water fully pumped out using industrial grade pump." },
      { title: "Sludge Extraction", duration: "2 hours", description: "Manual sludge removal using shovels and buckets. High pressure jet wash of walls and floor." },
      { title: "Disinfection and Reassembly", duration: "1 hour", description: "Disinfectant treatment applied. Pump reinstalled and inlet filter cleared." },
    ],
    results: [
      "Sump fully cleaned for first time",
      "Water pressure improved noticeably",
      "Pump running at normal load with no overheating",
      "No motor failure in many months",
      "3-6 months follow up cleaning scheduled",
    ],
    quote:
      "We spent money on motor repairs multiple times. One proper sump cleaning by HiFix and the problem is solved. I feel foolish we did not do this sooner.",
    quoteAuthor: "Mr Narasimha Reddy, LB Nagar",
    beforeLabel: "Thick sludge, buried pump and poor pressure",
    afterLabel: "Clean walls, efficient pump and strong flow",
    beforeImage: sumpBeforeImage,
    afterImage: sumpAfterImage,
  },
  6: {
    mainHeading: "A ₹50,000 Sofa Was Headed to the Dump. HiFix Saved It in 2.5 Hours.",
    service: "Sofa and Mattress Deep Cleaning",
    location: "Gachibowli, Hyderabad",
    property: "3BHK flat with four member family",
    customer: "Preethi and Karthik, working couple",
    duration: "2.5 hours",
    situation:
      "With two kids under eight, the sofa had seen better days. Juice spills, snack crumbs and pet hair had taken a toll. The fabric had stubborn stains and a persistent smell. They were looking at new sofas costing sixty thousand rupees. A colleague mentioned she had her sofa cleaned by HiFix and it looked like new. Preethi decided to try it before spending the money.",
    problem:
      "Multiple food and juice stains were on seat cushions, some months old and some recent. Arm rests were heavily soiled from daily use with grime embedded in fabric texture. A smell was noticeable especially in enclosed room, with food odour mixed with general mustiness. Two king size mattresses had visible stains from sweat and accidental spills. The mattresses had a mild dusty smell indicating dust mite presence from prolonged use.",
    steps: [
      { title: "Deep Vacuum", duration: "30 minutes", description: "Full dry vacuum of all surfaces to remove pet hair, crumbs and loose dirt." },
      { title: "Stain Treatment", duration: "1 hour", description: "Pre treatment spray applied to stains. Hot water extraction cleaning on all fabric surfaces." },
      { title: "UV Sanitization", duration: "1 hour", description: "UV vacuuming for mattresses. Deodorizing treatment applied." },
    ],
    results: [
      "All major stains removed completely",
      "Sofa smell completely eliminated",
      "Mattress dust mite allergens reduced",
      "Kids allergy symptoms improved",
      "Saved more than fifty thousand rupees on replacement",
    ],
    quote: "The sofa looks better than it did when we bought it. I don't know why we waited so long.",
    quoteAuthor: "Preethi K., Gachibowli",
    beforeLabel: "Stains, musty smell and pet hair everywhere",
    afterLabel: "Fresh, clean and like new condition",
    beforeImage: sofaBeforeImage,
    afterImage: sofaAfterImage,
  },
  7: {
    mainHeading: "This 3 Crore Villa Was Unlivable After a Year of Neglect: HiFix Made It Home in 10 Hours",
    service: "Full Villa Deep Cleaning for Move In",
    location: "Mokila, Hyderabad",
    property: "4BHK Villa of 3200 square feet",
    customer: "Srinivas Murthy, IT professional",
    duration: "10 hours with 5 member team",
    situation:
      "The villa had been vacant for over a year. Construction dust was everywhere, bird nests on the terrace, and the entire house had a closed musty smell. His wife was coming in five days. He needed the villa to look like a home, not a construction site.",
    problem:
      "Construction dust layer was on all surfaces including floors, window sills, inside cabinets, on bathroom fixtures and on ceiling fans. Hard water stains were on all bathroom tiles, glass panels, taps and shower fixtures from builder's water testing. There were bird entry points on terrace with nesting debris, droppings and feathers. All five bathrooms needed full descaling and sanitization as they were never properly cleaned post construction.",
    steps: [
      { title: "Team Deployment", duration: "2 hours", description: "Five technician team with dedicated task assignments for bathrooms, kitchen and common areas." },
      { title: "Deep Cleaning Phase", duration: "5 hours", description: "All bathrooms descaled. Kitchen degreased. Ceiling fans and windows deep cleaned." },
      { title: "Final Touch", duration: "3 hours", description: "Terrace cleared. Odour treatment throughout villa. Final walkthrough with customer." },
    ],
    results: [
      "All five bathrooms like new condition",
      "Kitchen ready for use immediately",
      "Musty smell completely gone",
      "Terrace cleaned and safe",
      "Family arrived to a home, not a construction site",
    ],
    quote: "My wife walked in and said it looks better than the model apartment. That is the best review I can give.",
    quoteAuthor: "Srinivas M., Mokila",
    beforeLabel: "Construction dust, musty smell and bird debris",
    afterLabel: "Spotless, fresh and move in ready",
    beforeImage: villaBeforeImage,
    afterImage: villaAfterImage,
  },
  8: {
    mainHeading: "Specialized Pharmaceutical Water Tank Cleaning: How HiFix Ensured Purity & Compliance in Vizag",
    service: "Pharma Water Tank Cleaning",
    location: "Vizag",
    property: "Pharmaceutical Manufacturing Facility",
    customer: "Quality Assurance Manager",
    duration: "6 hours with certified team",
    situation:
      "A pharmaceutical manufacturing facility in Vizag was facing repeated quality issues in their purified water system. Microbial counts were creeping up, and quarterly audit reports showed concerning trends. The 10,000-liter overhead water tank that fed the production line had been cleaned by an in-house team using standard methods but the results were inconsistent. Batch rejections had increased by 12% over six months, and the QC team could not pinpoint the source of contamination. The facility needed a specialized cleaning service that understood pharmaceutical standards, not just a regular tank wash. They found HiFix through an industry referral in Vizag.",
    problem:
      "When the HiFix Pharma-certified team inspected the tank, they found critical issues. Biofilm layers on inner walls were creating microbial contamination risk. Microscopic pitting on stainless steel surface was acting as bacterial harborage points. Sediment accumulation at the bottom was introducing particulate matter into the water. Gaskets showed signs of degradation with potential leak points. Dead legs in piping near the tank outlet created stagnant water zones. The standard cleaning protocols being used were not effective against biofilm. Worse, the cleaning agents previously used were not pharma-grade, leaving chemical residues. The facility had a scheduled GMP audit failed water quality tests would mean production shutdown.",
    steps: [
      { title: "Protocol Review & Risk Assessment", duration: "1 hour", description: "Reviewed existing SOPs. Identified critical control points. Prepared validation-ready documentation." },
      { title: "System Isolation & Draining", duration: "1 hour", description: "Isolated tank from production loop. Complete draining with proper waste disposal. Lockout and tagout compliance." },
      { title: "Specialized Pharma Cleaning", duration: "2 hours", description: "Applied cGMP-compliant cleaning agents. Mechanical agitation for biofilm removal. High-purity water rinse (3 cycles)." },
      { title: "Sanitization & Passivation", duration: "1.5 hours", description: "Hot water sanitization at 80°C+. Surface passivation treatment. Final rinse with WFI quality water." },
      { title: "Validation & Documentation", duration: "30 minutes", description: "ATP swab testing on all surfaces. Conductivity and pH verification. Complete batch record submission." },
    ],
    results: [
      "Biofilm completely eliminated verified by lab culture tests",
      "Microbial counts dropped to zero passed all acceptance criteria",
      "Chemical residue-free validated by conductivity testing",
      "Audit-ready documentation complete cleaning validation report",
      "Batch rejection rate returned to normal within 2 weeks",
      "GMP audit passed zero observations on water system",
      "Cleaning protocol established 3-month scheduled maintenance",
    ],
    safetyNote:
      "Water systems in pharmaceutical manufacturing require cGMP compliant cleaning agents, validated cleaning procedures, documented evidence of cleanliness, and trained personnel with pharma experience. HiFix Pharma Services specializes in Purified Water (PW) tanks, Water for Injection (WFI) systems, storage and distribution loops, Clean-in-Place (CIP) support, and audit-ready documentation. Recommended frequency: Every 3-6 months or as per your validation schedule.",
    quote:
      "HiFix understood our regulatory requirements from day one. They did not cut corners. The documentation they provided was so thorough that our auditor actually complimented it. This is not regular housekeeping this is pharmaceutical-grade cleaning. We are glad we found a reliable partner right here in Vizag.",
    quoteAuthor: "Customer",
    beforeLabel: "Biofilm, sediment and non-compliant water system",
    afterLabel: "GMP compliant, validated and audit-ready system",
    beforeImage: pharmaBeforeImage,
    afterImage: pharmaAfterImage,
  },
  9: {
    mainHeading: "Professional Cleaning Services at Trendset Allure, Kokapet: Creating Cleaner, Fresher & Better-Maintained Living Spaces",
    service: "Professional Deep Cleaning",
    location: "Kokapet, Hyderabad",
    property: "Residential Community",
    customer: "Trendset Allure Management",
    duration: "Systematic area-by-area cleaning",
    situation:
      "At Trendset Allure, Kokapet, HiFix delivered professional cleaning services focused on maintaining a clean, hygienic, and well-presented residential environment. Our team followed a systematic cleaning approach with attention to high-traffic areas, visible surfaces, corners, and detailed spaces that require professional care.",
    problem:
      "Maintaining cleanliness in a premium residential community requires consistency, attention to detail, and the right cleaning process. The key requirements included thorough removal of dust and accumulated dirt, detailed cleaning of residential and common areas, attention to corners, edges and hard-to-reach spaces, maintaining a fresh and presentable environment, and professional execution with consistent quality.",
    steps: [
      { title: "Site Assessment", duration: "Initial phase", description: "We assessed the property and identified the areas requiring focused cleaning." },
      { title: "Preparation", duration: "Pre-work phase", description: "The team organized the required manpower, equipment and cleaning materials before starting the work." },
      { title: "Professional Cleaning", duration: "Main phase", description: "Each identified area was cleaned systematically, with special attention to surfaces, floors, corners and high-use areas." },
      { title: "Detailing", duration: "Detail phase", description: "Our team focused on areas commonly missed during routine cleaning to achieve a more complete finish." },
      { title: "Quality Check", duration: "Final phase", description: "A final inspection was carried out to ensure the required cleaning standards were achieved." },
    ],
    results: [
      "Professional Execution - Systematic cleaning by trained HiFix professionals",
      "Detailed Cleaning - Focused attention on visible and hard-to-reach areas",
      "Hygienic Environment - Cleaning focused on maintaining a healthier living environment",
      "Quality-Focused Service - Work completed with attention to consistency and finishing",
    ],
    quote:
      "HiFix connects customers with verified, trained and reliable professionals for professional cleaning and home services. Our cleaning solutions are designed for homes, apartments, residential communities, commercial facilities and specialized facilities.",
    quoteAuthor: "HiFix Team",
    beforeLabel: "Dust, accumulated dirt and lack of attention to detailed spaces",
    afterLabel: "Cleaner, fresher and more presentable residential environment",
    beforeImage: trendsetBeforeImage,
    afterImage: trendsetCleaningCaseImage,
  },
};

function Cases() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const todayLabel = useMemo(
    () => new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }),
    [],
  );
  const caseStudies = useMemo(
    () => caseStudyContent.map((item) => ({ ...item, date: todayLabel })),
    [todayLabel],
  );
  const filteredCases = useMemo(() => {
    const search = query.trim().toLowerCase();
    return caseStudies.filter(
      (item) =>
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.excerpt.toLowerCase().includes(search) ||
        item.date.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search),
    );
  }, [caseStudies, query]);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredCases.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredCases.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const latest = filteredCases[0] || caseStudies[0];

  return (
    <>
      <PageHero
        eyebrow="Our Projects · Case Studies"
        title="Real customer stories. Real results."
        text="Explore HiFix cleaning projects across residential communities, homes, water systems and specialist facilities."
        photo={trendsetCleaningCaseImage}
      />
      <section className="section">
        <div className="shell">
          <div className="case-intro">
            <div>
              <Eyebrow>Latest Case Study</Eyebrow>
              <h2>{latest.title}</h2>
            </div>
            <div>
              <p>{latest.excerpt}</p>
              <button className="text-link" onClick={() => navigateToCaseStudy(latest.id)}>
                Read Case Study <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
          <div className="case-search-row">
            <div>
              <Eyebrow>All Case Studies</Eyebrow>
              <h2>Every project tells a story.</h2>
            </div>
            <label className="case-search">
              <span className="sr-only">Search case studies</span>
              <input
                type="search"
                placeholder="Search case studies"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
              />
            </label>
          </div>
          {pageItems.length ? (
            <div className="case-study-grid">
              {pageItems.map((item) => (
                <article className="case-study-card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span>{item.date} · {item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <button className="text-link" onClick={() => navigateToCaseStudy(item.id)}>
                      Read More <Icon name="arrow" size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="case-empty">
              <h3>No results found</h3>
              <button
                className="text-link"
                onClick={() => {
                  setQuery("");
                  setPage(1);
                }}
              >
                Reset search <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
          {totalPages > 1 && (
            <nav className="case-pager" aria-label="Case study pages">
              <button
                className="btn btn-outline"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn btn-outline"
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </section>
      <section className="case-cta">
        <div className="shell">
          <Eyebrow light>Ready for a transformation?</Eyebrow>
          <h2>Book any HiFix service and experience the difference.</h2>
          <div className="actions">
            <Button page="contact" secondary light>
              Make an Enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function CaseStudyDetail({ id }: { id: number | null }) {
  const study = caseStudyContent.find((item) => item.id === id);
  const story = id ? caseStudyStories[id] : undefined;
  if (!study || !story) {
    return (
      <>
        <PageHero
          eyebrow="Case Studies"
          title="Case study not found."
          text="This case study may have been moved or is no longer available."
          photo={image.pharma2}
        />
        <section className="section">
          <div className="shell">
            <Button page="cases">Back to Case Studies</Button>
          </div>
        </section>
      </>
    );
  }

  const relatedStudies = caseStudyContent.filter((item) => item.id !== id).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={story.service}
        title={story.mainHeading}
        text={study.excerpt}
        photo={study.image}
      />
      <section className="section case-story-section">
        <div className="shell">
          <Button page="cases">
            <Icon name="arrow" size={16} /> Back to Case Studies
          </Button>
          <div className="case-story-meta" aria-label="Case study details">
            {[story.service, story.location, story.property, story.duration].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="case-story-layout">
            <article className="case-story-content">
              <section className="case-story-block">
                <Eyebrow>The story</Eyebrow>
                <h2>About this project</h2>
                <p>{story.situation}</p>
                <p>{story.problem}</p>
              </section>
              <section className="case-story-block">
                <Eyebrow>Our approach</Eyebrow>
                <h2>How HiFix helped</h2>
                <div className="case-story-steps">
                  {story.steps.map((step, index) => (
                    <article className="case-story-step" key={step.title}>
                      <span className="case-story-step-number">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <div className="case-story-step-heading">
                          <h3>{step.title}</h3>
                          <span>{step.duration}</span>
                        </div>
                        <p>{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <section className="case-story-block">
                <Eyebrow>The transformation</Eyebrow>
                <h2>Before &amp; after</h2>
                <div className="case-story-comparison">
                  <figure>
                    <img src={story.beforeImage} alt={`Before: ${story.beforeLabel}`} loading="lazy" />
                    <figcaption><span>Before</span>{story.beforeLabel}</figcaption>
                  </figure>
                  <figure>
                    <img src={story.afterImage} alt={`After: ${story.afterLabel}`} loading="lazy" />
                    <figcaption><span>After</span>{story.afterLabel}</figcaption>
                  </figure>
                </div>
              </section>
              <section className="case-story-block">
                <Eyebrow>The outcome</Eyebrow>
                <h2>Results that made a difference</h2>
                <ul className="case-story-results">
                  {story.results.map((result) => (
                    <li key={result}><Icon name="check" size={17} />{result}</li>
                  ))}
                </ul>
              </section>
              {story.safetyNote && (
                <aside className="case-story-safety">
                  <h3>Specialized facility cleaning</h3>
                  <p>{story.safetyNote}</p>
                </aside>
              )}
              <blockquote className="case-story-quote">
                <p>“{story.quote}”</p>
                <cite>{story.quoteAuthor}</cite>
              </blockquote>
            </article>
            <aside className="case-story-aside">
              <span className="case-story-aside-label">Project snapshot</span>
              <h3>{story.customer}</h3>
              <dl>
                <div><dt>Service</dt><dd>{story.service}</dd></div>
                <div><dt>Location</dt><dd>{story.location}</dd></div>
                <div><dt>Property</dt><dd>{story.property}</dd></div>
                <div><dt>Duration</dt><dd>{story.duration}</dd></div>
              </dl>
              <Button page="contact">Book a Service</Button>
            </aside>
          </div>
        </div>
      </section>
      <section className="section case-related-section">
        <div className="shell">
          <div className="section-heading">
            <Eyebrow>More from HiFix</Eyebrow>
            <h2>Explore more case studies</h2>
          </div>
          <div className="case-study-grid">
            {relatedStudies.map((item) => (
              <article className="case-study-card" key={item.id}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <button className="text-link" onClick={() => navigateToCaseStudy(item.id)}>
                    Read More <Icon name="arrow" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <Button page="cases">View all case studies</Button>
        </div>
      </section>
      <Cta />
    </>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    requirement: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1c3fbefd-d140-4e44-ad9f-6a1e5a474d2c",
          subject: "New HiFix Service Enquiry",
          from_name: "HiFix Website",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Web3Forms returned ${response.status}`);
      }

      const result: { success?: boolean; message?: string } = await response.json();
      if (result.success) {
        setMessage("Thank you! Your enquiry has been submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          requirement: "",
        });
      } else {
        setMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Service enquiry submission failed:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact HiFix"
        title="Let’s make service simpler."
        text="Tell us what you need and the HiFix team will help direct your enquiry."
        photo={image.kitchen}
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2>Start your service enquiry.</h2>
            <p className="lead small">
              Whether it’s for your home, a journey or a specialist facility, we’re ready to
              understand your requirement.
            </p>
            <div className="contact-items">
              <div>
                <span>
                  <Icon name="phone" />
                </span>
                <p>
                  <small>Phone</small>
                  <strong>
                    <a href="tel:+919000877499">+91 90008 77499</a>
                  </strong>
                </p>
              </div>
              <div>
                <span>
                  <Icon name="mail" />
                </span>
                <p>
                  <small>Email</small>
                  <strong>
                    <a href="mailto:prudvi.nayak@hifix.in">prudvi.nayak@hifix.in</a>
                  </strong>
                </p>
              </div>
              <div>
                <span>
                  <Icon name="pin" />
                </span>
                <p>
                  <small>Business location</small>
                  <strong>#8-80/18NP, RAMIDI MALLA REDDY NAGAR, HYDERABAD, INDIA</strong>
                </p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-head">
              <span>Service Enquiry</span>
              <p>Fields marked * are required</p>
            </div>
            <label>
              Full name *
              <input
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
            </label>
            <div className="form-row">
              <label>
                Phone number *
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9+() -]{7,20}"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>
            </div>
            <label>
              Service required *
              <select
                name="service"
                required
                value={formData.service}
                onChange={(event) => updateField("service", event.target.value)}
              >
                <option value="" disabled>
                  Select a service division
                </option>
                <option>Facility Deep Cleaning</option>
                <option>Home Cleaning</option>
                <option>Taxi Services</option>
              </select>
            </label>
            <label>
              Tell us about your requirement
              <textarea
                name="requirement"
                rows={4}
                placeholder="Share a few details..."
                value={formData.requirement}
                onChange={(event) => updateField("requirement", event.target.value)}
              />
            </label>
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
              {!loading && <Icon name="arrow" size={18} />}
            </button>
            {message && (
              <p className="form-message" role="status" aria-live="polite">
                {message}
              </p>
            )}
          </form>
        </div>
      </section>
      <section className="map-placeholder">
        <div>
          <Icon name="pin" size={32} />
          <strong>HiFix Innovatives</strong>
          <span>#8-80/18NP, RAMIDI MALLA REDDY NAGAR, HYDERABAD, INDIA</span>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>HIFIX - We Connect, You Relax</p>
          <h4>Follow Us</h4>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/hifix-innovatives-b7b195360/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SocialIcon platform="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/hifix_innovativeS/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SocialIcon platform="instagram" />
            </a>
            <a
              href="https://www.youtube.com/@HiFix-Innovatives"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <SocialIcon platform="youtube" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575024494757&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon platform="facebook" />
            </a>
            <a
              href="https://twitter.com/HIFIX_IN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <SocialIcon platform="x" />
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <button onClick={() => navigate("about")}>About Us</button>
          <button onClick={() => navigate("services")}>Our Services</button>
          <button onClick={() => navigate("why")}>Why HiFix</button>
          <button onClick={() => navigate("how")}>How It Works</button>
          <button onClick={() => navigate("faqs")}>FAQs</button>
          <button onClick={() => navigate("cases")}>Case Studies</button>
          <button onClick={() => navigate("contact")}>Contact Us</button>
        </div>
        <div>
          <h4>Services</h4>
          <button onClick={() => navigate("pharma")}>Facility Deep Cleaning</button>
          <button onClick={() => navigate("cleaning")}>Home Cleaning</button>
          <button onClick={() => navigate("taxi")}>Taxi Services</button>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+919000877499">+91 90008 77499</a>
          <a href="mailto:prudvi.nayak@hifix.in">prudvi.nayak@hifix.in</a>
          <span>#8-80/18NP, RAMIDI MALLA REDDY NAGAR, HYDERABAD, INDIA</span>
          <button className="footer-enquire" onClick={() => navigate("contact")}>
            Make an enquiry <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} HiFix Innovatives. All rights reserved.</span>
        <span>Professional services. Thoughtfully delivered.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const caseStudyIdFromPath = () => {
    const match = window.location.pathname.match(/^\/case-study\/(\d+)$/);
    return match ? Number(match[1]) : null;
  };
  const pageFromPath = () => {
    if (caseStudyIdFromPath() !== null) return "caseDetail";
    const matchedPage = Object.entries(paths).find(
      ([, path]) => path === window.location.pathname,
    )?.[0] as Page | undefined;
    return matchedPage && !unavailableServices.has(matchedPage) ? matchedPage : "home";
  };
  const [page, setPage] = useState<Page>(pageFromPath());
  const [caseStudyId, setCaseStudyId] = useState<number | null>(caseStudyIdFromPath());
  navigate = (next: Page) => {
    window.history.pushState({}, "", paths[next]);
    setCaseStudyId(null);
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  navigateToCaseStudy = (id: number) => {
    window.history.pushState({}, "", `/case-study/${id}`);
    setCaseStudyId(id);
    setPage("caseDetail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    document.title = "HiFix | Facility, Home Cleaning & Taxi";
    document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]').forEach((icon) => {
      icon.href = hifixLogo;
      icon.type = "image/png";
    });
    const pop = () => {
      setCaseStudyId(caseStudyIdFromPath());
      setPage(pageFromPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  const pages: Record<Page, React.ReactNode> = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    lifestyle: <Lifestyle />,
    dailyHelpers: <DailyHelpers />,
    cooking: <CookingCleaning />,
    care: <ChildAdultCare />,
    decor: <DecorServices />,
    drivers: <DriverServices />,
    electrical: <Electrical />,
    beauty: <Beauty />,
    mensSalon: <MensSalon />,
    nursing: <Nursing />,
    pestControl: <PestControl />,
    petCare: <PetCare />,
    playZone: <PlayZone />,
    plumbing: <Plumbing />,
    tutors: <Tutors />,
    cleaning: <Cleaning />,
    laundry: <Laundry />,
    taxi: <Taxi />,
    pharma: <Pharma />,
    cases: <Cases />,
    contact: <Contact />,
    why: <WhyHiFix />,
    how: <HowItWorks />,
    faqs: <Faqs />,
    caseDetail: <CaseStudyDetail id={caseStudyId} />,
  };
  return (
    <div>
      <Header page={page} />
      <main>{pages[page]}</main>
      <Footer />
    </div>
  );
}
