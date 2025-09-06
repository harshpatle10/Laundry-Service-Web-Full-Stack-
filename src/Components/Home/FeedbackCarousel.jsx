import React, { useState } from "react";
import { Link } from "react-router-dom";

const feedbacks = [
  {
    text: "Excellent service! Helped me find the perfect hotel at a great price.",
    name: "Harsh Patle",
    role: "SELLING AGENT",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Amazing experience. The website made it super easy to book!",
    name: "Sneha Sharma",
    role: "BUYER",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Very professional team, found a luxury hotel exactly as I wanted.",
    name: "Rohit Mehra",
    role: "SELLER",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Quick support and clear process. Found my dream property easily.",
    name: "Priya Desai",
    role: "RENTAL CLIENT",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "User-friendly interface and top-notch customer support!",
    name: "Aman Verma",
    role: "TENANT",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const totalGroups = Math.ceil(feedbacks.length / cardsToShow);

  const nextGroup = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const getVisibleFeedbacks = () => {
    const start = currentIndex * cardsToShow;
    return feedbacks.slice(start, start + cardsToShow);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-red-400 font-bold text-xl">Our Testimonial</h2>
        <h1 className="text-3xl md:text-4xl font-bold opacity-90">Clients Feedback</h1>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={prevGroup}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-amber-600 hover:text-amber-800 hover:bg-gray-300 px-2 py-1 rounded-sm z-10"
        >
          &lt;
        </button>

        {/* Feedback Cards */}
        <div className="flex justify-center gap-6 overflow-hidden transition-all duration-500">
          {getVisibleFeedbacks().map((feedback, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <p className="text-gray-700 min-h-[80px]">“{feedback.text}”</p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={feedback.img}
                  alt={feedback.name}
                />
                <div>
                  <h2 className="font-bold">{feedback.name}</h2>
                  <div className="text-sm text-gray-600">{feedback.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextGroup}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-amber-600 hover:text-amber-800 hover:bg-gray-300 px-2 py-1 rounded-sm z-10"
        >
          &gt;
        </button>
      </div>

<div class="py-16 px-32 bg-gray-100">
<div >
<h2 class="text-center text-gray-700">Trusted by Nearly 90,000 Happy Customers – Choose Laundrywala for Exceptional Care.</h2>
</div>
</div>
   
      {/* Book Service Button */}
      <div className="py-8 text-center">
        <a href="homeform/ourservices.html" className="inline-block">
        
        <Link to="/Service" >
          <button className="bg-blue-500 cursor-pointer hover:bg-sky-600 px-6 py-3 text-white font-semibold rounded-lg shadow-md">
            Book Service
          </button>
        </Link>
        </a>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
