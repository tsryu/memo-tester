import React, { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";

interface QuestionProps {
  questions: Question[];
  currentQuestionIndex: number;
  onNextQuestion: (corrected?: boolean) => void;
  title: string;
  onRestart: () => void;
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
  onRestart,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (corrected?: boolean) => {
    onNextQuestion(corrected);
    setShowAnswer(false);
  };
  
  return (
    <Container>
      <Button onClick={onRestart} underline style={{ position: 'absolute', top: '1rem', left: '1rem'}}>
          Reset
      </Button>
      <Title>
        {title} 문항 {currentQuestionIndex + 1}
      </Title>
      <p className="mb-8">{currentQuestion.question}</p>
      <div className="mb-8">
        <Button onClick={() => setShowAnswer(!showAnswer)} underline>
          정답 {showAnswer ? "숨기기" : "보기"}
        </Button>
      </div>
      {showAnswer && (
        <div className="mb-8">
          <p>정답: {currentQuestion.answer}</p>
          {currentQuestion.answerDescription && (
            <p className="mt-2">{currentQuestion.answerDescription}</p>
          )}
        </div>
      )}
      <Button onClick={() => handleAnswer(true)}>맞음</Button>
      <Button onClick={() => handleAnswer()}>틀림</Button>
    </Container>
  );
};

export default QuestionPage;
