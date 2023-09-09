import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  title: string;
}

const ResultPage: React.FC<ResultProps> = ({
  score,
  totalQuestions,
  onRestart,
  title,
}) => {
  return (
    <Container>
      <Title>
        {title} 결과
      </Title>
      <p className="mb-8">
        점수: {Math.floor((score / totalQuestions) * 100)}점 ({score}/
        {totalQuestions})
      </p>
      <Button onClick={onRestart}>처음으로 돌아가기</Button>
    </Container>
  );
};

export default ResultPage;
