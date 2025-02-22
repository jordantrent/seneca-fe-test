import Slider from './Slider';
import './Question.css';

interface QuestionProps {
    id: string;
    title: string;
    optionsPerSlider: string[][];
    correctAnswers: string[];
    selectedAnswers: string[];
    onAnswerChange: (id: string, index: number, answer: string) => void;
    isMobile: boolean;
}

const Question = ({ title, optionsPerSlider, correctAnswers, selectedAnswers, onAnswerChange, isMobile, id}: QuestionProps) => {

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
                    isMobile={isMobile}
                    key={index}
                    options={options}
                    selected={selectedAnswers[index]}
                    onChange={(answer) => onAnswerChange(id, index, answer)}
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
