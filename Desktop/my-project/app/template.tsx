
"use client";

import { useEffect } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const elements = document.querySelectorAll(
     ".site-header, .hero-name, .hero-caption, section, .explore-card, .skill-item, .timeline-item, .focus-item, .project-card, .contact-detail, .site-footer"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.setAttribute(
        "style",
        `--reveal-delay: ${(index % 4) * 90}ms`
      );
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return <div className="page-transition">{children}</div>;
}
