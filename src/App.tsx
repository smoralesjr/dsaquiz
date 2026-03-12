import { useState } from "react";
import { caucuses, questions, type CaucusId } from "./data";
import "./App.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<CaucusId, number>>({
    "21CS": 0,
    BnR: 0,
    BxB: 0,
    CC: 0,
    Constellation: 0,
    Emerge: 0,
    GW: 0,
    LSC: 0,
    MUG: 0,
    NS: 0,
    RS: 0,
    RnR: 0,
    SMC: 0,
    SoR: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);

  const handleAnswer = (points: Partial<Record<CaucusId, number>>) => {
    const newScores = { ...scores };
    for (const [caucus, point] of Object.entries(points)) {
      if (point) {
        newScores[caucus as CaucusId] += point;
      }
    }
    setScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const getTopCaucuses = () => {
    const maxScore = Math.max(...Object.values(scores));
    const topCaucusIds = (Object.keys(scores) as CaucusId[]).filter(
      (id) => scores[id] === maxScore,
    );
    return topCaucusIds.map((id) => caucuses[id]);
  };

  const restartQuiz = () => {
    setScores({
      "21CS": 0,
      BnR: 0,
      BxB: 0,
      CC: 0,
      Constellation: 0,
      Emerge: 0,
      GW: 0,
      LSC: 0,
      MUG: 0,
      NS: 0,
      RS: 0,
      RnR: 0,
      SMC: 0,
      SoR: 0,
    });
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="container">
        <header>
          <h1>DSA Caucus Sorting Quiz</h1>
          <p>
            Find out which caucus of the Democratic Socialists of America most
            aligns with your views based on electoral strategy, labor
            organizing, internal structure, and more.
          </p>
        </header>
        <button className="start-btn" onClick={() => setStarted(true)}>
          Start Quiz
        </button>
      </div>
    );
  }

  if (showResults) {
    const topMatches = getTopCaucuses();
    return (
      <div className="container results-container">
        <h2>Your Results</h2>
        <p>Based on your answers, you most closely align with:</p>
        <div className="matches">
          {topMatches.map((caucus) => (
            <div key={caucus.id} className="match-card">
              <h3>
                {caucus.name} {caucus.emoji}
              </h3>
              <p>
                <strong>Description:</strong> {caucus.description}
              </p>
              {caucus.founded && (
                <p>
                  <strong>Founded:</strong> {caucus.founded}
                </p>
              )}
              {caucus.publication && (
                <p>
                  <strong>Publication:</strong> {caucus.publication}
                </p>
              )}
              {caucus.website && (
                <a
                  href={caucus.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
        <button className="restart-btn" onClick={restartQuiz}>
          Retake Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="container quiz-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="question-count">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      <h2 className="question-text">{question.text}</h2>
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-btn"
            onClick={() => handleAnswer(answer.points)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
