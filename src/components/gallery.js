import React, { useState } from "react";
import "../styles/gallery.css";
import Lightbox from "../components/lightBox";

const imageUrls = [
  // Add your image URLs here
  "https://made.porn/is/0y/JQ/BoJ3xdAJQ0y-Opimt6tnwVO.jpg",
  "https://made.porn/is/y1/EK/Setlha5EKy1-JOxdUkvOSSl.jpg",
  "https://made.porn/is/7i/Qi/FmiLj9OQi7i-QqqKreCFtQ.jpg",
  "https://made.porn/600/is/NL/Os/GJJFLuSOsNL-DDtoYLZuf2O.jpg",
  "https://made.porn/is/Bw/6w/OwXB3Ma6wBw-Q9qCjw6Orat.jpg",
  "https://made.porn/is/bc/NT/Oytqy3cNTbc-IQnEIdpMCOt.jpg",
  "https://made.porn/is/Rl/LI/N9dWOCJLIRl-UTWyyuFPHwV.jpg",
  "https://made.porn/is/EN/nY/C9dQ1dMnYEN-KniSgRYV4Eg.jpg",
  "https://made.porn/is/TG/G7/PBW8cL4G7TG-VZDDm6k5pM7.jpg",
  "https://made.porn/is/yZ/OA/CnvsFqTOAyZ-EqGp1wkg0Sm.jpg",
  "https://made.porn/is/ZJ/sO/HW5NAS9sOZJ-HZVhdWXgri0.jpg",
  "https://made.porn/is/cD/Xe/Sq3ffkHXecD-TmnrqBS5y.jpg",
  "https://made.porn/is/EB/we/UCHpiasweEB-FaKW2gNQiBg.jpg",
  "https://made.porn/600/is/72/su/PG5vDLJsu72-E4bqiifD8fN.jpg",
  "https://made.porn/600/is/zf/wa/Ldv0K71wazf-Hk7yj1qe4eY.jpg",
  "https://made.porn/600/is/ML/2J/RMlfqjM2JML-PdpuvcOsjAw.jpg",
  "https://made.porn/is/yZ/6C/SnRQ2m6CyZ-NWnGUjYkJfl.jpg",
  "https://made.porn/is/2b/0t/IBt86gq0t2b-K2OygX17u4Q.jpg",
  "https://made.porn/is/sW/Kh/FVCdfWoKhsW-DyvTpRVR6ff.jpg",   //29
  "https://made.porn/is/BW/Pf/C5jTZCGPfBW-D6QF3X8rzAb.jpg",   //30
  "https://made.porn/is/p6/VJ/NX1HlatVJp6-L5gAFB22uTK.jpg",   //31
  "https://made.porn/is/qF/Mx/GI5CcmFMxqF-RGl1ViB5uxa.jpg",   //32
  "https://made.porn/is/wE/RA/HD4VNlIRAwE-LN7PIzkiCKn.jpg",
  "https://made.porn/is/vt/R1/TjKHGxXR1vt-OJaisNvH0l6.jpg",
  "https://made.porn/is/dh/hs/BfRaZnfhsdh-KqCTh6hNKuz.jpg",
  "https://made.porn/is/SG/GP/OWf3kPTGPSG-BNzdoDstzdr.jpg",
  "https://made.porn/is/Yg/Gt/IwNuDxiGtYg-VibnJv9JYf8.jpg",
  "https://made.porn/is/4y/Q2/TB4T0tOQ24y-EFJsVWmKSvg.jpg",
  "https://made.porn/is/Fd/Wn/CMt3sezWnFd-U7vNjBL79yO.jpg",
  "https://made.porn/is/cW/wS/VSJCA0qwScW-TKUnUeGXfUz.jpg",
  "https://made.porn/is/Ze/4k/GEEjvI54kZe-PWL8Tdk13MF.jpg",
  "https://made.porn/is/j6/eh/O2MloBjehj6-OdCaT240nOB.jpg",
  "https://made.porn/is/52/T4/Vhlm3tFT452-RhaUj9dYvCg.jpg",
  "https://made.porn/is/hf/Je/F9C9DV8Jehf-JzUEPNEMNRX.jpg",
  "https://made.porn/is/GO/KK/QYeTt6WKKGO-MizkwdswkrW.jpg",
  "https://made.porn/is/zI/gJ/MdpvXyOgJzI-Lo9749h0JsB.jpg",
  "https://made.porn/is/61/lC/DlVElZolC61-LK0qFkUJiWn.jpg",
  "https://made.porn/is/BP/Gs/UbCmZXhGsBP-MYCSB7IGrcX.jpg",
  "https://made.porn/is/cW/wS/VSJCA0qwScW-TKUnUeGXfUz.jpg",
  "https://made.porn/is/Yp/p4/PCPu8aSp4Yp-RUcfg20WmN8.jpg",   //24
  "https://made.porn/is/nr/Bp/FBEmBDXBpnr-QlGAz8pePnH.jpg",   //25
  "https://made.porn/is/N9/dU/SD4twIjdUN9-RT81s9RAcZG.jpg",   //26
  "https://made.porn/is/uA/Ub/CNxSbToUbuA-LraFYyeBtyf.jpg",   //27
  "https://made.porn/is/DX/RY/UfnZYj0RYDX-SD2BlnEOdxW.jpg",   //28
  "https://made.porn/is/uG/nm/EZoRD1PnmuG-UHE3hSz1X5X.jpg",
  "https://made.porn/is/3d/ew/VWtb9nAew3d-KOh7fH30l5P.jpg",
  "https://made.porn/is/Lx/2n/OQGQjFU2nLx-PvwTh3SZycE.jpg",
  "https://made.porn/is/FC/j6/GpgjA4pj6FC-VJye4GtpP7m.jpg",
  "https://made.porn/is/ze/Gs/Qi6CLeDGsze-P14Pz3QyS47.jpg",
  "https://made.porn/is/GC/eX/R7ZGUPMeXGC-NXh5pKMD33G.jpg",
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
  "https://made.porn/is/I3/CQ/IuZirDhCQI3-Hc4777QcGIE.jpg",   //1
  "https://made.porn/is/TS/fj/KE1akrBfjTS-IwTzRDbAxgB.jpg",   //2
  "https://made.porn/is/hb/JW/JixZ35FJWhb-UtFNovHnfX9.jpg",   //3
  "https://made.porn/is/L0/zR/C7XEOQgzRL0-HSX4q7WFJ5L.jpg",   //4
  "https://made.porn/is/cv/jR/Ef8M7H3jRcv-M0XJOQ4wT9I.jpg",   //5
  "https://made.porn/is/st/NR/PXziC2DNRst-LUSGwNxBD5m.jpg",   //6
  "https://made.porn/is/FV/iW/FCztQmyiWFV-BPshcFiARN8.jpg",   //7
  "https://made.porn/is/Iv/Uh/NsLRHGQUhIv-MH6ZmQZktje.jpg",   //8
  "https://made.porn/is/L8/uL/NyUUhTluLL8-HhQBokVSYma.jpg",   //9
  "https://made.porn/is/9x/I8/FLYUDDsI89x-FVbcomXvCvf.jpg",   //10
  "https://made.porn/is/YA/gS/JfdyU54gSYA-VrhkCZpOMhZ.jpg",   //11
  "https://made.porn/is/dt/Et/FfAzsoaEtdt-KS7CQaSMCrT.jpg",   //12
  "https://made.porn/is/lp/f9/BRHMtewf9lp-HBsy5m5PHmJ.jpg",   //13
  "https://made.porn/is/cR/ul/L5noCjFulcR-LQeDnrnCVmN.jpg",   //14
  "https://made.porn/is/6b/Lv/C6UR0ZMLv6b-SLczCZL4g74.jpg",   //15
  "https://made.porn/is/yd/GQ/LPduqe5GQyd-HsQo7ZZtetc.jpg",   //16
  "https://made.porn/is/1M/jz/RXnn5TKjz1M-GJrFm5XiBbU.jpg",   //17
  "https://made.porn/is/fH/1i/RUelYgc1ifH-S2v7okNBmlB.jpg",   //18
  "https://made.porn/is/eM/hU/DJg8dtNhUeM-GLy72Rj8YMX.jpg",   //19
  "https://made.porn/is/K3/4u/I6jXumI4uK3-DGKIUcvWA6T.jpg",   //20
  "https://made.porn/is/QK/bM/Cg3nICgbMQK-DlyVb6Lb4fp.jpg",   //21
  "https://made.porn/is/UJ/lR/C49cdaklRUJ-KLWiVytQFNo.jpg",   //22
  "https://made.porn/is/xi/Ps/NM3JNgBPsxi-IJnTP7Ezkhf.jpg",   //23
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
