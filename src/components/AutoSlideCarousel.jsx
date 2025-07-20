import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";
import img1 from '../assets/nat.jpeg'
import img2 from '../assets/ncc.jpg'
import img3 from '../assets/rotaract.jpg'
import img4 from '../assets/tamil.png'

export default function AutoSlideCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 0 },
  });

  useEffect(() => {
    let timeout;
    function nextSlide() {
      timeout = setTimeout(() => {
        if (slider.current) slider.current.next();
        nextSlide();
      }, 3000);
    }
    nextSlide();
    return () => clearTimeout(timeout);
  }, [slider]);

  const images = [img1, img2, img3, img4]; // ✅ fixed path

  return (
    <div style={{margin:'10px'}}>
    <Box ref={sliderRef} className="keen-slider" sx={{mt:10}}>
      {images.map((src, index) => (
        <Box key={index} className="keen-slider__slide"  >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "500px",
              display: "block",
              borderRadius: "10px",
            }}
          />
        </Box>
      ))}
    </Box></div>
  );
}
