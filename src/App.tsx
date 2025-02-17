import './App.css'
import Question from "./components/Question.tsx";
import { useState } from 'react';

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        {
            title: "An animal cell contains:",
            optionsPerSlider: [
                ['Cell wall', 'Ribosomes'],
                ['Cytoplasm', 'Chloroplast'],
                ['Partially permeable membrane', 'Impermeable membrane'],
                ['Cellulose', 'Mitochondria'],
            ],
            // The correct answers track the optionsPerSlider array, the answers must be in the same order!
            correctAnswers: ['Ribosomes', 'Cytoplasm', 'Partially permeable membrane', 'Mitochondria']
        },
        {
            title: "Which of these are characters from The Lord of the Rings?",
            optionsPerSlider: [
                ['Frodo', 'Luke Skywalker'],
                ['Harry Potter','Aragorn'],
                ['Gandalf', 'Dumbledore']
            ],
            // The correct answers track the optionsPerSlider array, the answers must be in the same order!
            correctAnswers: ['Frodo', 'Aragorn', 'Gandalf']
        },
        {
            title: "Which of these are from Star Wars?",
            optionsPerSlider: [
                ['The Force', 'The Ring', 'The Hammer'],
                ['The Orcs', 'The Sith', 'The Elves'],
                ['Wand', 'Sword', 'Lightsaber']
            ],
            // The correct answers track the optionsPerSlider array, the answers must be in the same order!
            correctAnswers: ['The Force', 'The Sith', 'Lightsaber']
        },
        {
            title: "Which of these are planets in our solar system?",
            optionsPerSlider: [
                ['Tatooine', 'Vulcan', 'Krypton', 'Mars'],
                ['Arrakis', 'Neptune', 'Hoth', 'Gallifrey']
            ],
            // The correct answers track the optionsPerSlider array, the answers must be in the same order!
            correctAnswers: ['Mars', 'Neptune']
        }
    ];

    return (
        <div>
            <Question
                title={questions[currentQuestionIndex].title}
                optionsPerSlider={questions[currentQuestionIndex].optionsPerSlider}
                correctAnswers={questions[currentQuestionIndex].correctAnswers}
            />

            <div className="nav-container">
                <button className="nav-button"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    disabled={currentQuestionIndex === 0}
                >
                    &lt;
                </button>

                <button className="nav-button"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    disabled={currentQuestionIndex === questions.length - 1}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default App;
