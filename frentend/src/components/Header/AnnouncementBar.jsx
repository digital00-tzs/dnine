import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="overflow-hidden z-50 bg-black">
      <div className="flex justify-center relative min-w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Repeat the announcement text enough times to cover the screen */}
          {Array(2)
            .fill("SHOP NOW TO GET FREE SHIPPING AND 40% OFF ON ALL ORDERS •")
            .map((text, index) => (
              <p key={index} className="text-md text-white px-6">
                {text}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
