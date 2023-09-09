import React, { MouseEvent } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";

interface FormInputProps {
  onStartTest: (e: MouseEvent<HTMLButtonElement>) => void;
  testType: string;
  setTestType: (type: string) => void;
  questionCount: number;
  setQuestionCount: (count: number) => void;
  timeLimit: number;
  setTimeLimit: (second: number) => void;
}

const StartPage: React.FC<FormInputProps> = ({
  onStartTest,
  testType,
  setTestType,
  questionCount,
  setQuestionCount,
  timeLimit,
  setTimeLimit,
}) => {
  return (
    <Container>
      <Title>
        memo tester.
      </Title>
      <label className="block mb-5">
        <div className="mb-2">테스트 종류</div>
        <select value={testType} onChange={(e) => setTestType(e.target.value)}>
          <option value="">선택해주세요 :)</option>
          <option value="hiragana">히라가나 테스트</option>
          <option value="katakana">카타카나 테스트</option>
        </select>
      </label>
      <br />
      {/* <label className="block mb-5">
        <div className="mb-2">문항 수</div>
        <input
          type="number"
          value={questionCount}
          onChange={(e) =>
            setQuestionCount(Math.max(1, Number(e.target.value)))
          } // 최소값 1
        />
      </label>
      <br />
      <label className="block mb-5">
        <div className="mb-2">제한 시간 (초)</div>
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => setTimeLimit(Math.max(10, Number(e.target.value)))} // 최소값 10
        />
      </label>
      <br /> */}
      <Button onClick={onStartTest}>
        start.
      </Button>
    </Container>
  );
};

export default StartPage;
