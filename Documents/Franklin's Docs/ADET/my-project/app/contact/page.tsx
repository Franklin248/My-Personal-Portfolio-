
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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

      <section className="page-hero contact-hero">
        <p className="eyebrow">LET'S CONNECT</p>
        <h1>Good things<br />start with hello.</h1>
        <div className="page-hero-bottom">
          <span>CONTACT / 04</span>
          <span>GET IN TOUCH</span>
        </div>
      </section>

      <section className="contact-content">
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let's start<br />a conversation.</h2>
        </div>
        <div className="contact-description">
          <p>
            Whether it is a project idea, an academic collaboration,
            an opportunity, or simply a conversation about technology,
            I would be happy to connect.
          </p>
          <p>
            I am always open to learning from others, exchanging ideas,
            and discovering new opportunities along the way.
          </p>
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-detail">
          <span>01 / NAME</span>
          <h3>John Franklin R. Saludes</h3>
        </div>
        <div className="contact-detail">
          <span>02 / FIELD</span>
          <h3>Computer Science</h3>
        </div>
        <div className="contact-detail">
          <span>03 / PURPOSE</span>
          <h3>Projects, Ideas & Collaboration</h3>
        </div>
      </section>

      <section className="contact-ending">
        <p className="eyebrow">THANK YOU FOR YOUR TIME</p>
        <h2>Until our paths<br />cross again.</h2>
        <Link href="/" className="text-link">RETURN TO HOMEPAGE ↗</Link>
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
