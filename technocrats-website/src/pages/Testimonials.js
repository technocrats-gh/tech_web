import React from "react";
import TestimonialItem from "../components/TestimonialItem";

function Testimonials() {
  const testimonial =
    `I contracted this team for a job I am extremely satisfied with the quality of their services. 
    I would highly recommend this company to anyone looking for reliable and efficient tech solutions`;
  return (
    <section className="container mt-36 text-center flex flex-col items-center" id="testimonials">
      <h3 className="text-4xl font-bold">What Clients Say</h3>
      <p className="font-medium mt-4 max-w-lg">
        Developing and implementing bespoke efficient and effective solutions to meet our clients' needs
      </p>

      <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3">
        <TestimonialItem
          name="Nina Watson"
          designation="Designer"
          userImg="./images/user-1.jpg"
          rating={4}
          testimonial={testimonial}
        />
        <TestimonialItem
          name="Janice Harrison"
          designation="Programmer"
          userImg="./images/user-2.jpg"
          rating={3}
          testimonial={testimonial}
        />
        <TestimonialItem
          name="Amy Adams"
          designation="Photographer"
          userImg="./images/user-3.jpg"
          rating={4}
          testimonial={testimonial}
        />
      </div>
    </section>
  );
}

export default Testimonials;