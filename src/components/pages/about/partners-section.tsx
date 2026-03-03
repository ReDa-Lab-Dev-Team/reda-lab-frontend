import SecondarySectionHeader from "@/components/common/secondary-section-header";
import { useState } from "react";

const partners = [
  //   {
  //     name: "Kotlin",
  //     img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Kotlin_icon_%282016-2021%29.svg",
  //   },
  {
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Vite",
    img: "https://api.iconify.design/logos:vitejs.svg",
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Astral UV",
    img: "https://docs.astral.sh/uv/assets/logo-letter.svg",
  },
  {
    name: "Git",
    img: "	https://www.svgrepo.com/show/303548/git-icon-logo.svg",
  },
  {
    name: "GitHub",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Docker",
    img: "	https://www.svgrepo.com/show/452192/docker.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
  },
];

export default function PartnersSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="max-w-7xl mx-auto mb-10 px-6 py-10 bg-white font-sans">
      {/* Header */}
      <SecondarySectionHeader
        title="Our Partner"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
        felis tellus, a tincidunt lorem tempus a. Quisque ut pulvinar urna.
        Vestibulum nisi dolor, pretium eu tortor id, commodo venenatis lectus.
        Integer nisl libero, interdum hendrerit libero ac, imperdiet consectetur
        velit. Ut bibendum sem turpis, eget ullamcorper ligula luctus id."
      />

      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
        {partners.map((p, i) => (
          <div
            key={p.name}
            title={p.name}
            className="cursor-pointer"
            style={{
              filter:
                hovered === i
                  ? "grayscale(0%) opacity(1)"
                  : "grayscale(100%) opacity(0.5)",
              transform: hovered === i ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={p.img}
              alt={p.name}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
