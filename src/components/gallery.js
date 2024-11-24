import React,{useState} from "react";
import "../styles/gallery.css";
import Lightbox from "../components/lightBox";

const imageUrls = [
  // Add your image URLs here
  "https://made.porn/is/RS/uM/E6rdVMguMRS-Jewoz3QMWMh.jpg",
  "https://made.porn/is/Vq/9j/UhHlJ8n9jVq-FCytyr2c7PJ.jpg",
  "https://made.porn/is/7n/t2/KrC00hKt27n-Ee7PeBsOX3M.jpg",
  "https://made.porn/is/mz/pA/OmcTOvmpAmz-OfnU89EhVFa.jpg",
  "https://made.porn/is/kB/uG/Jdolj7TuGkB-JYOv4Zj9MBo.jpg",
  "https://made.porn/is/d7/rA/SzaEZLXrAd7-K3P7Pb2CBRF.jpg",
  "https://made.porn/is/Ev/oE/IS6dzexoEEv-rW4pO1sTPH.jpg",
  "https://made.porn/is/z5/kG/MfYMz4skGz5-EhKxSAPfsFj.jpg",
  "https://made.porn/is/H5/o5/Nd92M17o5H5-GN7MQtjOiI9.jpg",
  "https://made.porn/is/1v/9l/Sxw7QfN9l1v-D1nVnTC2iPd.jpg",
  "https://made.porn/is/s5/Ro/Io5QERbRos5-VK4ukRgp8uC.jpg",
  "https://made.porn/is/QN/Pz/LD0u8cTPzQN-RfPQen9DGB6.jpg",
  "https://made.porn/is/Yz/lW/JlZkjJnlWYz-Ff5vEurTTwc.jpg",
  "https://made.porn/is/Wf/qp/JjLoKAIqpWf-Jryz4fRRen6.jpg",
  "https://made.porn/is/cn/nE/Evq6Mh9nEcn-JN6cnU33zXJ.jpg",
  "https://made.porn/is/9A/wq/UodgHKuwq9A-SW0dButifXL.jpg",
  "https://made.porn/is/dI/hw/EMzGYaMhwdI-BzUeU9s10fg.jpg",
  "https://made.porn/is/JF/MJ/LXNFYT2MJJF-R37rvsw0aCw.jpg",
  "https://made.porn/is/wt/e5/R4ORfRee5wt-LZqWTAeR96X.jpg",
  "https://made.porn/is/Tt/e2/PeTfzeQe2Tt-Et26oCe4n6H.jpg",
  "https://made.porn/is/DZ/yK/QxuLIJoyKDZ-Nw93l7zvho6.jpg",
  "https://made.porn/is/9X/fy/Qp2g5Lhfy9X-Pm8ho2L0pd9.jpg",
  "https://made.porn/is/Kk/Lj/PIt2NjvLjKk-UYOqnoWhvL4.jpg",
  "https://made.porn/is/Oc/Lx/CXhK5UpLxOc-MaY56RkfTLx.jpg",
  "https://made.porn/is/xs/rr/Biy7Wpurrxs-NgdCPyKhfj3.jpg",
  "https://made.porn/is/1j/pL/FioERYmpL1j-MD2RIOjBu43.jpg",
  "https://made.porn/is/fC/cV/QYzK18KcVfC-L0H7oCSPqMq.jpg",
  "https://made.porn/is/f8/2N/P2b3RQF2Nf8-Kr86u4KkVo9.jpg",
  "https://made.porn/is/oq/ez/MJYAcgjezoq-UnKcokga8Y2.jpg",
  "https://made.porn/is/Ar/VF/ChcJEgpVFAr-Mxyiy8o1lVX.jpg",
  "https://made.porn/is/9C/yN/TCPkI9xyN9C-VUtbW86Nni.jpg",
  "https://made.porn/is/9s/96/B1WBmf5969s-J2dgKf25yhJ.jpg",
  "https://made.porn/is/8d/RV/U5kRmtzRV8d-BIyqSxPq5si.jpg",
  "https://made.porn/is/0u/BS/NDGBkLpBS0u-SACRZBwzHgw.jpg",
  "https://made.porn/is/pq/3w/OzPjy4D3wpq-Bm4rmRfNr5z.jpg",
  "https://made.porn/is/k5/BE/QoqgswrBEk5-RP3v3wBw1we.jpg",
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

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              onClick={() => openLightbox(index)}
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
}

export default Gallery;
