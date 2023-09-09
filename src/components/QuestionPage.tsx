import React, { useState } from "react";

interface QuestionProps {
  questions: Question[];
  currentQuestionIndex: number;
  onNextQuestion: (corrected?: boolean) => void;
  title: string;
}

interface Question {
  question: string;
  answer: string;
  answerDescription: string;
}

const QuestionPage: React.FC<QuestionProps> = ({
  questions,
  currentQuestionIndex,
  onNextQuestion,
  title,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h1>
        {title} 문항 {currentQuestionIndex + 1}
      </h1>
      <p>문제: {currentQuestion.question}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        정답 {showAnswer ? "숨기기" : "보기"}
      </button>
      {showAnswer && (
        <>
          <p>정답: {currentQuestion.answer}</p>
          <p>정답 설명: {currentQuestion.answerDescription}</p>
        </>
      )}
      <button onClick={() => onNextQuestion(true)}>맞음</button>
      <button onClick={() => onNextQuestion()}>틀림</button>
    </div>
  );
};

export default QuestionPage;
