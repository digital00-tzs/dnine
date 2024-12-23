import { useState, useEffect } from "react";

const images = [
  { src: "https://picsum.photos/500/300?random=1", alt: "Image 1" },
  { src: "https://picsum.photos/500/300?random=2", alt: "Image 2" },
  { src: "https://picsum.photos/500/300?random=3", alt: "Image 3" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Auto change the image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [totalImages]);

  // Function to handle manual dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
  <section>
    <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel images */}
      <div className="relative w-screen h-screen overflow-hidden">
  <img
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    className="w-full h-full object-cover"
  />
</div>


      {/* Dots */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    </section>
  );
};

export default HomePage;


