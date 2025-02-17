import Slider from './Slider';
import './Question.css';

interface QuestionProps {
    title: string;
    optionsPerSlider: string[][];
    correctAnswers: string[];
    selectedAnswers: string[];
    onAnswerChange: (index: number, answer: string) => void;
}

const Question = ({ title, optionsPerSlider, correctAnswers, selectedAnswers, onAnswerChange }: QuestionProps) => {
    const calculateCloseness = () => {
        return selectedAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
    };

    const closeness = calculateCloseness();
    const isCorrect = closeness === correctAnswers.length;

    const containerClassName = isCorrect
        ? 'question-container correct'
        : `question-container closeness-${closeness}`;

    return (
        <div className={containerClassName}>
            <h2 className="question-title">{title}</h2>
            {optionsPerSlider.map((options, index) => (
                <Slider
                    key={index}
                    options={options}
                    selected={selectedAnswers[index]}
                    onChange={(answer) => onAnswerChange(index, answer)}
                    disabled={isCorrect}
                />
            ))}

            <h3 className="question-result">
                {isCorrect ? 'Correct!' : 'The answer is incorrect'}
            </h3>
        </div>
    );
};

export default Question;
