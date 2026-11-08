
import Link from "next/link";
import Image from "next/image";

export default function Education() {
  return (
    <main id="top" className="site-shell inner-page">
      <nav className="site-header">
        <Link href="/" className="brand">
          <Image src="/images/Logo.gif" alt="Franklin Saludes" width={180} height={80} unoptimized />
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="page-hero">
        <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
        <h1>Learning today.<br />Building tomorrow.</h1>
        <div className="page-hero-bottom">
          <span>EDUCATION / 02</span>
          <span>MY LEARNING JOURNEY</span>
        </div>
      </section>

      <section className="education-intro">
        <p className="eyebrow">WHERE MY JOURNEY CONTINUES</p>
        <h2>Knowledge is the<br />foundation of growth.</h2>
        <p>
          My academic journey allows me to explore different areas of
          technology, develop problem-solving skills, and turn theoretical
          knowledge into practical experience.
        </p>
      </section>

      <section className="education-timeline">
        <div className="timeline-heading">
          <p className="eyebrow">ACADEMIC JOURNEY</p>
          <h2>My education.</h2>
        </div>

        <div className="timeline-item">
          <span className="timeline-number">01</span>
          <div>
            <span className="timeline-label">CURRENT STUDIES</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>
              Currently pursuing a degree in Computer Science, developing
              knowledge in programming, software development, databases,
              and other areas of computing.
            </p>
            <span className="timeline-status">BSCS STUDENT</span>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-number">02</span>
          <div>
            <span className="timeline-label">CONTINUOUS LEARNING</span>
            <h3>Beyond the Classroom</h3>
            <p>
              Exploring technologies and applying what I learn through
              personal projects, programming exercises, experimentation,
              and independent study.
            </p>
            <span className="timeline-status">ALWAYS LEARNING</span>
          </div>
        </div>
      </section>

      <section className="education-focus">
        <p className="eyebrow">AREAS OF INTEREST</p>
        <h2>What I am learning.</h2>
        <div className="focus-grid">
          <div className="focus-item">
            <span>01</span>
            <h3>Programming</h3>
            <p>Understanding programming concepts and developing logical solutions.</p>
          </div>
          <div className="focus-item">
            <span>02</span>
            <h3>Web Development</h3>
            <p>Building websites and exploring modern web technologies.</p>
          </div>
          <div className="focus-item">
            <span>03</span>
            <h3>Database Systems</h3>
            <p>Learning how information is organized, stored, and managed.</p>
          </div>
          <div className="focus-item">
            <span>04</span>
            <h3>Problem Solving</h3>
            <p>Developing practical approaches to technical challenges.</p>
          </div>
        </div>
      </section>

      <section className="page-bottom">
        <div>
          <p className="eyebrow">WHAT'S NEXT?</p>
          <h2>Learning through<br />experience.</h2>
        </div>
        <Link href="/activities" className="text-link">EXPLORE MY ACTIVITIES ↗</Link>
      </section>

      <footer className="site-footer">
        <Link href="/" className="brand">
          <Image src="/images/Logo.gif" alt="Franklin Saludes" width={180} height={80} unoptimized />
        </Link>
        <p>© 2026 John Franklin R. Saludes. All rights reserved.</p>
        <Link href="#top">BACK TO TOP ↑</Link>
      </footer>
    </main>
  );
}
