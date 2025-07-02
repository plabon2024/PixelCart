import React from 'react';
import { AiFillStar } from 'react-icons/ai'; 

const reviews = [
  {
    name: 'Amina K.',
    role: 'Retail Store Owner',
    comment:
      'The wholesale prices are unbeatable! I’ve been able to stock my shop with quality items and still maintain great margins.',
    rating: 5,
  },
  {
    name: 'Jahid R.',
    role: 'eCommerce Seller',
    comment:
      'Fast delivery, real-time stock updates, and excellent support. This platform has helped me scale quickly.',
    rating: 4,
  },
  {
    name: 'Tania M.',
    role: 'Small Business Buyer',
    comment:
      'The process was smooth and the team was very helpful. Highly recommended for bulk buyers!',
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-bold text-center mb-4"> What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-12">
          Real feedback from real business owners who use our platform every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className=" p-6 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {review.name.split(' ')[0][0]}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">“{review.comment}”</p>
              <div className="flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <AiFillStar key={i} className="mr-1" size={18} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;