import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTest } from '../context/TestContext';
import { Brain, Star, BookOpen } from 'lucide-react';
import { getColorForArchetype } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const {archetypeResults, restartTest } = useTest();
  const navigate = useNavigate();

  if (!archetypeResults || archetypeResults.length === 0) {
    return <div>Loading results...</div>;
  }
  
  const dominantArchetype = archetypeResults[0];
  const otherArchetypes = archetypeResults.slice(1);
  const nonZeroArchetypes = otherArchetypes.filter(a => a.score > 0);
  const primaryArchetype = nonZeroArchetypes[0];
const secondaryArchetype = nonZeroArchetypes[1];
  return (
    <div className="result-container  text-center mt-8">
      <h1 className="sm:text-3xl md:text-4xl font-bold">*drumrolling*</h1>
      {secondaryArchetype && (
        <h3 className="sm:text-xl md:text-2xl mt-2">ps...your alter ego is {secondaryArchetype.name}</h3>
      )}
      <div className="image-container m-10" >
        <img
          src={`/images/${primaryArchetype.key}.jpg`}
          alt={primaryArchetype.name}
          className='m-auto sm:max-w-[300px] md:max-w-[500px]' 
        />
        <h3 className="sm:text-lg md:text-xl mt-6">Screenshot and share on X anon!</h3>
      </div>
      <div className="button-row" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button
      onClick={() => navigate("/wall-of-anon")}
      className='sm:text-2xl md:text-2xl w-full flex-1 px-3 mx-8 py-3 text-[5vw] bg-[#a6f894] text-[#000000] rounded-lg shadow-lg hover:bg-[#000000] hover:text-[#ffffff] transition-all'
      // style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}
    >Check Others</button>
      </div>
    </div>
  );
};

export default ResultsPage;