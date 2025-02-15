import React, {useState} from 'react';
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

    const getClosenessClass = () => {
        const closeness = calculateCloseness();
        return `closeness-${closeness}`;
    };

    const isCorrect = selectedAnswers.every((answer, index) => answer === correctAnswers[index]);

    return (
        <div className={`question-container ${getClosenessClass()}`}>
            <h2>{title}</h2>
            {optionsPerSlider.map((options, index) => (
                <Slider
                    key={index}
                    options={options}
                    selected={selectedAnswers[index]}
                    onChange={(answer) => handleAnswerChange(index, answer)}
                />
            ))}

            <h3 style={{ color: isCorrect ? 'green' : 'red' }}>
                {isCorrect ? 'Correct!' : 'Try Again'}
            </h3>

            <div>
                Closeness: {calculateCloseness()} / {optionsPerSlider.length}
            </div>
        </div>
    );
};

export default Question;
