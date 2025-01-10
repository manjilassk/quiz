import React, { useState } from 'react';
import Question from './Question';
import { questions } from '../data';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {isQuizFinished ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Finished!</h2>
          <p className="mt-4">
            Your score: {score} / {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
