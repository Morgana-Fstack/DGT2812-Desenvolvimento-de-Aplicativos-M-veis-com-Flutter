import React from 'react';
import { UserIcon, YellowStarIcon, EmptyStarIcon } from './Icons';
import { Review } from '../data';

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Avaliações e Comentários
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex-shrink-0">
              <UserIcon />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between flex-wrap">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mr-2">{review.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
              <div className="flex items-center my-1">
                {[...Array(5)].map((_, i) => (
                  i < review.rating ? <YellowStarIcon key={i} /> : <EmptyStarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Deixe sua avaliação</h3>
        <form>
          <textarea
            rows={4}
            className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Compartilhe sua experiência..."
            aria-label="Deixe sua avaliação"
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition"
          >
            Enviar Comentário
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
