import React, { useState } from "react";
import "../styles/Dashboard.css"; // Make sure this path is correct
import Lightbox from "../components/lightBox";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { title: "Total Users", value: 1200, icon: "group", image: "/Hanime/1.jpg" },
    { title: "Active Sessions", value: 350, icon: "session", image: "/Hanime/2.jpg" },
    { title: "Total Revenue", value: "$15,230", icon: "attach_money", image: "/Hanime/3.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/4.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/5.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/6.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/7.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/8.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/9.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/10.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/11.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/12.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/13.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/14.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/15.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/16.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/17.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/18.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/19.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/20.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/21.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/22.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/23.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/24.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/25.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/26.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/27.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/28.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/29.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/30.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/31.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/32.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/33.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/34.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/35.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/36.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/37.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/38.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/39.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/40.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/42.jpg" },
    { title: "New Messages", value: 42, icon: "message", image: "/Hanime/41.jpg" },
  ];

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
                onClick={() => openLightbox(index)} // Open lightbox on image click
              />
              <h3>{card.title}</h3>
              <p>{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          images={cards.map((card) => card.image)} // Pass image URLs to Lightbox
          currentIndex={currentIndex}
          onClose={closeLightbox} // Close lightbox function
        />
      )}
    </div>
  );
};

export default Dashboard;