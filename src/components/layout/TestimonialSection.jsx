import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ronaldinho',
    position: 'Wizard',
    image: 'https://static.wefut.com/assets/images/fut20/playeravatars/custom/246472.png/150',
    text: 'This team is really the best in its field. I don t regret working with them, and will come back again. Thanks.',
    rating: 5,
  },
  {
    name: 'Leo Messi',
    position: 'GOAT',
    image: 'https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1/150',
    text: 'This team is really the best in its field. I don t regret working with them, and will come back again. Thanks.',
    rating: 5,
  },
  {
    name: 'Clarence Seedorf',
    position: 'God Ball Knowladge',
    image: 'https://e0.365dm.com/21/04/1600x900/skysports-seedorf-clarence-seedorf_5341787.jpg?20210414165401/150',
    text: 'Professional and efficient. Their services have been invaluable to our business.This team is really the best in its field.',
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What our clients say</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:-translate-y-2"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm opacity-70">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-base mb-4">{testimonial.text}</p>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
