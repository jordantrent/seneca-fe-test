import React, { useState } from 'react';
import Slider from './Slider';
import './Question.css';

interface QuestionProps {
    title: string;
    optionsPerSlider: string[][];
    correctAnswers: string[];
}

const Question: React.FC<QuestionProps> = ({ title, optionsPerSlider, correctAnswers }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(optionsPerSlider.length).fill(''));

    const calculateCloseness = () => {
        return selectedAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
    };

    const handleAnswerChange = (index: number, answer: string) => {
        setSelectedAnswers((prev) => {
            const updatedAnswers = [...prev];
            updatedAnswers[index] = answer;
            return updatedAnswers;
        });
    };

    const closeness = calculateCloseness();
    const isCorrect = closeness === correctAnswers.length; 

    return (
        <div className={`question-container closeness-${closeness} ${isCorrect ? 'correct' : 'incorrect'}`}>
            <h2>{title}</h2>
            {optionsPerSlider.map((options, index) => (
                <Slider
                    key={index}
                    options={options}
                    selected={selectedAnswers[index]}
                    onChange={(answer) => handleAnswerChange(index, answer)}
                    disabled={isCorrect}
                />
            ))}

            <h3 style={{ color: 'white' }}>
                {isCorrect ? 'Correct!' : 'The answer is incorrect'}
            </h3>

        </div>
    );
};

export default Question;
