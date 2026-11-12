
import Link from "next/link";
import Image from "next/image";

export default function About() {
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
        <p className="eyebrow">A LITTLE INTRODUCTION</p>
        <h1>More than just<br />a name.</h1>
        <div className="page-hero-bottom">
          <span>ABOUT ME / 01</span>
          <span>GET TO KNOW FRANKLIN</span>
        </div>
      </section>

      <section className="about-content">
        <div className="about-description">
          <p className="eyebrow">HELLO, I'M FRANKLIN</p>
          <h2>Curious mind.<br />Creative perspective.</h2>
          <p>
            I am John Franklin R. Saludes, a Bachelor of Science in Computer
            Science student who enjoys exploring technology, discovering new
            ideas, and finding creative ways to solve problems.
          </p>
          <p>
            I believe that learning is a continuous process. Every challenge,
            project, and experience gives me an opportunity to improve and
            understand the world of technology a little better.
          </p>
          <p>
            Outside academics, I enjoy exploring digital worlds, playing
            story-driven games, listening to music, and spending time with
            the people and pets who make life meaningful.
          </p>
        </div>
        <div className="about-side-note">
          <span>01 — WHO I AM</span>
          <span>02 — WHAT I ENJOY</span>
          <span>03 — WHERE I'M GOING</span>
          <p>Always curious. Always creating. Always learning.</p>
        </div>
      </section>

      <section className="quote-section">
        <p className="eyebrow">A PERSONAL BELIEF</p>
        <h2>"Every great idea begins with the courage to explore."</h2>
        <span>— FRANKLIN SALUDES</span>
      </section>

      <section className="page-bottom">
        <div>
          <p className="eyebrow">CONTINUE EXPLORING</p>
          <h2>There's more<br />to discover.</h2>
        </div>
        <Link href="/education" className="text-link">MY EDUCATION ↗</Link>
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
