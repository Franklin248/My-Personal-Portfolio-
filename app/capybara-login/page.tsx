
import Link from "next/link";
import Image from "next/image";

const CAPYBARA_URL = "https://log-in-authentication.vercel.app";

const technologies = [
  "Next.js",
  "TypeScript",
  "NestJS",
  "MySQL",
  "Git & GitHub",
  "Vercel & Render",
];

const features = [
  {
    number: "01",
    title: "User Registration",
    description:
      "New users can create their own accounts by providing the required personal information. The registration feature allows users to become part of the Capybara Login Authentication system.",
    image: "/images/Register.png",
    imageAlt: "Capybara registration page",
    tag: "ACCOUNT CREATION",
  },
  {
    number: "02",
    title: "User Login",
    description:
      "Registered users can securely access their accounts using their credentials. The login interface provides a straightforward authentication experience.",
    image: "/images/Login.png",
    imageAlt: "Capybara login page",
    tag: "AUTHENTICATION",
  },
  {
    number: "03",
    title: "User Dashboard",
    description:
      "After successful authentication, users can access the dashboard, where identity information from registered users is displayed and organized.",
    image: "/images/Dashboard.png",
    imageAlt: "Capybara user dashboard",
    tag: "USER MANAGEMENT",
  },
];

const capyScreenshots = [
  {
    image: "/images/Capy1.png",
    alt: "Capy interactive character dialogue example one",
    title: "A Friendly Companion",
    description:
      "Capy welcomes users with friendly and entertaining messages.",
  },
  {
    image: "/images/Capy2.png",
    alt: "Capy interactive character dialogue example two",
    title: "Contextual Responses",
    description:
      "Capy's messages change depending on the information users enter.",
  },
  {
    image: "/images/Capy3.png",
    alt: "Capy interactive character dialogue example three",
    title: "A Little Personality",
    description:
      "Different dialogues make the authentication experience more engaging.",
  },
];

