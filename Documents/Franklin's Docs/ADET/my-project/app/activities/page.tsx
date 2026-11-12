
import Link from "next/link";
import Image from "next/image";

const CAPYBARA_URL = "https://log-in-authentication.vercel.app";

export default function Activities() {
  return (
    <main id="top" className="site-shell inner-page">
      <nav className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/images/Logo.gif"
            alt="Franklin Saludes"
            width={180}
            height={80}
            unoptimized
          />
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/capybara-login">Capybara Project</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="page-hero">
        <p className="eyebrow">PROJECTS & EXPERIENCES</p>
        <h1>
          Ideas into
          <br />
          reality.
        </h1>
        <div className="page-hero-bottom">
          <span>ACTIVITIES / 04</span>
          <span>MY WORK & EXPERIENCES</span>
        </div>
      </section>

      <section className="activities-intro">
        <p className="eyebrow">A COLLECTION OF MY WORK</p>
        <h2>
          Learning by
          <br />
          doing.
        </h2>
        <p>
          Every project is an opportunity to experiment, make mistakes,
          discover solutions, and improve my skills. Here are some of the
          things I have worked on throughout my learning journey.
        </p>
      </section>

      <section className="project-list">
        <article className="project-card">
          <div className="project-image project-image-one">
            <span>01</span>
            <p>WEB DEVELOPMENT</p>
          </div>

          <div className="project-info">
            <p className="eyebrow">PERSONAL PROJECT</p>
            <h2>Personal Portfolio Website</h2>
            <p>
              A personal website designed to introduce who I am, present
              my academic background, and showcase my projects and skills.
              Built with a focus on clean design, responsive layouts,
              and a consistent visual identity.
            </p>
            <div className="project-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>
          </div>
        </article>

        <article className="project-card reverse">
          <div className="project-image project-image-two">
            <span>02</span>
            <p>BACKEND DEVELOPMENT</p>
          </div>

          <div className="project-info">
            <p className="eyebrow">ACADEMIC PROJECT</p>
            <h2>REST API Development</h2>
            <p>
              Developed a backend API using NestJS with routes for managing
              users, categories, and products. Worked with database
              integration, HTTP requests, and API testing using Postman.
            </p>
            <div className="project-tags">
              <span>NestJS</span>
              <span>MySQL</span>
              <span>Postman</span>
              <span>REST API</span>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-image project-image-three">
            <span>03</span>
            <p>DATABASE MANAGEMENT</p>
          </div>

          <div className="project-info">
            <p className="eyebrow">PROGRAMMING EXERCISES</p>
            <h2>SQL & Database Queries</h2>
            <p>
              Practiced writing SQL queries to retrieve, filter, and organize
              information from relational databases. Explored conditions,
              sorting, functions, and data retrieval techniques.
            </p>
            <div className="project-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>Database</span>
            </div>
          </div>
        </article>

        <article className="project-card reverse capybara-activity-card">
          <div className="project-image capybara-project-image">
            <div className="capybara-activity-logo">
              <span>YOUR LOGO</span>
              <small>LOGO PLACEHOLDER</small>
            </div>
            <span>04</span>
            <p>FULL-STACK DEVELOPMENT</p>
          </div>

          <div className="project-info">
            <p className="eyebrow">PERSONAL FULL-STACK PROJECT</p>
            <h2>Capybara Login Authenticator</h2>
            <p>
              Designed and developed a full-stack authentication website
              featuring user registration, login, password recovery,
              and a personalized dashboard. The application combines
              a Next.js frontend with a NestJS backend and MySQL database,
              wrapped in a responsive capybara-inspired interface.
            </p>

            <div className="project-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>NestJS</span>
              <span>MySQL</span>
              <span>JWT</span>
            </div>

            <div className="project-actions">
              <Link href="/capybara-login" className="text-link">
                VIEW PROJECT DETAILS ↗
              </Link>
              <a
                href={CAPYBARA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                OPEN LIVE WEBSITE ↗
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="activities-note">
        <p className="eyebrow">STILL IN PROGRESS</p>
        <h2>
          Not the final version
          <br />
          of my journey.
        </h2>
        <p>
          I am continuously learning and looking forward to building
          more projects, exploring new technologies, and turning
          future ideas into something meaningful.
        </p>
      </section>

      <section className="page-bottom">
        <div>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>
            Let's create
            <br />
            something.
          </h2>
        </div>
        <Link href="/contact" className="text-link">
          GET IN TOUCH ↗
        </Link>
      </section>

      <footer className="site-footer">
        <Link href="/" className="brand">
          <Image
            src="/images/Logo.gif"
            alt="Franklin Saludes"
            width={180}
            height={80}
            unoptimized
          />
        </Link>
        <p>© 2026 John Franklin R. Saludes. All rights reserved.</p>
        <Link href="#top">BACK TO TOP ↑</Link>
      </footer>
    </main>
  );
}
