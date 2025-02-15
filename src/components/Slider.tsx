import React from 'react';
import './Slider.css';

interface SliderProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}

const Slider: React.FC<SliderProps> = ({ options, selected, onChange }) => {
    const selectedIndex = options.indexOf(selected);
    const thumbWidth = selected ? 100 / options.length : 0;
    const thumbLeft = selected ? (selectedIndex * 100) / options.length : 0;

    return (
        <div className="slider-container">
            <div className="slider-options">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`slider-option ${option === selected ? 'selected' : ''}`}
                        onClick={() => onChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div
                className="slider-thumb"
                style={{
                    left: `${thumbLeft}%`,
                    width: `${thumbWidth}%`,
                }}
            />
        </div>
    );
};

export default Slider;