export default function CapybaraLoginPage() {
  return (
    <main className="site-shell capybara-showcase" id="top">
      <nav className="site-nav">
        <Link href="/" className="site-logo">
          <Image
            src="/favicon.ico"
            alt="Portfolio logo"
            width={42}
            height={42}
          />
          <span>FRANKLIN.</span>
        </Link>

        <div className="site-nav-links">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#activities">Activities</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <Link href={CAPYBARA_URL} target="_blank" className="nav-cta">
          Visit Project ↗
        </Link>
      </nav>

      <section className="capybara-showcase-hero">
        <div className="showcase-hero-content">
          <p className="eyebrow">
            FEATURED PROJECT / FULL-STACK DEVELOPMENT
          </p>

          <h1>
            Capybara Login
            <br />
            <span>Authentication.</span>
          </h1>

          <p className="hero-description">
            A full-stack authentication project designed to make account
            registration and login more interactive through a friendly
            capybara companion named Capy.
          </p>

          <div className="hero-actions">
            <Link
              href={CAPYBARA_URL}
              target="_blank"
              className="primary-button"
            >
              Explore Live Project ↗
            </Link>

            <a href="#project-overview" className="secondary-button">
              Discover the Project ↓
            </a>
          </div>

          <div className="hero-project-meta">
            <div>
              <span>PROJECT TYPE</span>
              <strong>Full-Stack Web Application</strong>
            </div>
            <div>
              <span>MAIN FOCUS</span>
              <strong>Authentication & User Experience</strong>
            </div>
          </div>
        </div>

        <div className="showcase-hero-visual">
          <div className="hero-image-card">
            <Image
              src="/favicon.ico"
              alt="Capybara project mascot logo"
              width={180}
              height={180}
              priority
            />
            <p>Meet Capy.</p>
            <span>Your friendly authentication companion.</span>
          </div>
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
        </div>
      </section>

      <section className="project-identity" id="project-overview">
        <div className="section-heading">
          <p className="eyebrow">01 / PROJECT OVERVIEW</p>
          <h2>A simple login system with a little personality.</h2>
        </div>

        <div className="project-overview-content">
          <p>
            Capybara Login Authentication is a full-stack web application
            that provides user registration, login, and a dashboard for
            displaying registered users' information.
          </p>

          <p>
            What makes the project different is Capy, an interactive
            capybara character that follows the user's cursor and responds
            with different messages. With 90 unique dialogues and
            context-sensitive interactions, the project adds personality
            to an otherwise ordinary authentication experience.
          </p>
        </div>
      </section>

      <section className="capybara-feature-section">
        <div className="section-heading">
          <p className="eyebrow">02 / CORE FUNCTIONALITIES</p>
          <h2>Built around the essentials.</h2>
          <p>
            The application combines account management with an
            approachable and interactive user interface.
          </p>
        </div>

        <div className="capybara-feature-showcase">
          {features.map((feature, index) => (
            <article
              className={`capybara-feature-showcase-item ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
              key={feature.number}
            >
              <div className="feature-showcase-image">
                <div className="feature-image-label">
                  SCREENSHOT / {feature.number}
                </div>
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={1200}
                  height={750}
                  className="feature-screenshot"
                />
              </div>

              <div className="feature-showcase-content">
                <span className="feature-showcase-tag">
                  {feature.tag}
                </span>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capybara-capy-showcase">
        <div className="capybara-capy-header">
          <p className="eyebrow">03 / MEET THE MASCOT</p>
          <h2>More than just a login screen.</h2>
          <p>
            Meet Capy, the interactive companion that brings a little
            character to the authentication experience.
          </p>
        </div>

        <div className="capybara-capy-details">
          <article className="capy-detail">
            <span className="capy-detail-number">90</span>
            <h3>Unique Dialogues</h3>
            <p>
              Capy has 90 different messages, giving users a variety of
              friendly and entertaining interactions.
            </p>
          </article>

          <article className="capy-detail">
            <span className="capy-detail-number">01</span>
            <h3>Cursor Following</h3>
            <p>
              Capy follows the user's cursor, making the character feel
              more present and interactive throughout the experience.
            </p>
          </article>

          <article className="capy-detail">
            <span className="capy-detail-number">∞</span>
            <h3>Contextual Messages</h3>
            <p>
              Capy's responses can change depending on what users type
              into the input fields.
            </p>
          </article>
        </div>

        <div className="capybara-dialogue-heading">
          <span>INTERACTION PREVIEW</span>
          <h3>A few moments with Capy.</h3>
        </div>

        <div className="capybara-dialogue-gallery">
          {capyScreenshots.map((item, index) => (
            <article className="capy-dialogue-card" key={item.image}>
              <div className="capybara-dialogue-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={700}
                />
              </div>

              <div className="capy-dialogue-caption">
                <span>0{index + 1}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="capybara-capy-footer">
          <p>
            Small interactions can make a big difference in how users
            experience an application.
          </p>
        </div>
      </section>

      <section className="capybara-recovery-section">
        <div className="section-heading">
          <p className="eyebrow">04 / IN DEVELOPMENT</p>
          <h2>Still growing, still improving.</h2>
        </div>

        <div className="capybara-recovery-note">
          <div className="recovery-note-symbol">↗</div>
          <div>
            <span className="recovery-status">
              CURRENTLY UNDER DEVELOPMENT
            </span>
            <h3>Password Recovery</h3>
            <p>
              The password recovery functionality is currently being
              developed. This feature is planned to help users regain
              access to their accounts when they forget their passwords.
            </p>
          </div>
        </div>
      </section>

      <section className="capybara-technology-section">
        <div className="section-heading">
          <p className="eyebrow">05 / TECHNOLOGY STACK</p>
          <h2>The tools behind the project.</h2>
          <p>
            Technologies used to build, manage, and deploy the
            authentication application.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((technology, index) => (
            <div className="technology-item" key={technology}>
              <span>0{index + 1}</span>
              <strong>{technology}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="capybara-project-cta">
        <p className="eyebrow">HAVE A LOOK</p>
        <h2>Curious about Capy?</h2>
        <p>
          Experience the authentication application and meet its
          interactive capybara companion.
        </p>

        <Link
          href={CAPYBARA_URL}
          target="_blank"
          className="primary-button"
        >
          Visit Capybara Login ↗
        </Link>
      </section>

      <footer className="site-footer">
        <Link href="/" className="footer-home-link">
          ← Back to Portfolio
        </Link>

        <p>Designed & developed by Franklin.</p>

        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
