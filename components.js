import React from "https://esm.sh/react@18";

const e = React.createElement;

export const Section = (props) =>
  e("section", { className: "max-w-6xl mx-auto px-6 py-12 fade-in" }, props.children);

export const Card = ({ title }) =>
  e("div", { className: "glow-card" },
    e("div", { className: "inner-card" }, title)
  );

export function App() {
  return e("div", null,

    // Navbar
    e("nav", { className: "flex justify-between items-center px-6 py-4 max-w-6xl mx-auto" },
      e("h1", { className: "font-bold text-lg" }, "LOGO"),
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
          e("h1", { className: "text-4xl font-bold mb-4" },
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
      e("h2", { className: "text-2xl font-semibold mb-6" }, "Our Services"),
      e("div", { className: "grid md:grid-cols-3 gap-4" },
        ["AI & Automation","Full Stack Development","Cloud & DevOps","Cybersecurity","Digital Marketing","SaaS Solutions"]
        .map((item, i) => e(Card, { key: i, title: item }))
      )
    ),

    // Footer
    e("footer", { className: "border-t border-gray-700 mt-10 py-6 text-center" },
      e("p", null, "© 2026 AI Agency")
    )
  );
}
