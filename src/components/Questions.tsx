import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTest } from '../context/TestContext';
import { questions } from '../data/questions';

const Question: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  const {
    currentQuestionIndex,
    answers,
    setAnswer,
    nextQuestion,
    prevQuestion,
    completeTest,
    totalQuestions
  } = useTest();

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id];
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const answerLabels = ['A', 'B', 'C', 'D'];

  // Modified handler: auto-advance after selection
  const handleSelectOption = (answerIndex: number) => {
    setAnswer(currentQuestion.id, answerIndex);
    setTimeout(() => {
      if (currentQuestionIndex === totalQuestions - 1) {
        completeTest();
      } else {
        nextQuestion();
      }
    }, 200); // short delay for feedback
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
  <div className="backdrop-blur-md bg-white/30 w-full max-w-[650px] h-6 flex items-center px-4">
    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
      <div
        className="bg-green-400 h-2 transition-all duration-300 ease-in-out"
        style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
      />
    </div>
  </div>
</div>

<Card className="my-2 mx-auto animate-fade-in w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px]">
      <CardContent className="pt-6 ">
        <h3 className="text-2xl font-medium mb-2">{currentQuestion.chapter}</h3>
        <p className="text-xl mb-4">{currentQuestion.text}</p>

        {/* Small GIF */}
        <div className="w-full flex justify-center mb-4">
          <img src="/images/cat1.gif" alt="Quiz" className="w-16 h-16 object-contain rounded" />
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              className={`w-full flex flex-row items-start text-left h-auto py-3 px-2 sm:px-6 text-base sm:text-lg md:text-xl whitespace-normal break-words !bg-[#a6f894] !text-[#000000] hover:!bg-[#000000] hover:!text-[#ffffff] transition-all ${
                selectedAnswer === index ? 'ring-1 ring-[#31f104] bg-[#a6f894] text-[#000000]' : ''
              }`}
              onClick={() => handleSelectOption(index)}
            >
              <span className="min-w-[1.2em] text-xl text-left flex-shrink-0 font-bold">{answerLabels[index]}</span>
              <span className="block text-xl w-full break-words whitespace-normal">{answer.text}</span>
            </Button>
          ))}
        </div>

        <div className="flex justify-start mt-6">
          <Button
            variant="outline"
            className=" text-xl border-[1px] !border-[#000000] transition-all"
            onClick={
              isFirstQuestion ? onGoHome : prevQuestion
            }
          >
            Previous
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
    
  );
};

export default Question;