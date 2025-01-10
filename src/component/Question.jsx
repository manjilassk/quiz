import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{question.question}</h2>
      <div className="mt-4 space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="block w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
