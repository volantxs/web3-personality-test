import React from 'react';
import { useTest } from '../context/TestContext';
import Question from './Questions';
// import ProgressBar from './ProgressBar';
import ResultsPage from './ResultsPage';

interface TestContainerProps {
  onStartTest: () => void;
  onGoHome: () => void;
  isStarted: boolean;
}

const TestContainer: React.FC<TestContainerProps> = ({ onStartTest, onGoHome, isStarted }) => {
  const { isComplete } = useTest();

  if (!isStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] w-full max-w-[1000px] mx-auto px-2 overflow-hidden">
  <h1
    className="text-[5.5vw] sm:text-3xl md:text-2xl mb-5 text-center mb-0 pixel-heading"
    style={{ color: "#000000", lineHeight: 1.1, wordBreak: "break-word" }}
  >
    What is your web3 type anon?
  </h1>
  {/* GIF Placeholder */}
  <img
  src="/images/avatar.gif"
  alt="Avatar The Last Airbender"
  className="sm:p-8 md:p-8 sm:w-[400px] md:w-[500px] mx-auto"
  style={{ display: "block" }}
/>
  {/* Buttons */}
  <div className="flex flex-row gap-3 justify-center w-full max-w-[550px] mt-5">
    <button
      className="py-3 w-full  max-w-[450px] text-[4vw] sm:text-3xl md:text-2xl bg-[#a8ff94] text-[#000000] rounded-lg shadow-lg hover:bg-[#000000] hover:text-[#ffffff] transition-all"
      style={{ minWidth: 0 }}
      onClick={onStartTest}
    >
      Find My Card
    </button>
  </div>
</div>
    );
  }

  if (isComplete) {
    return <ResultsPage />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* <ProgressBar /> */}
      <Question onGoHome={onGoHome} />
    </div>
  );
};

export default TestContainer;