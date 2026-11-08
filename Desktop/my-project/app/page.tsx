import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <nav className="site-header">
        <Link href="/" className="brand">
          <Image
            src="/images/Logo.gif"
            alt="John Franklin R. Saludes"
            width={105}
            height={48}
            unoptimized
            priority
          />
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/activities">Activities</Link>
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
              sizes="(max-width: 768px) 65vw, 460px"
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
            src="/images/Logo.gif"
            alt="John Franklin R. Saludes"
            width={105}
            height={48}
            unoptimized
          />
        </Link>

        <p>© 2026 John Franklin R. Saludes. All rights reserved.</p>

        <Link href="#top">BACK TO TOP ↑</Link>
      </footer>
    </main>
  );
}