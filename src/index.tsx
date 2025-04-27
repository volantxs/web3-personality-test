import React from "react";
import ReactDOM from "react-dom/client";
import { TestProvider } from "./context/TestContext";
import TestContainer from "./components/TestContainer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallOfAnon from "./components/WallOfAnon";

const Home = () => {
  const [isStarted, setIsStarted] = React.useState(false);

  const handleStartTest = () => {
    setIsStarted(true);
    window.scrollTo(0, 0);
  };
  const handleGoHome = () => setIsStarted(false);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      <header className="flex-1 flex flex-col justify-center items-center w-full px-2 sm:px-4">
        <TestProvider>
          <TestContainer onStartTest={handleStartTest} onGoHome={handleGoHome} isStarted={isStarted} />
        </TestProvider>
      </header>
      <footer className="w-full text-center text-muted-foreground sm:text-xl md:text-2xl ">
        <p>test made by <a href="https://x.com/0x0Kyoshi" className="underline" target="_blank" rel="noopener noreferrer">0x0Kyoshi</a></p>
        <p>
        powered by coffee and memes. gif credit goes to their creators.
        </p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wall-of-anon" element={<WallOfAnon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);