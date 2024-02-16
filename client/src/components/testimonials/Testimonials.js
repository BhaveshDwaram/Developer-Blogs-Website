// TestimonialsCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // Import your custom CSS file for styling
import testimonial1 from '../../Assets/testimonial1.jpg';
import testimonial2 from '../../Assets/testimonial2.jpg';
import testimonial3 from '../../Assets/testimonial3.jpg';
import testimonial4 from '../../Assets/testimonial4.jpg';
import testimonial5 from '../../Assets/testimonial5.jpg';
import testimonial6 from '../../Assets/testimonial6.jpg';


const TestimonialsCarousel = () => {
  const testimonials = [
    { id: 1, image: testimonial1, text: "Testimonial 1 Text", author: "John Doe" },
    { id: 2, image: testimonial2, text: "Testimonial 2 Text", author: "Jane Smith" },
    { id: 3, image: testimonial3, text: "Testimonial 3 Text", author: "David Johnson" },
    { id: 4, image: testimonial4, text: "Testimonial 4 Text", author: "Emily Wilson" },
    { id: 5, image: testimonial5, text: "Testimonial 5 Text", author: "Michael Brown" },
    { id: 6, image: testimonial6, text: "Testimonial 6 Text", author: "Sarah Lee" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 // Set slidesToScroll to 1 to move one card at a time
  };

  return (
    <div className="testimonials-carousel">
      <h2 className="testimonials-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-slide">
            <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
