import { type ReactNode } from "react";

export interface PillarCardProps {
  icon: ReactNode;
  title: string;
  textBullets: string[];
}

export default function PillarCard({
  icon,
  title,
  textBullets,
}: PillarCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-3">{icon}</div>

      {/* Title */}
      <h3 className="text-base font-semibold mb-2 text-[#e8a020]">{title}</h3>

      {/* Divider with dot */}
      <div className="flex items-center gap-1 mb-4 ">
        <div className="h-px w-10 bg-[#e8a020]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#e8a020]" />
        <div className="h-px w-10 bg-[#e8a020]" />
      </div>

      {/* List */}
      <ul className="text-left text-sm text-gray-700 space-y-2 w-full">
        {textBullets.map((textBullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e8a020]" />
            <span>{textBullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
