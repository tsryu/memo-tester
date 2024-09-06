import React, { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";
import FretBoard from "../components/FretBoard";

interface QuestionProps {
  questions: Question[];
  currentQuestionIndex: number;
  onNextQuestion: (corrected?: boolean) => void;
  title: string;
  onRestart: () => void;
  type?: string;
}

interface Question {
  question: string | number[];
  answer: string;
  answerDescription: string;
}

const QuestionPage: React.FC<QuestionProps> = ({
  questions,
  currentQuestionIndex,
  onNextQuestion,
  title,
  type,
  onRestart,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (corrected?: boolean) => {
    onNextQuestion(corrected);
    setShowAnswer(false);
  };

  const getFretByQuestion = (question: number[]) => {
    return <FretBoard fretPosition={question} />
  }

  const parseQuestionByType = (type: string | undefined, question: string | number[]) => {
    if (type === 'fret' && Array.isArray(question)) {
      return getFretByQuestion(question)
    }
    return question
  }
  
  return (
    <Container>
      <Button onClick={onRestart} underline style={{ position: 'absolute', top: '1rem', left: '1rem'}}>
          Reset
      </Button>
      <Title>
        {title} 문항 {currentQuestionIndex + 1}
      </Title>
      <p className="mb-8">{parseQuestionByType(type, currentQuestion.question)}</p>
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
