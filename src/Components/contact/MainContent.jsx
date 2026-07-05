import React from "react";
import Form from "./SendMessage";
import Info from "./ContactInfo";

const MainContent = () => {
  return (
    <section className="w-full mt-6">

      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-6">

        {/* Left Side */}
        <Form />

        {/* Right Side */}
        <Info />

      </div>

    </section>
  );
};

export default MainContent;

