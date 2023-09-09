import React from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  title: string;
}

const ResultPage: React.FC<ResultProps> = ({ score, totalQuestions, onRestart, title }) => {
  return (
    <div>
      <h1>{title} 결과</h1>
      <p>점수: {Math.floor(score/totalQuestions * 100)}점 ({score}/{totalQuestions})</p>
      <button onClick={onRestart}>처음으로 돌아가기</button>
    </div>
  );
};

export default ResultPage;