import React, { useEffect } from "https://esm.sh/react@18";

const e = React.createElement;

export const Section = (props) =>
  e("section", { className: "max-w-6xl mx-auto px-6 py-12 reveal" }, props.children);

export const Card = ({ title }) =>
  e("div", { className: "glow-card" },
    e("div", { className: "inner-card" }, title)
  );

export function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  return e("div", null,

    // Navbar
    e("nav", { className: "flex justify-between items-center px-6 py-4 max-w-6xl mx-auto" },
      e("h1", { className: "font-bold text-lg glow-text" }, "LOGO"),
      e("div", { className: "space-x-6 hidden md:flex" },
        e("a", null, "Services"),
        e("a", null, "Work"),
        e("a", null, "Process"),
        e("a", null, "Contact")
      ),
      e("button", { className: "btn-primary" }, "Start a Project")
    ),

    // Hero
    e(Section, null,
      e("div", { className: "grid md:grid-cols-2 gap-10 items-center" },
        e("div", null,
          e("h1", { className: "text-4xl font-bold mb-4 glow-text" },
            "We Build, Scale, and Automate the Future"
          ),
          e("p", { className: "mb-6 text-gray-300" },
            "Full-Stack AI Solutions: Develop • Deploy • Scale • Secure • Market"
          ),
          e("div", { className: "space-x-4" },
            e("button", { className: "btn-primary" }, "Start a Project"),
            e("button", { className: "btn-secondary" }, "Book a Call")
          )
        ),
        e("div", { className: "hero-glow" })
      )
    ),

    // Services
    e(Section, null,
      e("h2", { className: "text-2xl font-semibold mb-6 glow-text" }, "Our Services"),
      e("div", { className: "grid md:grid-cols-3 gap-4" },
        ["AI & Automation","Full Stack Development","Cloud & DevOps","Cybersecurity","Digital Marketing","SaaS Solutions"]
        .map((item, i) => e(Card, { key: i, title: item }))
      )
    ),

    // Process
    e(Section, null,
    
      e("h2", {
        className: "text-2xl font-semibold mb-10 text-center"
      }, "Our Process"),
    
      e("div", { className: "ufo-system" },
    
        e("div", { className: "ufo-base" }),
    
        e("div", { className: "ufo-ring" },
    
          ["Discover","Plan","Design","Develop","Deploy","Scale","Market"]
          .map((step,i)=>(
            e("div", {
              key: i,
              className: "ufo-item",
              style: { "--i": i }
            }, step)
          ))
    
        )
    
      )
    ),

    // Projects
    e(Section, null,
      e("h2", { className: "text-2xl font-semibold mb-6 glow-text" }, "Featured Projects"),
      e("div", { className: "grid md:grid-cols-2 gap-6" },
        ["AI SaaS Platform","Automation System"].map((proj,i)=>(
          e("div", { key:i, className: "project-card h-48" },
            e("div", { className: "project-overlay" },
              e("span", null, proj)
            )
          )
        ))
      )
    ),

    // Tech Stack
    e(Section, null,
      e("h2", { className: "text-2xl font-semibold mb-6 glow-text" }, "Tech Stack"),
      e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" },
        ["React","Node","AI","AWS","Docker","Firebase","Stripe","Next.js"]
        .map((tech,i)=>(
          e("div", { key:i, className: "tech-item" }, tech)
        ))
      )
    ),

    // Testimonials
    e(Section, null,
      e("h2", { className: "text-2xl font-semibold mb-6 glow-text" }, "Testimonials"),
      e("div", { className: "grid md:grid-cols-3 gap-4" },
        [1,2,3].map(i=>(
          e("div", { key:i, className: "testimonial" },
            "Amazing service. Helped scale our business 🚀"
          )
        ))
      )
    ),

    // CTA
    e(Section, null,
      e("div", { className: "cta-box" },
        e("h2", { className: "text-2xl font-bold mb-4" },
          "Ready to Build Your AI Future?"
        ),
        e("button", { className: "btn-primary" }, "Get Started")
      )
    ),

    // Footer
    e("footer", { className: "border-t border-gray-700 mt-10 py-6 text-center reveal" },
      e("p", null, "© 2026 AI Agency")
    )
  );
}
