import React from "react";
import aboutData from "./aboutData"; // adjust the path if necessary




const AboutUs = () => {

  return (
    <section id="aboutus" className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-cyan-700 mb-4">About Us</h2>
      </div>

      {aboutData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
        >
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[70vh]"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">{item.title}</h3>
            <p className="text-gray-700 mb-6">{item.description}</p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              {item.list.map((point, i) => (
                <li key={i}>✅ {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutUs;
