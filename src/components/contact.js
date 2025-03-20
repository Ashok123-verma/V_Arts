import React, { useState } from "react";
import "../styles/gallery.css";
import Lightbox from "./lightBox";
 // Ensure this component is correctly defined and exported

const imageUrls = [
  "https://made.porn/600/is/6u/x8/HmgiZI2x86u-HmSSEwv51nt.jpg",
  "https://made.porn/600/is/gp/BG/J0Y1YtTBGgp-Efpf9qEtX7X.jpg",
  "https://made.porn/600/is/Id/dn/OG9R0l0dnId-RCYoZ3ud9g8.jpg",
  "https://made.porn/600/is/7o/jM/ILS8dxcjM7o-Ess52cQqPVA.jpg",
  "https://made.porn/600/is/Jx/FI/4F5pe5FIJx-T3vnCUJUFwK.jpg",
  "https://made.porn/600/is/7o/jM/ILS8dxcjM7o-Ess52cQqPVA.jpg",
  "https://made.porn/600/is/KL/DW/BzmEf50DWKL-QkK9FOVY3sj.jpg",
  "https://made.porn/is/CT/qM/GdtPUqTqMCT-MCK9zgyw78X.jpg",
  "https://made.porn/600/is/Fa/xP/VVkRlOHxPFa-O0i2RxhLFT4.jpg",
  "https://made.porn/600/is/AV/pw/GUIVRqRpwAV-L2hfOoMX5s7.jpg",
  "https://made.porn/600/is/Mi/vF/ETgJoNvvFMi-LeEKCIevuwY.jpg",
  "https://made.porn/600/is/cy/0g/HINLbyJ0gcy-QnBKh2Cd790.jpg",
  "https://made.porn/600/is/ME/wX/hFHRDPwXME-JBZF31bkJtu.jpg",
  "https://made.porn/600/is/KB/f0/EZs6PRaf0KB-UC1IUTzQaQn.jpg",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "https://made.porn/is/kc/po/HA5C7tnpokc-Qk4Fs0Mj4Qv.jpg",
  "https://made.porn/is/8H/Vc/OfcrlIWVc8H-K16EZCBEGoV.jpg",
  "https://made.porn/is/XQ/Ss/LeatSeMSsXQ-SFBYGX0ZuFd.jpg",
  "https://made.porn/600/is/nt/za/GmnEMOczant-SnlL5Y0beB0.jpg",
  "https://made.porn/600/is/dD/3M/DQ9kCNN3MdD-R07uxcEKF3c.jpg",
  "https://made.porn/600/is/xa/F7/QIPNbtyF7xa-Ig7IW6dPYNJ.jpg",
  "https://made.porn/is/o1/kW/KZiBgSqkWo1-BEc5XtadlAg.jpg",
  "https://made.porn/is/y8/BC/RUbfwWuBCy8-KIn5OmY7pvr.jpg",
  "https://made.porn/is/w7/El/LoOMzUoElw7-Qx763q86ekK.jpg",
  "https://made.porn/is/re/nZ/H41zCD6nZre-B2MQkRDitHl.jpg",
  "https://made.porn/is/2q/ze/BS4qRe6ze2q-NQAVhoQyMWi.jpg",
  "https://made.porn/is/8h/ws/B9pRNu2ws8h-UlE8SaHsZ3k.jpg",
  "https://made.porn/is/5v/y7/CWZ5cAQy75v-K8yN35GR22o.jpg",
  "https://made.porn/is/wy/QM/Jhxa2UvQMwy-EJQGeZZx4Qg.jpg",
  "https://made.porn/is/sq/7G/VP3jr8D7Gsq-P7hw9AHN9li.jpg",
  "https://made.porn/is/6Z/5k/OIYnx0h5k6Z-I6Xe2lnsEFX.jpg",
  "https://made.porn/is/xv/Ft/LmpNH0qFtxv-Kj7DJLMjdaO.jpg",
  "https://made.porn/600/is/AA/pt/NIJ4wutptAA-QZjVXv6losO.jpg",
  "https://made.porn/600/is/dP/Oe/STGFe7fOedP-LuAk6c2Hl4H.jpg",
  "https://made.porn/600/is/CX/yT/PgpzsiKyTCX-VLgj5Yx8ECW.jpg",
"https://made.porn/600/is/3o/oO/LHIDAGvoO3o-NOCHA3sqE1c.jpg",
  "https://made.porn/600/is/ts/BG/Bfc0yFtBGts-IwcFAwQaXFp.jpg",
  "https://made.porn/600/is/UT/Kj/RovqKdtKjUT-TrwJTbABvqf.jpg",
  "https://made.porn/is/nA/L7/EGSQZAZL7nA-DyQe2Mr6AVM.jpg",
  "https://made.porn/is/Mk/FS/K7X5iRtFSMk-S2rUAvyNdVE.jpg",
  "https://made.porn/is/46/gR/UJVa32mgR46-HlmMLQl6Cqq.jpg",
  "https://made.porn/is/Cf/5k/wSNaw05kCf-DNgFilOAuEJ.jpg",
  "https://made.porn/is/tB/AJ/HCyEmnnAJtB-DgyvULmfo6b.jpg",
  "https://made.porn/is/0Z/yv/ShKVbgtyv0Z-24mihGfGF1.jpg",
  "https://made.porn/is/xc/Ky/JVTc5yfKyxc-IiNbCQSG6Xl.jpg",
  "https://made.porn/is/Jp/ql/Tvi03y4qlJp-P4Go9GenklU.jpg",
  "https://made.porn/is/C9/JQ/PIZZdDrJQC9-UQcMDYyQ7Ik.jpg",
  "https://made.porn/is/nt/za/GmnEMOczant-SnlL5Y0beB0.jpg",
  "https://made.porn/is/Hg/xY/QTHThnpxYHg-N9u3UxJnJp0.jpg",
  "https://made.porn/is/yo/LA/BHp8l8ALAyo-L7YwbRNc8xm.jpg",

  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox with the selected image
  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page! Here is a gallery for you to explore.</p>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={url}
              alt={`Gallery Item ${index + 1}`}
              onClick={() => openLightbox(index)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          images={imageUrls}
          currentIndex={currentIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Contact;
