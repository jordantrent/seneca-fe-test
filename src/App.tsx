import './App.css';
import Question from "./components/Question.tsx";
import { useState } from 'react';
import { questions } from "./data/questions";

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[][]>(
        questions.map(q => Array(q.optionsPerSlider.length).fill(''))
    );

    const handleAnswerChange = (sliderIndex: number, answer: string) => {
        setSelectedAnswers(prev =>
            prev.map((answers, qIndex) =>
                qIndex === currentQuestionIndex
                    ? answers.map((a, sIndex) => (sIndex === sliderIndex ? answer : a))
                    : answers
            )
        );
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Question
                title={currentQuestion.title}
                optionsPerSlider={currentQuestion.optionsPerSlider}
                correctAnswers={currentQuestion.correctAnswers}
                selectedAnswers={selectedAnswers[currentQuestionIndex]}
                onAnswerChange={handleAnswerChange}
            />

            <div className="nav-container">
                <button
                    className="nav-button"
                    onClick={() => setCurrentQuestionIndex(i => i - 1)}
                    disabled={currentQuestionIndex === 0}
                >
                    &lt;
                </button>

                <button
                    className="nav-button"
                    onClick={() => setCurrentQuestionIndex(i => i + 1)}
                    disabled={currentQuestionIndex === questions.length - 1}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default App;