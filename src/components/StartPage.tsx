import React, { MouseEvent } from "react";

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
    <div>
      <h1>암기력 테스트</h1>
      <label>
        테스트 종류:
        <select value={testType} onChange={(e) => setTestType(e.target.value)}>
          <option value="">선택해주세요 :)</option>
          <option value="hiragana">히라가나 외우기</option>
          <option value="other_test_type">다른 테스트 종류</option>
        </select>
      </label>
      <br />
      <label>
        문항 수:
        <input
          type="number"
          value={questionCount}
          onChange={(e) =>
            setQuestionCount(Math.max(1, Number(e.target.value)))
          } // 최소값 1
        />
      </label>
      <br />
      <label>
        제한 시간 (초):
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => setTimeLimit(Math.max(10, Number(e.target.value)))} // 최소값 10
        />
      </label>
      <br />
      <button onClick={onStartTest}>시작</button>
    </div>
  );
};

export default StartPage;
