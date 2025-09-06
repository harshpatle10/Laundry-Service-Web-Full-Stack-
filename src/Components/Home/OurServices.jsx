import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Eco-Friendly Dry Cleaning",
    description:
      "Safely clean your delicate garments with our eco-friendly dry cleaning services, leaving them fresh and free from harsh chemicals.",
    image: "https://themewagon.github.io/Freshen/assets/img/bg/bg2.jpg",
    alt: "Eco-Friendly Dry Cleaning",
  },
  {
    title: "Wash & Fold Service",
    description:
      "Save time by letting us handle your laundry with our efficient wash & fold service, ensuring your clothes are clean and neatly folded.",
    image: "https://themewagon.github.io/Freshen/assets/img/bg/bg3.jpg",
    alt: "Wash & Fold",
  },
  {
    title: "Same-Day Pickup & Delivery",
    description:
      "Forget waiting—our same-day pickup and delivery ensures your laundry is quickly collected, cleaned, and returned the same day.",
    image: "https://themewagon.github.io/Freshen/assets/img/bg/bg4.jpg",
    alt: "Pickup & Delivery",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-rose-500">Our Services</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-4">
            Convenient Laundry Services in NYC
          </h1>
          <p className="mt-2 text-gray-500">
            Experience the power of eco-friendly laundry with our premium detergents
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  src={service.image}
                  alt={service.alt}
                />
              </div>
              <div className="p-6">
                <p className="text-rose-500 text-sm font-semibold mb-1">{service.title}</p>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                

                <Link to="/Service">
                <button

className="inline-block px-4 py-2 text-sm cursor-pointer font-semibold text-cyan-700 border border-cyan-500 rounded hover:bg-cyan-600 hover:text-white transition-all duration-300"
>
                  READ MORE
                </button>
                    </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
