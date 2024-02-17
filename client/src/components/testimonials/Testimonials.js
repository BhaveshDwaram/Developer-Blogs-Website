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
    { id: 1, image: testimonial1, text: "Exceptional resource for developers! The insightful content and vibrant community make it a go-to hub for staying updated and connected in the coding world", author: "John Doe, Senior Software " },
    { id: 2, image: testimonial2, text: "An invaluable asset for developers of all levels. The practical tutorials and engaging discussions have greatly enriched my coding journey", author: "Jane Smith,Frontend Developer" },
    { id: 3, image: testimonial3, text: "I'm continually impressed by the caliber of content and the supportive atmosphere fostered on this platform. A must-visit for any serious coder", author: "Alex Chen, Open Source Contributor" },
    { id: 4, image: testimonial4, text: "As someone deeply entrenched in the developer community, I can confidently say that this website stands out for its fresh perspectives and comprehensive resources.", author: "David Kim, Tech Lead" },
    { id: 5, image: testimonial5, text: "From novices to seasoned pros, this website offers something for everyone. Its user-friendly interface and diverse content make it a staple in my daily coding routine.", author: "Emily Rodriguez, Full Stack Developer" },
    { id: 6, image: testimonial6, text: "Top-notch content coupled with a supportive community – what more could a developer ask for? This website has become my go-to source for inspiration and knowledge-sharing.", author: "Michael Nguyen, Software Architect" },
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
