import './App.css';
import Question from "./components/Question.tsx";
import {useEffect, useState} from 'react';
import { questions } from "./data/questions";

function App() {
    const questionIds = Object.keys(questions);

    const [currentQuestionId, setCurrentQuestionId] = useState(questionIds[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>(
        Object.fromEntries(
            Object.entries(questions).map(([id, q]) => [id, Array(q.optionsPerSlider.length).fill('')])
        )
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleAnswerChange = (questionId: string, sliderIndex: number, answer: string) => {
        setSelectedAnswers(prev => {
            const updatedAnswers = [...prev[questionId]];
            updatedAnswers[sliderIndex] = answer;

            return {
                ...prev,
                [questionId]: updatedAnswers
            };
        });
    };
    const currentQuestion = questions[currentQuestionId];

    const currentIndex = questionIds.indexOf(currentQuestionId);

    return (
        <div>
            <Question
                title={currentQuestion.title}
                optionsPerSlider={currentQuestion.optionsPerSlider}
                correctAnswers={currentQuestion.correctAnswers}
                selectedAnswers={selectedAnswers[currentQuestionId]}
                onAnswerChange={handleAnswerChange}
                isMobile={isMobile}
                id={currentQuestionId}
            />

            <div className="nav-container">
                <button
                    className="nav-button"
                    onClick={() => setCurrentQuestionId(questionIds[currentIndex - 1])}
                    disabled={currentIndex === 0}
                >
                    &lt;
                </button>

                <button
                    className="nav-button"
                    onClick={() => setCurrentQuestionId(questionIds[currentIndex + 1])}
                    disabled={currentIndex === questionIds.length - 1}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default App;
