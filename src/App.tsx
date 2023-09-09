import { useState } from "react";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import { isEmpty } from "ramda";

interface Question {
  question: string;
  answer: string;
  answerDescription: string;
}

interface Data {
  title: string;
  data: Question[];
}

function App() {
  const [testType, setTestType] = useState("");
  const [questionCount, setQuestionCount] = useState(10);
  const [timeLimit, setTimeLimit] = useState(30);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState("");

  // 테스트 데이터를 JSON 파일로부터 로드하고 순서를 랜덤화하는 함수
  const loadTestData = () => {
    fetch(`/${testType}.json`)
      .then((response) => response.json())
      .then(({ title, data }: Data) => {
        // 데이터를 랜덤하게 섞습니다.
        const shuffledQuestions = shuffleArray(data);
        setQuestions(shuffledQuestions);
        setTitle(title);
        setCurrentQuestionIndex(0);
        setScore(0);
      })
      .catch((error) => {
        console.error("Error loading test data:", error);
      });
  };

  // 배열을 랜덤하게 섞는 함수
  const shuffleArray = (array: Question[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartTest = () => {
    if (!testType) {
      alert("테스트 종류를 선택해주세요!");
      return;
    }
    loadTestData();
  };

  const handleNextQuestion = (corrected?: boolean) => {
    if (corrected) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    // 테스트 재시작
    setTestType("");
    setQuestionCount(10);
    setTimeLimit(30);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuestions([]);
    setTitle("");
  };

  const totalQuestions = Math.min(questionCount, questions.length);

  if (isEmpty(questions)) {
    return (
      <StartPage
        onStartTest={handleStartTest}
        {...{
          testType,
          setTestType,
          questionCount,
          setQuestionCount,
          timeLimit,
          setTimeLimit,
        }}
      />
    );
  } else if (currentQuestionIndex < totalQuestions) {
    return (
      <QuestionPage
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        onNextQuestion={handleNextQuestion}
        title={title}
      />
    );
  } else {
    return (
      <ResultPage
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
        title={title}
      />
    );
  }
}

export default App;
