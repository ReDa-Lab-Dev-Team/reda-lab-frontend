import React from "react";

interface CenteredTitleProps {
    title: string;
}

export default function CenteredTitle({ title }: CenteredTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
    </div>
  );
};
