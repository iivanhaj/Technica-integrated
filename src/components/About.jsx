import React from "react";

function About() {
  return (
    <div className="relative h-screen mb-2" id="about">
      <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg ">
        <p className="Schtitle font-Michroma text-center mb-8">
          <span className="heading heading1">AB</span>
          <span className="heading heading2">OUT</span>
        </p>
        <p className="text-white font-poppins leading-loose text-left tracking-wide p-4 mx-2 md:mx-28 mb-8 text-sm md:text-base lg:text-lg">
          The Indian Society for Technical Education (ISTE) is a non-profit
          technical student chapter dedicated to orchestrating an array of
          technical workshops and hackathons, fostering a robust technical
          community. In this pursuit, we're hosting our events in Horizon 2023,
          one of India’s grandest technical fests, offering a diverse spectrum
          of events. Horizon stands tall as an annual three-day national
          technical summit by ISTE-VIT, encompassing a colossal hackathon,
          Technica, and a plethora of workshops spanning Web Development,
          Machine Learning, pure Electronics, IoT, Web3, App Development, and
          Competitive Coding. This summit is among the largest technical
          gatherings, attracting over 1500 participants, aiming for technical
          excellence, innovation, and specialized technical education. Technica,
          a 48-hour hackathon within Horizon, aims to inspire participants to
          surpass their limits in the pursuit of excellence. With approximately
          1000 participants, it cultivates creative ideas for a more promising
          technological future. Technica is a multi-domain hackathon fostering
          innovative technical solutions in areas like Education, Fin-Tech, AI,
          Hardware, and Open Innovation. It's a platform for showcasing talent
          and encouraging healthy peer competition.
        </p>
      </div>
    </div>
  );
}

export default About;
