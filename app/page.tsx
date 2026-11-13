
import Link from "next/link";
import Image from "next/image";

const CAPYBARA_URL = "https://log-in-authentication.vercel.app";

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <nav className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/favicon.ico"
            alt="Capybara Logo"
            width={55}
            height={55}
            unoptimized
            priority
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

      <section className="hero">
        <div className="hero-stage">
          <h1 className="hero-name">
            JOHN FRANKLIN
            <br />
            R. SALUDES
          </h1>

          <div className="portrait-placeholder">
            <Image
              src="/images/franklin.png"
              alt="John Franklin R. Saludes"
              fill
              priority
              className="portrait-image"
              sizes="(max-width: 768px) 75vw, 460px"
            />
          </div>

          <div className="hero-caption">
            <span>PORTFOLIO / 2026</span>
            <span>BS COMPUTER SCIENCE STUDENT</span>
          </div>
        </div>

        <div className="introduction">
          <div>
            <p className="eyebrow">HELLO, I'M FRANKLIN</p>
            <h2>
              Creating ideas.
              <br />
              Building the future.
            </h2>
          </div>

          <div>
            <p>
              I am John Franklin R. Saludes, a Bachelor of Science in
              Computer Science student with an interest in technology,
              programming, and creative problem-solving.
            </p>
            <p>
              This portfolio is a collection of my journey, experiences,
              skills, and the things I continue to learn along the way.
            </p>
            <Link href="/about" className="text-link">
              MORE ABOUT ME ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-project">
        <div className="featured-project-heading">
          <div>
            <p className="eyebrow">FEATURED PROJECT / 01</p>
            <h2>Something I built.</h2>
          </div>
          <span>DESIGN & DEVELOPMENT</span>
        </div>

        <div className="featured-project-card">
          <div className="featured-project-visual">
            <div className="featured-project-window">
              <div className="preview-window-top">
                <span />
                <span />
                <span />
                <small>CAPYBARA LOGIN AUTHENTICATOR</small>
              </div>

              <div className="preview-window-content">
                <div className="preview-logo">
                  <Image
                    src="/favicon.ico"
                    alt="Capybara Logo"
                    width={42}
                    height={42}
                    unoptimized
                  />
                </div>
                <p>WELCOME TO THE CAPY-CLUB!</p>
                <h3>Hap-py to see you!</h3>
                <div className="preview-input">Email address</div>
                <div className="preview-input">Password</div>
                <div className="preview-button">SIGN IN</div>
                <small className="preview-caption">
                  A little security, a lot of capybara.
                </small>
              </div>
            </div>
          </div>

          <div className="featured-project-info">
            <p className="eyebrow">FULL-STACK WEB APPLICATION</p>
            <h3>Capybara Login Authenticator</h3>
            <p>
              A full-stack authentication website featuring account
              registration, login, password recovery, and a personalized
              dashboard. Designed with a warm capybara-inspired identity
              and a clean, responsive interface.
            </p>

            <div className="project-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>NestJS</span>
              <span>MySQL</span>
              <span>Authentication</span>
            </div>

            <div className="featured-project-actions">
              <Link href="/capybara-login" className="text-link">
                EXPLORE THE PROJECT ↗
              </Link>
              <a
                href={CAPYBARA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                VISIT LIVE WEBSITE ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>Explore my world.</h2>
          </div>
          <span>01 — 03</span>
        </div>

        <div className="explore-grid">
          <Link href="/education" className="explore-card">
            <span className="card-number">01 / EDUCATION</span>
            <h3>My Education</h3>
            <p>My academic background and learning journey.</p>
            <span className="card-arrow">↗</span>
          </Link>

          <Link href="/activities" className="explore-card">
            <span className="card-number">02 / EXPERIENCE</span>
            <h3>My Activities</h3>
            <p>Projects, activities, and experiences that shaped me.</p>
            <span className="card-arrow">↗</span>
          </Link>

          <Link href="/contact" className="explore-card">
            <span className="card-number">03 / CONNECT</span>
            <h3>Get in Touch</h3>
            <p>Have something in mind? Let's connect.</p>
            <span className="card-arrow">↗</span>
          </Link>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Tools & technologies.</h2>
          </div>
          <span>MY CURRENT SKILLS</span>
        </div>

        <div className="skills-grid">
          {[
            "HTML & CSS",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "NestJS",
            "MySQL",
            "Git & GitHub",
            "Postman",
          ].map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">THANK YOU FOR VISITING</p>
        <h2>
          The journey
          <br />
          is just beginning.
        </h2>
        <Link href="/contact" className="text-link">
          LET'S CONNECT ↗
        </Link>
      </section>

      <footer className="site-footer">
        <Link href="/" className="brand">
          <Image
            src="/favicon.ico"
            alt="Capybara Logo"
            width={45}
            height={45}
            unoptimized
          />
        </Link>

        <p>© 2026 John Franklin R. Saludes. All rights reserved.</p>

        <Link href="#top">BACK TO TOP ↑</Link>
      </footer>
    </main>
  );
}
