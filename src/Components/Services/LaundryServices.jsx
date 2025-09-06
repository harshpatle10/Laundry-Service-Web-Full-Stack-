import React, { useState } from "react";
import MainContentService from "./MainContentService";
import FooterService from "./FooterService";
import NavbarService from "./NavbarService";

export default function LaundryServices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ service: "", weight: "", total: 0 });

  const openOrderModal = (service) => {
    setOrderDetails({ service, weight: "", total: 0 });
    setModalOpen(true);
  };

  const handleWeightChange = (weight) => {
    const pricePerKg = 50;
    const total = weight > 0 ? weight * pricePerKg : 0;
    setOrderDetails((prev) => ({ ...prev, weight, total }));
  };

  const confirmOrder = () => {
    if (!orderDetails.weight || orderDetails.weight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }
    alert(`Order placed successfully!\n
      Service: ${orderDetails.service}\n
      Weight: ${orderDetails.weight} kg\n
      Total: ₹${orderDetails.total}
    `);
    setModalOpen(false);
  };

  return (
    <>

     <NavbarService/>
      <MainContentService
        openOrderModal={openOrderModal}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        orderDetails={orderDetails}
        handleWeightChange={handleWeightChange}
        confirmOrder={confirmOrder}
      />
      {/* <FooterService onBook={openOrderModal} /> */}
    </>
  );
}
