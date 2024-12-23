import * as React from "react";

export function PlayerCard({ name, imageSrc }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-4 max-w-full bg-white rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.15)] w-[360px] max-md:px-3">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Profile picture of ${name}`}
        className="object-contain w-full rounded-lg aspect-square"
      />
      <div className="mt-2 w-full text-xl font-bold leading-snug text-center text-neutral-900">
        {name}
      </div>
    </div>
  );
}
