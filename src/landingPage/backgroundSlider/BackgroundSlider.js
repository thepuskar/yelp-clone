import React from "react";
import BackgroundSlider from "react-background-slider";

import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.jpg";
import bg3 from "../../assets/bg-3.jpg";
import bg4 from "../../assets/bg-4.jpg";
import bg5 from "../../assets/bg-5.jpg";
import bg6 from "../../assets/bg-6.jpg";
// import bg7 from "../../assets/bg-7.jpg";

export function BackgroundSlideshow() {
  return (
    <div>
      <BackgroundSlider
        images={[bg1, bg2, bg3, bg4, bg5, bg6]}
        duration={8}
        transition={2}
      />
    </div>
  );
}
