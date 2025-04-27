import React, { createContext, useContext, useState, ReactNode } from 'react';
import { questions, ARCHETYPES } from '../data/questions';

type ArchetypeKey = keyof typeof ARCHETYPES;

export type ArchetypeScoreResult = {
  key: ArchetypeKey;
  name: string;
  score: number;
  percentage: number;
};

interface TestContextType {
  currentQuestionIndex: number;
  answers: Record<number, number>;
  isComplete: boolean;
  archetypeResults: ArchetypeScoreResult[] | null;
  setAnswer: (questionId: number, value: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  completeTest: () => void;
  restartTest: () => void;
  totalQuestions: number;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) throw new Error('useTest must be used within a TestProvider');
  return context;
};

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [archetypeResults, setArchetypeResults] = useState<ArchetypeScoreResult[] | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const setAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  // --- Main Archetype Calculation Logic ---
  const calculateArchetypes = () => {
    const archetypePoints: Record<ArchetypeKey, number> = {} as Record<ArchetypeKey, number>;
    Object.keys(ARCHETYPES).forEach(key => { archetypePoints[key as ArchetypeKey] = 0; });


    Object.entries(answers).forEach(([questionId, answerIndex]) => {
      const q = questions.find(q => q.id === Number(questionId));
      if (!q) return;
      const answer = q.answers[answerIndex];
      if (!answer) return;
      const questionWeight = q.weight ?? 1;
      const optionWeight = answer.weight ?? 1;
      archetypePoints[answer.archetypes.primary] += 1 * optionWeight * questionWeight;
      if (answer.archetypes.secondary) {
        archetypePoints[answer.archetypes.secondary] += 1 * questionWeight;
      }
    });
    
      Object.entries(answers).forEach(([questionId, answerIndex]) => {
        const q = questions.find(q => q.id === Number(questionId));
        if (!q) return;
        const answer = q.answers[answerIndex];
        if (!answer) return;
        const questionWeight = q.weight ?? 1;
        const optionWeight = answer.weight ?? 1;
        archetypePoints[answer.archetypes.primary] += 1 * optionWeight * questionWeight;
        if (answer.archetypes.secondary) {
          archetypePoints[answer.archetypes.secondary] += 1 * questionWeight;
        }
      });

    const totalPoints = Object.values(archetypePoints).reduce((a, b) => a + b, 0) || 1;

    // Map to result objects
    const results: ArchetypeScoreResult[] = Object.entries(archetypePoints)
      .map(([key, score]) => ({
        key: key as ArchetypeKey,
        name: ARCHETYPES[key as ArchetypeKey],
        score,
        percentage: Math.round((score / totalPoints) * 100)
      }))
      .sort((a, b) => b.score - a.score);

    return results;
  };

  const completeTest = () => {
    setArchetypeResults(calculateArchetypes());
    setIsComplete(true);
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setArchetypeResults(null);
  };

  return (
    <TestContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        isComplete,
        archetypeResults,
        setAnswer,
        nextQuestion,
        prevQuestion,
        completeTest,
        restartTest,
        totalQuestions
      }}
    >
      {children}
    </TestContext.Provider>
  );
};